import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../components/edition/edition-create-user/userModel';

@Pipe({
	name: 'usersFilterPipeEdition'
})
export class UsersFilterPipeEdition implements PipeTransform {
	transform(users: User[], arg: string): any {
		if (arg.length < 3) {
			return users;
		}
		else {
			var usersResult = [];
			users.map((u) => {
				let strId = u.id.toString();
				if (
					u.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
					strId.indexOf(arg) > -1 ||
					u.birthdate.indexOf(arg) > -1
				) {
					usersResult.push({ name: u.name, id: u.id, birthdate: u.birthdate });
					console.log(usersResult);
				}
				else '';
			});
			return usersResult;
		}
		return usersResult;
	}
}
@Pipe({
	name: 'usersFilterPipeDisplay'
})
export class UsersFilterPipeDisplay implements PipeTransform {
	transform(users: User[], arg: string): any {
		if (arg.length < 3) {
			return users;
		}
		else {
			var usersResult = [];
			users.map((u) => {
				let strId = u.id.toString();
				if (
					u.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
					strId.indexOf(arg) > -1 ||
					u.birthdate.indexOf(arg) > -1
				) {
					usersResult.push({ name: u.name, id: u.id, birthdate: u.birthdate });
					console.log(usersResult);
				}
				else '';
			});
			return usersResult;
		}
		return usersResult;
		/* let usersResult: User[];
    users.map(u => u) */
	}
}
