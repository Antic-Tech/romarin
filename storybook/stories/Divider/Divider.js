import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../../components';

import ThemeProvider from '../../theme';
import { PixelRatio } from 'react-native';

const getDividerStyle = () => ({
	backgroundColor: ThemeProvider.theme.dividerColor,
	height: 1 / PixelRatio.get(),
	flex: 1
});

export default ({ label, ...rest }) =>
	label ? (
		<View
			style={{
				paddingBottom: ThemeProvider.theme.paddingMedium,
				flexDirection: 'row',
				flex: 1,
				paddingVertical: ThemeProvider.theme.paddingXSmall,

				alignItems: 'center'
			}}
			{...rest}
		>
			<View style={getDividerStyle()} />
			<Text
				style={{
					paddingLeft: ThemeProvider.theme.dividerLabelPadding,
					paddingRight: ThemeProvider.theme.dividerLabelPadding
				}}
				size="small"
				bold
			>
				{label}
			</Text>
			<View style={getDividerStyle()} />
		</View>
	) : (
		<View
			style={{
				flexDirection: 'row',
				flex: 1,
				alignItems: 'center'
			}}
			{...rest}
		>
			<View style={getDividerStyle()} />
		</View>
	);
