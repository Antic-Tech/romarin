import coreTheme from './core.theme.js';
import button from '../stories/Button/Buttom.theme';

const getBaseTheme = coreTheme => ({
	...coreTheme,
	...button(coreTheme)
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
