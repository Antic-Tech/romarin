import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import ThemeProvider from '../../theme';

const RomarinText = props => {
	const fontSizes = {
		xlarge: ThemeProvider.theme.coreFontSizeXLarge,
		large: ThemeProvider.theme.coreFontSizeLarge,
		medium: ThemeProvider.theme.coreFontSizeMedium,
		small: ThemeProvider.theme.coreFontSizeSmall,
		xsmall: ThemeProvider.theme.coreFontSizeXSmall
	};
	const { size, muted, color, children } = props;

	const textColor = color ? color : muted ? ThemeProvider.theme.textColorMuted : ThemeProvider.theme.textColor;
	return (
		<Text
			style={{
				fontSize: fontSizes[size],
				fontFamily: ThemeProvider.theme.textFontFamily,
				color: textColor
			}}
		>
			{children}
		</Text>
	);
};

RomarinText.propTypes = {
	size: PropTypes.string,
	muted: PropTypes.bool
};

RomarinText.defaultProps = {
	size: 'medium',
	muted: false
};

export { RomarinText as default };
