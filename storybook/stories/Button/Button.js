import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Touchable, Text } from '../../components';
import ThemeProvider from '../../theme';

const Button = props => {
	const styles = StyleSheet.create({
		button: {
			borderRadius: ThemeProvider.theme.buttonBorderRadius,
			padding: ThemeProvider.theme.buttonPadding,
			backgroundColor: ThemeProvider.theme.colorPrimary,
			borderColor: ThemeProvider.theme.colorPrimary,
			borderWidth: ThemeProvider.theme.buttonBorderWidth,
		},
		label: {
			textAlign: 'center'
		},
		buttonOutline: {
			borderRadius: ThemeProvider.theme.buttonBorderRadius,
			padding: ThemeProvider.theme.buttonPadding,
			borderColor: ThemeProvider.theme.colorPrimary,
			borderWidth: ThemeProvider.theme.buttonBorderWidth,
			backgroundColor: "transparent"
		}
	});

	const { onPress, disabled, full, label, outline } = props;

	return (
		<Touchable type="opacity" style={outline ? styles.buttonOutline : styles.button} onPress={disabled ? undefined : onPress}>
			<Text style={styles.label} color={outline ? ThemeProvider.theme.colorPrimary : ThemeProvider.theme.buttonTextColor}>
				{label}
			</Text>
		</Touchable>
	);
};

Button.propTypes = {
	outline: PropTypes.bool,
	onPress: PropTypes.func,
	disabled: PropTypes.bool,
	full: PropTypes.bool,
	label: PropTypes.string
};

Button.defaultProps = {
	onPress: () => {}
};

export { Button as default };
