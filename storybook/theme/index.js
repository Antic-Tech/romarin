import core from './core.theme.js';
import button from '../stories/Button/Buttom.theme';

baseTheme = {
	...core,
	...button
};

class ThemeProvider {
	localTheme = baseTheme;

	setTheme(theme) {
		this.localTheme = {
			...this.localTheme,
			...theme
		};
	}

	resetTheme() {
		this.localTheme = baseTheme;
	}

	get theme() {
		return this.localTheme;
	}
}
export default new ThemeProvider();
