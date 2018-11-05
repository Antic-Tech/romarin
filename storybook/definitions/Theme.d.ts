import { BaseTheme } from './Base.theme';
import { ButtonTheme } from './Button.theme';
import { PageTheme } from './Page.theme';


export interface Theme {
	base?: BaseTheme;
	page?:PageTheme;
	checkbox?:any;
	button?:ButtonTheme;
	text?:any;
	input?:any;
	touchable?:any;
	divider?:any;
}
