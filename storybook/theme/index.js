import color from './color';

const defaultTheme = {
	...color,
	borderRadius: 10,

	fontSizeXLarge: 34,
	fontSizeLarge: 28,
	fontSizeMedium: 17,
	fontSizeSmall: 13,
	fontSizeXSmall: 11,

	paddingXLarge: 32,
	paddingLarge: 24,
	paddingMedium: 16,
	paddingSmall: 8,
	paddingXSmall: 4,

	marginXLarge: 32,
	marginLarge: 24,
	marginMedium: 16,
	marginSmall: 8,
	marginXSmall: 4,

	iconSizeXLarge: 52,
	iconSizeLarge: 44,
	iconSizeMedium: 36,
	iconSizeSmall: 28,
	iconSizeXSmall: 20
};

class ThemeProvider {
	localTheme = defaultTheme;

	setTheme(theme) {
		this.localTheme = {
			...this.localTheme,
			...theme
		};
	}

	resetTheme() {
		this.localTheme = defaultTheme;
	}

	get theme() {
		return this.localTheme;
	}
}
export default new ThemeProvider();
