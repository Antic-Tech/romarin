import color from "./color";

const stuff = {
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
  marginXSmall: 4
};

export default class Theme {
  theme;

  constructor() {
    this.theme = {
      ...color,
      ...stuff
    };
  }

  setTheme(newTheme) {
    this.theme = {
      ...this.theme,
      ...newTheme
    };
  }

  getTheme(theme) {
    return theme;
  }
}
