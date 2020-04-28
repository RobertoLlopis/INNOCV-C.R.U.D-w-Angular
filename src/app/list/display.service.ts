import { User } from '../edition/edition-create-user/userModel';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ParamMap } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class DisplayService {
	editionParams = new Subject<object>();
	constructor() {}
	getEditionParamsUpdatedListener() {
		return this.editionParams.asObservable();
	}
	userEditMode(paraMap: ParamMap) {}
}
