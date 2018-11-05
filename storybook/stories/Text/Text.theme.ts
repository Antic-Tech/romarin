import { BaseTheme } from '../../definitions/Base.theme.d';
import { TextTheme } from '../../definitions/Text.theme.d';

function getTextTheme(core:BaseTheme): TextTheme{
	return {
		color: core.colorBlack,
		colorMuted: core.colorLightGray,
		colorTouchable: core.colorPrimary,
	}
};

export default getTextTheme;
