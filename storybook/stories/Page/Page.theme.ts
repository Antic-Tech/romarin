import { BaseTheme } from '../../definitions/Base.theme.d';
import { PageTheme } from '../../definitions/Page.theme.d';

function getPageTheme(base: BaseTheme): PageTheme {
	return {
		padding: base.paddingMedium,
		backgroundColor: base.colorWhite
	};
}
export default getPageTheme;
