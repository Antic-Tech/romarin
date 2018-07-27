import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import design from '../../theme';

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

const Button = props => {
	  const { onPress, disabled, full, label } = props;

    return(
        <TouchableOpacity
          style={styles.button}
          onPress={disabled ? undefined : onPress}>
            <Text style={styles.label}>{props.label}</Text>
        </TouchableOpacity>
    );
};

Button.propTypes = {
	onPress: PropTypes.func,
	disabled: PropTypes.bool,
	full: PropTypes.bool,
	label: PropTypes.string
};

Button.defaultProps = {
	onPress: () => {}
};

export { Button as default };
