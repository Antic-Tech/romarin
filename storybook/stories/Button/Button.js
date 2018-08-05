import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from '../../components';
import ThemeProvider from '../../theme';

const Button = props => {
	const styles = StyleSheet.create({
		button: {
			borderRadius: ThemeProvider.theme.buttonBorderRadius,
			padding: ThemeProvider.theme.buttonPadding,
			backgroundColor: ThemeProvider.theme.colorPrimary
		},
		label: {
			textAlign: 'center'
		}
	});

	const { onPress, disabled, full, label } = props;

	return (
		<TouchableOpacity style={styles.button} onPress={disabled ? undefined : onPress}>
			<Text style={styles.label} color={ThemeProvider.theme.buttonTextColor}>
				{label}
			</Text>
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
