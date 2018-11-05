import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';
import ThemeProvider from '../../theme';
import { withCommonProps } from '../../utils/withCommonProps';

const RomarinText = (props) => {
	const fontSizes = {
		xlarge: ThemeProvider.theme!.base!.fontSizeXLarge,
		large: ThemeProvider.theme!.base!.fontSizeLarge,
		medium: ThemeProvider.theme!.base!.fontSizeMedium,
		small: ThemeProvider.theme!.base!.fontSizeSmall,
		xsmall: ThemeProvider.theme!.base!.fontSizeXSmall
	};
	const { size, muted, color, weight, children, style = {} } = props;
	const textColor = color ? color : muted ? ThemeProvider.theme.text.colorMuted : ThemeProvider.theme.text.color;
	return (
		<Text
			style={[
				{
					fontSize: fontSizes[size],
					fontFamily: ThemeProvider.theme.fontFamily,
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
