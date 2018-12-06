import { BaseTheme } from '../../definitions/Base.theme.d';
import { TextTheme } from '../../definitions/Text.theme.d';

function getTextTheme(base:BaseTheme): TextTheme{
	return {
		color: base.colorBlack,
		colorMuted: base.colorLightGray,
		colorTouchable: base.colorPrimary,
	}
};

export default getTextTheme;
