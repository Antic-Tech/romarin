// import Icon from '@components/Icon/Icon.component';
import React from 'react';
import { Image, View } from 'react-native';
import ThemeProvider from '../../theme';
import { withCommonProps } from '../../utils/withCommonProps';

export default withCommonProps(
	class Checkbox extends React.Component {
		render() {
			const { checked } = this.props;

			return (
				<View
					style={{
						borderRadius: ThemeProvider.theme.checkboxBorderRadius,
						borderColor: checked
							? ThemeProvider.theme.focusedInputBorderColor
							: ThemeProvider.theme.inputBorderColor,
						height: ThemeProvider.theme.checkboxSize,
						width: ThemeProvider.theme.checkboxSize,
						backgroundColor: checked ? ThemeProvider.theme.checkboxColorChecked : undefined,
						borderWidth: ThemeProvider.theme.inputBorderWidth,
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					{checked && (
						<Image
							style={{
								backgroundColor: 'transparent',
								height: ThemeProvider.theme.checkboxSize - ThemeProvider.theme.checkboxPadding,
								width: ThemeProvider.theme.checkboxSize - ThemeProvider.theme.checkboxPadding
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
