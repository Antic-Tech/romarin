import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';
import { withTheme } from '../../theme';

const RomarinText = (props) => {
	const fontSizes = {
		xlarge: props.theme!.base!.fontSizeXLarge,
		large: props.theme!.base!.fontSizeLarge,
		medium: props.theme!.base!.fontSizeMedium,
		small: props.theme!.base!.fontSizeSmall,
		xsmall: props.theme!.base!.fontSizeXSmall
	};
	const { size, muted, color, weight, children, style = {} } = props;
	const textColor = color ? color : muted ? props.theme.text.colorMuted : props.theme.text.color;
	return (
		<Text
			style={[
				{
					fontSize: fontSizes[size],
					fontFamily: props.theme.fontFamily,
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

export default withTheme(RomarinText);
