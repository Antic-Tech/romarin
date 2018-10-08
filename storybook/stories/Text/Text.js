import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';
import ThemeProvider from '../../theme';
import { withCommonProps } from '../../utils/withCommonProps';

const RomarinText = (props) => {
	const fontSizes = {
		xlarge: ThemeProvider.theme.coreFontSizeXLarge,
		large: ThemeProvider.theme.coreFontSizeLarge,
		medium: ThemeProvider.theme.coreFontSizeMedium,
		small: ThemeProvider.theme.coreFontSizeSmall,
		xsmall: ThemeProvider.theme.coreFontSizeXSmall
	};
	const { size, muted, color, weight, children, style = {} } = props;
	const textColor = color ? color : muted ? ThemeProvider.theme.textColorMuted : ThemeProvider.theme.textColor;
	return (
		<Text
			style={[
				{
					fontSize: fontSizes[size],
					fontFamily: ThemeProvider.theme.textFontFamily,
					color: textColor,
					fontWeight: weight
				},
				style
			]}
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

export default withCommonProps(RomarinText);
