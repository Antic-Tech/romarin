import color from "./color";

const stuff = {
  borderRadius: 10,
  fontSize: {
    xlarge: 32,
    large: 22,
    medium: 17,
    small: 15,
    xsmall: 13
  },
  padding: {
    xlarge: 32,
    large: 24,
    medium: 16,
    small: 8,
    xsmall: 4
  },
  margin: {
    xlarge: 32,
    large: 24,
    medium: 16,
    small: 8,
    xsmall: 4
  },
  buttonSize: {
    xlarge: 100,
    large: 84,
    medium: 68,
    small: 52,
    xsmall: 36
  },
  iconSize: {
    xlarge: 52,
    large: 44,
    medium: 36,
    small: 28,
    xsmall: 20
  }
};

export default {
  color,
  ...stuff
};
