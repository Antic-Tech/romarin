import React from 'react';
import { PixelRatio, View } from 'react-native';
import { Text } from '../../components';
import { withTheme } from '../../theme';

export default withTheme(
	({ label, theme, ...rest }) =>
		label ? (
			<View
				style={{
					paddingBottom: theme.paddingMedium,
					flexDirection: 'row',
					flex: 1,
					paddingVertical: theme.paddingXSmall,

					alignItems: 'center'
				}}
				{...rest}
			>
				<View
					style={{
						backgroundColor: theme.dividerColor,
						height: 1 / PixelRatio.get(),
						flex: 1
					}}
				/>
				<Text
					style={{
						paddingLeft: theme.dividerLabelPadding,
						paddingRight: theme.dividerLabelPadding
					}}
					size="small"
					bold
				>
					{label}
				</Text>
				<View
					style={{
						backgroundColor: theme.dividerColor,
						height: 1 / PixelRatio.get(),
						flex: 1
					}}
				/>
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
				<View
					style={{
						backgroundColor: theme.dividerColor,
						height: 1 / PixelRatio.get(),
						flex: 1
					}}
				/>
			</View>
		)
);
