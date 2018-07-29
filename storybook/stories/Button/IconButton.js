import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import ThemeProvider from '../../theme';

const styles = StyleSheet.create({
	button: {
		margin: ThemeProvider.theme.marginSmall,
		shadowColor: 'rgba(0,0,0,.4)',
		shadowOffset: { height: 1, width: 1 },
		shadowOpacity: 1,
		shadowRadius: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	icon: {
		backgroundColor: 'transparent'
	}
});

const IconButton = props => {
	const buttonSizes = {
		xlarge: (ThemeProvider.theme.iconSizeXLarge * 2 - 4),
		large: (ThemeProvider.theme.iconSizeLarge * 2 - 4),
		medium: (ThemeProvider.theme.iconSizeMedium * 2 - 4),
		small: (ThemeProvider.theme.iconSizeSmall * 2 - 4),
		xsmall: (ThemeProvider.theme.iconSizeXSmall * 2 - 4)
	};
	const iconSizes = {
		xlarge: ThemeProvider.theme.iconSizeXLarge,
		large: ThemeProvider.theme.iconSizeLarge,
		medium: ThemeProvider.theme.iconSizeMedium,
		small: ThemeProvider.theme.iconSizeSmall,
		xsmall: ThemeProvider.theme.iconSizeXSmall
	};
	const { source, size, onPress, backgroundColor } = props;

	return (
		<TouchableOpacity
			style={[
				styles.button,
				{
					borderRadius: buttonSizes[size],
					height: buttonSizes[size],
					width: buttonSizes[size],
					backgroundColor: ThemeProvider.theme[backgroundColor]
				}
			]}
			onPress={onPress}
		>
      <Image
        style={[
            styles.icon,
            {width: iconSizes[size]},
            {height: iconSizes[size]}
        ]}
        resizeMode="cover"
        source={source}/>
		</TouchableOpacity>
	);
};

IconButton.propTypes = {
	size: PropTypes.string,
	backgroundColor: PropTypes.string,
  onPress: PropTypes.func,

  //Taken from official ImageSourcePropType: https://github.com/facebook/react-native/blob/master/Libraries/Image/ImageSourcePropType.js
  //Note: We don't support multiple images
  source: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
        uri: PropTypes.string,
        bundle: PropTypes.string,
        method: PropTypes.string,
        headers: PropTypes.objectOf(PropTypes.string),
        body: PropTypes.string,
        cache: PropTypes.oneOf([
            'default',
            'reload',
            'force-cache',
            'only-if-cached',
        ]),
        width: PropTypes.number,
        height: PropTypes.number,
        scale: PropTypes.number
    })
  ])
};

IconButton.defaultProps = {
	size: 'medium',
	iconColor: 'colorWhite',
	backgroundColor: 'colorPrimary',
	onPress: () => {}
};

export { IconButton as default };
