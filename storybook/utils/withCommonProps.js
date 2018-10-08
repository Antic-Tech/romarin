import React from 'react';
import { StyleSheet } from 'react-native';
import ThemeProvider from '../theme';

const Sizes = {
	XXSmall: 'XXSmall',
	XSmall: 'XSmall',
	Small: 'Small',
	Medium: 'Medium',
	Large: 'Large',
	XLarge: 'XLarge',
	XXLarge: 'XXLarge'
};

const withPadding = (Component) =>
	class WithLoading extends React.Component {
		render() {
			const {
				style,
				padding,
				paddingHorizontal,
				paddingVertical,
				paddingTop,
				paddingBottom,
				paddingLeft,
				paddingRight,
				...props
			} = this.props;

			const newStyles = StyleSheet.flatten([
				{
					padding: padding ? ThemeProvider.theme[`corePadding${padding}`] : undefined,
					paddingHorizontal: paddingHorizontal
						? ThemeProvider.theme[`corePadding${paddingHorizontal}`]
						: undefined,
					paddingVertical: paddingVertical ? ThemeProvider.theme[`corePadding${paddingVertical}`] : undefined,
					paddingTop: paddingTop ? ThemeProvider.theme[`corePadding${paddingTop}`] : undefined,
					paddingBottom: paddingBottom ? ThemeProvider.theme[`corePadding${paddingBottom}`] : undefined,
					paddingLeft: paddingLeft ? ThemeProvider.theme[`corePadding${paddingLeft}`] : undefined,
					paddingRight: paddingRight ? ThemeProvider.theme[`corePadding${paddingRight}`] : undefined
				},
				style
			]);

			return <Component style={newStyles} {...props} />;
		}
	};

const withMargin = (Component) =>
	class WithLoading extends React.Component {
		render() {
			const {
				style,
				margin,
				marginHorizontal,
				marginVertical,
				marginTop,
				marginBottom,
				marginLeft,
				marginRight,
				...props
			} = this.props;

			const newStyles = StyleSheet.flatten([
				{
					margin: margin ? ThemeProvider.theme[`coreMargin${margin}`] : undefined,
					marginHorizontal: marginHorizontal
						? ThemeProvider.theme[`coreMargin${marginHorizontal}`]
						: undefined,
					marginVertical: marginVertical ? ThemeProvider.theme[`coreMargin${marginVertical}`] : undefined,
					marginTop: marginTop ? ThemeProvider.theme[`coreMargin${marginTop}`] : undefined,
					marginBottom: marginBottom ? ThemeProvider.theme[`coreMargin${marginBottom}`] : undefined,
					marginLeft: marginLeft ? ThemeProvider.theme[`coreMargin${marginLeft}`] : undefined,
					marginRight: marginRight ? ThemeProvider.theme[`coreMargin${marginRight}`] : undefined
				},
				style
			]);

			return <Component style={newStyles} {...props} />;
		}
	};

const withCommonProps = (Component) => withPadding(withMargin(Component));

export { withPadding, withMargin, withCommonProps };
