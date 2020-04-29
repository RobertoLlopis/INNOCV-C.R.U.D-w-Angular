import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EditionService } from './edition.service';

@Component({
	selector: 'app-edition',
	templateUrl: './edition.component.html',
	styleUrls: [
		'./edition.component.scss'
	]
})
export class EditionComponent implements OnInit {
	public displayParams: { userId: number; editionMode: string };
	constructor(
		public route: ActivatedRoute,
		public editionService: EditionService
	) {}
	ngOnInit() {
		this.editionService.getUsers();
		this.route.paramMap.subscribe((paraMap: ParamMap) => {
			if (paraMap.has('userId')) {
				this.displayParams = {
					userId: Number(paraMap.get('userId')),
					editionMode: 'edit'
				};
			}
			else {
				this.displayParams = { userId: null, editionMode: 'create' };
			}
		});
	}
}
