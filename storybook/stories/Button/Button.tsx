import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Touchable } from '../../components';
import { withTheme } from '../../theme';
class Button extends React.Component {
	render() {
		const { onPress, disabled, full, label, theme } = this.props;

		const styles = StyleSheet.create({
			button: {
				borderRadius: theme.button.borderRadius,
				paddingHorizontal: theme.button.paddingHorizontal,
				paddingVertical: theme.button.paddingVertical,
				backgroundColor: theme.base.colorPrimary
			},
			label: {
				textAlign: 'center',
				fontWeight: theme.button.labelWeight
			}
		});

		return (
			<Touchable type="opacity" style={styles.button} onPress={disabled ? undefined : onPress}>
				<Text style={styles.label} color={theme.button.labelColor}>
					{label}
				</Text>
			</Touchable>
		);
	}
}
// console.error("ThemeContext",JSON.stringify(ThemeContext._currentValue,null,2))

Button.defaultProps = {
	onPress: () => {}
};

export default withTheme(Button);
