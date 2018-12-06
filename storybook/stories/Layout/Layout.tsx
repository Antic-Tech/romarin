import React from 'react';
import { View } from 'react-native';

export const Row = ((props) => {
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

export const Column = ((props) => {
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
