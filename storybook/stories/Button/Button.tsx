import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Touchable } from '../../components';
import ThemeProvider from '../../theme';

const Button = (props) => {
	const styles = StyleSheet.create({
		button: {
			borderRadius: ThemeProvider.theme.button.borderRadius,
			paddingHorizontal: ThemeProvider.theme.button.paddingHorizontal,
			paddingVertical: ThemeProvider.theme.button.paddingVertical,
			backgroundColor: ThemeProvider.theme.base.colorPrimary
		},
		label: {
			textAlign: 'center',
			fontWeight: ThemeProvider.theme.button.labelWeight
		}
	});

	const { onPress, disabled, full, label } = props;

	return (
		<Touchable type="opacity" style={styles.button} onPress={disabled ? undefined : onPress}>
			<Text style={styles.label} color={ThemeProvider.theme.button.labelColor}>
				{label}
			</Text>
		</Touchable>
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

