import { User } from './edition-create-user/userModel';
import { HttpClient } from '@angular/common/http';

import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EditionService implements OnInit {
	users: User[] = [
		{
			id: 19282838,
			name: 'Joegr',
			birthdate: '1992-10-02T00:00:00'
		}
	];
	private usersUpdated = new Subject<User[]>();

	constructor(private http: HttpClient) {}
	ngOnInit() {
		this.getUsers();
	}
	getUsersUpdatedListener() {
		return this.usersUpdated.asObservable();
	}
	getEditingUser(userId: number) {
		return { ...this.users.find((u) => u.id === userId) };
	}
	getUsers() {
		this.http
			.get<User[]>('http://hello-world.innocv.com/api/user')
			.subscribe((res) => {
				this.users = res;
				this.usersUpdated.next([
					...this.users
				]);
			});
	}
	addUser(user) {
		this.http
			.post<User>('http://hello-world.innocv.com/api/user', user)
			.subscribe((res) => {
				console.log('New user added', res);
				this.users.push({
					id: 1,
					name: user.name,
					birthdate: user.birthdate
				});
				console.log(this.users);
				this.usersUpdated.next([
					...this.users
				]);
			});
	}
	updateUser(user: User) {
		this.http
			.put<User>('http://hello-world.innocv.com/api/user', user)
			.subscribe((res) => {
				console.log(`User ${user.id} updated`);
				let newUsers = this.users.map(
					(u) =>
						u.id === user.id
							? (u = {
									id: user.id,
									name: user.name,
									birthdate: user.birthdate
								})
							: u
				);
				this.users = newUsers;
				this.usersUpdated.next([
					...this.users
				]);
			});
	}
	deleteUser(deletedId: number) {
		this.http
			.delete(`http://hello-world.innocv.com/api/user/${deletedId}`)
			.subscribe((res) => {
				this.users = this.users.filter((u) => u.id !== deletedId);
				this.usersUpdated.next([
					...this.users
				]);
			});
	}
}
