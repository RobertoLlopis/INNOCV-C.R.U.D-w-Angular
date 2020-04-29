import {
	Component,
	OnInit,
	OnDestroy,
	Input,
	AfterContentInit
} from '@angular/core';
import { User } from '../edition-create-user/userModel';
import { EditionService } from '../edition.service';
import { Subscription } from 'rxjs';
import { toogleData } from '../../appHelpers/extraFunctionality';
@Component({
	selector: 'edition-list',
	templateUrl: './edition-list.component.html',
	styleUrls: [
		'./edition-list.component.scss'
	]
})
export class EditionListComponent implements OnInit, OnDestroy {
	isLoading: boolean = false;
	@Input() public displayParams: { userId: number; editionMode: string };
	private userSub: Subscription;
	constructor(public editionService: EditionService) {}
	users: User[] = [];
	filterUsers = '';
	ngOnInit() {
		toogleData(this.isLoading);
		this.editionService.getUsers();
		this.userSub = this.editionService
			.getUsersUpdatedListener()
			.subscribe((users: User[]) => {
				this.users = users;
				console.log(this.users);
				toogleData(this.isLoading);
			});
	}

	onDelete(userId: number) {
		this.editionService.deleteUser(userId);
	}
	ngOnDestroy() {
		this.userSub.unsubscribe();
	}
}
