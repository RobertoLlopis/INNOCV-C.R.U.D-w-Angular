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
	console.log(breakpoints);
	return breakpoints;
}
export const toogleData = (data: boolean) => (data = !data);
