import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-header',
	templateUrl: './app-header.component.html',
	styleUrls: [
		'./app-header.component.scss'
	]
})
export class AppHeader {
	activeEnglish: boolean = true;
	activeSpanish: boolean;
	windowWidth: number = window.innerWidth;
	constructor(private translate: TranslateService) {}
	onResize(e) {
		this.windowWidth = e.target.innerWidth;
	}
	handleTranslation(language) {
		if (language === 'en') {
			this.translate.use('en');
			this.activeEnglish = true;
			this.activeSpanish = false;
		}
		else if (language === 'es') {
			this.translate.use('es');
			this.activeEnglish = false;
			this.activeSpanish = true;
		}
	}
}
