import { BaseTheme } from '../definitions/Base.theme';
import { Theme } from '../definitions/Theme';
import buttonTheme from '../stories/Button/Button.theme';
import checkboxTheme from '../stories/Checkbox/Checkbox.theme';
import dividerTheme from '../stories/Divider/Divider.theme';
import inputTheme from '../stories/Input/Input.theme';
import pageTheme from '../stories/Page/Page.theme';
import textTheme from '../stories/Text/Text.theme';
import touchableTheme from '../stories/Touchable/Touchable.theme';
import coreTheme from './core.theme';

function getBaseTheme(coreTheme: BaseTheme): theme {
	return {
		base: coreTheme,
		page: pageTheme(coreTheme),
		checkbox: checkboxTheme(coreTheme),
		button: buttonTheme(coreTheme),
		text: textTheme(coreTheme),
		input: inputTheme(coreTheme),
		touchable: touchableTheme(coreTheme),
		divider: dividerTheme(coreTheme)
	};
}

class ThemeProvider {
	localTheme: Theme = getBaseTheme(coreTheme);

	setTheme(newTheme: Theme): void {
		const updatedCore:BaseTheme = {
			...coreTheme,
			...newTheme.base
		};

		const updatedTheme = getBaseTheme(updatedCore)

		this.localTheme = {
			base: updatedTheme.base,
			page: {
				...updatedTheme.page,
				...newTheme.page
			}
		};
	}

	resetTheme(): void {
		this.localTheme = getBaseTheme(coreTheme);
	}

	get theme(): Theme {
		return this.localTheme;
	}
}
export default new ThemeProvider();
