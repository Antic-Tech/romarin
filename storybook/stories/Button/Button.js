import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import design from "../../theme";
import Theme from "../../theme/theme";

const styles = StyleSheet.create({
  button: {
    borderRadius: design.borderRadius,
    padding: design.padding.medium,
    backgroundColor: design.color.primary
  },
  label: {
    fontSize: design.fontSize.medium,
    color: design.color.white
  }
});

const Button = props => (
  <TouchableOpacity
    {...props}
    style={styles.button}
    onPress={props.disabled ? undefined : props.onPress}
  >
    <Text style={styles.label}>{props.label}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  text: PropTypes.string
};

Button.defaultProps = {
  onPress: () => {}
};

export { Button as default };
