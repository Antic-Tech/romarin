import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';

import theme from '../../theme';

const styles = StyleSheet.create({
	button: {
		margin: theme.marginSmall,
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
		xlarge: (theme.iconSizeXLarge * 2 - 4),
		large: (theme.iconSizeLarge * 2 - 4),
		medium: (theme.iconSizeMedium * 2 - 4),
		small: (theme.iconSizeSmall * 2 - 4),
		xsmall: (theme.iconSizeXSmall * 2 - 4)
	};
	const iconSizes = {
		xlarge: theme.iconSizeXLarge,
		large: theme.iconSizeLarge,
		medium: theme.iconSizeMedium,
		small: theme.iconSizeSmall,
		xsmall: theme.iconSizeXSmall
	};
	const { name, size, onPress, iconColor, backgroundColor } = props;

	return (
		<View>
			<TouchableOpacity
				style={[
					styles.button,
					{
						borderRadius: buttonSizes[size],
						height: buttonSizes[size],
						width: buttonSizes[size],
						backgroundColor: theme[backgroundColor]
					}
				]}
				onPress={onPress}
			>
				<MaterialIcons style={styles.icon} size={iconSizes[size]} name={name} color={theme[iconColor]} />
			</TouchableOpacity>
		</View>
	);
};

IconButton.propTypes = {
	name: PropTypes.string,
	size: PropTypes.string,
	iconColor: PropTypes.string,
	backgroundColor: PropTypes.string,
	onPress: PropTypes.func
};

IconButton.defaultProps = {
	name: 'android',
	size: 'medium',
	iconColor: 'colorWhite',
	backgroundColor: 'colorPrimary',
	onPress: () => {}
};

export { IconButton as default };
