import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import design from "../../theme";

const styles = StyleSheet.create({
  button: {
    borderRadius: design.borderRadius,
    padding: design.paddingMedium,
    backgroundColor: design.colorPrimary
  },
  label: {
    fontSize: design.fontSizeMedium,
    color: design.colorWhite
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
