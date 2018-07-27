import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import theme from '../../theme';

const RomarinText = props => {
	const fontSizes = {
		xlarge: theme.fontSizeXLarge,
		large: theme.fontSizeLarge,
		medium: theme.fontSizeMedium,
		small: theme.fontSizeSmall,
		xsmall: theme.fontSizeXSmall
	};
	const { size, muted, children } = props;

	return (
		<Text
			style={{
				fontSize: fontSizes[size],
				color: muted ? theme.textColorMuted : theme.textColor
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
    size: "medium",
    muted: false
};

export { RomarinText as default };
