import React from 'react';
import { View } from 'react-native';
import { withCommonProps } from '../../utils/withCommonProps';

export const Row = withCommonProps((props) => {
	const { style, grow, center, ...otherProps, } = props;
	return (
		<View
			style={[
				{
					flex: grow ? 1 : 0,
					flexDirection: 'row',
					justifyContent: center ? 'center': undefined,
				},
				style
			]}
			{...otherProps}
		>
			{props.children}
		</View>
	);
});

export const Column = withCommonProps((props) => {
	const { style, grow, center, ...otherProps } = props;
	return (
		<View
			style={[
				{
					flex: grow ? 1 : 0,
					flexDirection: 'column',
					alignItems: center ? 'center': undefined,
				},
				style
			]}
			{...otherProps}
		>
			{props.children}
		</View>
	);
});
