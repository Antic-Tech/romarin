// import Icon from '@components/Icon/Icon.component';
import React from 'react';
import { Image, View } from 'react-native';
import { withTheme } from '../../theme';

export default withTheme(
	class Checkbox extends React.Component {
		render() {
			const { checked, theme } = this.props;

			return (
				<View
					style={{
						borderRadius: theme.checkboxBorderRadius,
						borderColor: checked
							? theme.focusedInputBorderColor
							: theme.inputBorderColor,
						height: theme.checkboxSize,
						width: theme.checkboxSize,
						backgroundColor: checked ? theme.checkboxColorChecked : undefined,
						borderWidth: theme.inputBorderWidth,
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					{checked && (
						<Image
							style={{
								backgroundColor: 'transparent',
								height: theme.checkboxSize - theme.checkboxPadding,
								width: theme.checkboxSize - theme.checkboxPadding
							}}
							resizeMode="cover"
							source={require('./check.png')}
						/>
					)}
				</View>
			);
		}
	}
);
