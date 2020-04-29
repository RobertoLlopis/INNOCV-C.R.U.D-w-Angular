import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	OnDestroy
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { EditionService } from '../edition.service';
import { User } from './userModel';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'edition-create-user',
	templateUrl: './edition-create-user.component.html',
	styleUrls: [
		'./edition-create-user.component.scss'
	]
})
export class CreateUserComponent implements OnInit, OnDestroy {
	user: User;
	users: User[] = [];
	private userSub: Subscription;
	@Input() displayParams: { editionMode: string; userId: number };
	@Output() displayParamsChange = new EventEmitter<object>();

	constructor(
		public editionService: EditionService,
		private router: Router,
		private snackBar: MatSnackBar
	) {}

	ngOnInit() {
		this.userSub = this.editionService
			.getUsersUpdatedListener()
			.subscribe((users: User[]) => (this.users = users));
		if (this.displayParams.editionMode === 'edit') {
			this.user = this.editionService.getEditingUser(this.displayParams.userId);
			console.log(this.user);
		}
		else {
			'';
		}
	}
	handleNewUser(form: NgForm) {
		if (form.invalid) {
			return;
		}
		const newUser: { name: string; birthdate: string } = {
			name: form.value.name,
			birthdate: `${form.value.birthdate}T00:00:00`
		};
		console.log(newUser);
		let isUndo: boolean = false;
		let snackBarRef = this.snackBar.open(`User ${newUser.name} added`, 'UNDO', {
			duration: 2000
		});
		snackBarRef.onAction().subscribe(() => {
			console.log('New user creation aborted');
			isUndo = true;
		});
		snackBarRef.afterDismissed().subscribe(() => {
			if (!isUndo) {
				this.editionService.addUser(newUser);
			}
		});

		form.resetForm();
	}
	handleEditUser(form: NgForm) {
		if (form.invalid) {
			return;
		}
		const updatedUser: { id: number; name: string; birthdate: string } = {
			id: this.displayParams.userId,
			name: form.value.name,
			birthdate: `${form.value.birthdate}T00:00:00`
		};
		console.log(updatedUser);
		let isUndo: boolean = false;
		let snackBarRef = this.snackBar.open(
			`User ${updatedUser.name} edited`,
			'UNDO',
			{
				duration: 2000
			}
		);
		snackBarRef.onAction().subscribe(() => {
			console.log('Updated user aborted');
			isUndo = true;
			this.router.navigateByUrl('/edition/display');
		});
		snackBarRef.afterDismissed().subscribe(() => {
			if (!isUndo) {
				this.editionService.updateUser(updatedUser);
				this.displayParamsChange.emit({ userId: null, editionMode: 'create' });
			}
		});
		form.resetForm();
	}
	onCancel(form: NgForm) {
		this.displayParamsChange.emit({ userId: null, editionMode: 'create' });
		this.router.navigateByUrl('/edition/display');
		form.resetForm();
	}
	ngOnDestroy() {
		this.userSub.unsubscribe();
	}
}
