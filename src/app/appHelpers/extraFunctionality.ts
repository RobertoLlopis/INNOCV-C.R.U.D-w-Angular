import {
	animate,
	query,
	style,
	transition,
	trigger,
	group,
	animateChild
} from '@angular/animations';

export function breakpointUnits(windowInnerWidth) {
	let breakpoints = { columns: 0, proportion: 0 };
	if (windowInnerWidth > 1360) {
		breakpoints.columns = 4;
		breakpoints.proportion = 4;
	}
	else if (windowInnerWidth >= 1200) {
		breakpoints.columns = 4;
		breakpoints.proportion = 3;
	}
	else if (windowInnerWidth >= 1000) {
		breakpoints.columns = 3;
		breakpoints.proportion = 4;
	}
	else if (windowInnerWidth >= 677) {
		breakpoints.columns = 2;
		breakpoints.proportion = 4;
	}
	else if (windowInnerWidth >= 593) {
		breakpoints.columns = 1;
		breakpoints.proportion = 7;
	}
	else if (windowInnerWidth >= 419) {
		breakpoints.columns = 1;
		breakpoints.proportion = 5;
	}
	else if (windowInnerWidth < 419) {
		breakpoints.columns = 1;
		breakpoints.proportion = 4;
	}
	else console.log(windowInnerWidth);
	return breakpoints;
}
/* -1 => * ,1=>2,1=>3,1=>4, 2=>3,  2=>4, 3=>4 */
export const toogleData = (data: boolean) => (data = !data);
export function routerAnimation() {
	return trigger('routerAnimation', [
		transition('1=>2,1=>3,1=>4, 2=>3,  3=>4', [
			style({ position: 'relative' }),
			query(':enter, :leave', [
				style({
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%'
				})
			]),
			query(':enter', [
				style({ right: '-100%', opacity: 0 })
			]),
			query(':leave', animateChild()),
			group([
				query(':leave', [
					animate('1s ease-out', style({ right: '100%', opacity: 0 }))
				]),
				query(':enter', [
					animate('1s ease-out', style({ right: '0%', opacity: 1 }))
				])
			]),
			query(':enter', animateChild())
		]),
		transition('4 => 3, 4 => 2, 4=>1, 3=>2, 3=>1,2=>1', [
			style({ position: 'relative' }),
			query(':enter, :leave', [
				style({
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%'
				})
			]),
			query(':enter', [
				style({ left: '-100%', opacity: 0 })
			]),
			query(':leave', animateChild()),
			group([
				query(':leave', [
					animate('1s ease-out', style({ left: '100%', opacity: 0 }))
				]),
				query(':enter', [
					animate('1s ease-out', style({ left: '0%', opacity: 1 }))
				])
			]),
			query(':enter', animateChild())
		])
	]);
}
/* export function routerAnimation() {
	return trigger('routerAnimation', [
		// One time initial load. Move page from left -100% to 0%
		transition('-1 => *', [
			query(':enter', [
				style({
					position: 'fixed',
					width: '100%',
					transform: 'translateX(-100%)'
				}),
				animate(
					'500ms ease',
					style({
						opacity: 1,
						transform: 'translateX(0%)'
					})
				)
			])
		]),

		// Previous, slide left to right to show left page
		transition(':decrement', [
			// set new page X location to be -100%
			query(
				':enter',
				style({
					position: 'fixed',
					width: '100%',
					transform: 'translateX(-100%)'
				})
			),

			group([
				// slide existing page from 0% to 100% to the right
				query(
					':leave',
					animate(
						'500ms ease',
						style({
							position: 'fixed',
							width: '100%',
							transform: 'translateX(100%)'
						})
					)
				),
				// slide new page from -100% to 0% to the right
				query(
					':enter',
					animate(
						'500ms ease',
						style({
							opacity: 1,
							transform: 'translateX(0%)'
						})
					)
				)
			])
		]),

		// Next, slide right to left to show right page
		transition(':increment', [
			// set new page X location to be 100%
			query(
				':enter',
				style({
					position: 'fixed',
					width: '100%',
					transform: 'translateX(100%)'
				})
			),

			group([
				// slide existing page from 0% to -100% to the left
				query(
					':leave',
					animate(
						'500ms ease',
						style({
							position: 'fixed',
							width: '100%',
							transform: 'translateX(-100%)'
						})
					)
				),
				// slide new page from 100% to 0% to the left
				query(
					':enter',
					animate(
						'500ms ease',
						style({
							opacity: 1,
							transform: 'translateX(0%)'
						})
					)
				)
			])
		])
	]);
}
 */
