import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionListComponent } from './edition-list.component';

describe('ListComponent', () => {
	let component: EditionListComponent;
	let fixture: ComponentFixture<EditionListComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					EditionListComponent
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(EditionListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
