import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../edition/edition-create-user/userModel';
import { EditionService } from '../../edition/edition.service';
import { Subscription } from 'rxjs';
import {
	breakpointUnits,
	toogleData
} from '../../../appHelpers/extraFunctionality';

@Component({
	selector: 'list-display',
	templateUrl: 'list-display.component.html',
	styleUrls: [
		'./list-display.component.scss'
	]
})
export class ListDisplayComponent implements OnInit, OnDestroy {
	private userSub: Subscription;
	constructor(public editionService: EditionService) {}
	users: User[] = [];
	breakpoints: { columns: number; proportion: number };
	isLoading: boolean = false;
	filterUsers = '';

	birthdateDisplayable(usersGotten) {
		return usersGotten.map((u) => {
			u.birthdate = u.birthdate.slice(0, 10);
			return u;
		});
	}

	ngOnInit() {
		toogleData(this.isLoading);
		this.editionService.getUsers();
		this.userSub = this.editionService
			.getUsersUpdatedListener()
			.subscribe((users: User[]) => {
				toogleData(this.isLoading);
				this.users = this.birthdateDisplayable(users);
			});
		this.breakpoints = breakpointUnits(window.innerWidth);
	}

	onResize(event) {
		this.breakpoints = breakpointUnits(event.target.innerWidth);
	}
	ngOnDestroy() {
		this.userSub.unsubscribe();
	}
}
