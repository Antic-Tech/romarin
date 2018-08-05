import coreTheme from './core.theme.js';
import buttonTheme from '../stories/Button/Button.theme';
import textTheme from '../stories/Text/Text.theme';
import inputTheme from '../stories/Input/Input.theme';

const getBaseTheme = coreTheme => ({
	...coreTheme,
	...buttonTheme(coreTheme),
	...textTheme(coreTheme),
	...inputTheme(coreTheme)
});

class ThemeProvider {
	localTheme = getBaseTheme(coreTheme);

	setTheme(newTheme) {
		const updatedCore = {
			...coreTheme,
			...newTheme
		};

		this.localTheme = {
			...getBaseTheme(updatedCore),
			...newTheme
		};
	}

	resetTheme() {
		this.localTheme = getBaseTheme(coreTheme);
	}

	get theme() {
		return this.localTheme;
	}
}
export default new ThemeProvider();
