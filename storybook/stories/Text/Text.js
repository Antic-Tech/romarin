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

	return (
		<Text
			style={{
				fontSize: fontSizes[props.size],
				color: props.muted ? theme.textColorMuted : theme.textColor
			}}
		>
			{props.children}
		</Text>
	);
};

export { RomarinText as default };
