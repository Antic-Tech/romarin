import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ThemeProvider from '../../theme';

const RomarinText = props => {
	const fontSizes = {
		xlarge: ThemeProvider.theme.fontSizeXLarge,
		large: ThemeProvider.theme.fontSizeLarge,
		medium: ThemeProvider.theme.fontSizeMedium,
		small: ThemeProvider.theme.fontSizeSmall,
		xsmall: ThemeProvider.theme.fontSizeXSmall
	};
	const { size, muted, children } = props;

	return (
		<Text
			style={{
				fontSize: fontSizes[size],
				color: muted ? ThemeProvider.theme.textColorMuted : ThemeProvider.theme.textColor
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
