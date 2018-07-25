import PropTypes from "prop-types";
import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import theme from "../../theme";

const styles = StyleSheet.create({
    button: {
        margin: theme.margin.small,
        shadowColor: 'rgba(0,0,0,.4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon:{
        backgroundColor: 'transparent'
    }
});

const Icon = props => {
    const buttonSizes = {
        xlarge: theme.buttonSizeXLarge,
        large: theme.buttonSizeLarge,
        medium: theme.buttonSizeMedium,
        small: theme.buttonSizeSmall,
        xsmall: theme.buttonSizeXSmall
    };
    const iconSizes = {
        xlarge: theme.iconSizeXLarge,
        large: theme.iconSizeLarge,
        medium: theme.iconSizeMedium,
        small: theme.iconSizeSmall,
        xsmall: theme.iconSizeXSmall
    };
    const {
        name,
        size,
        color,
        onPress,
        backgroundColor
    } = props;

    return (
        <View>
          <TouchableOpacity
            style={[
                styles.button,
                {
                    borderRadius: buttonSizes[size],
                    height: buttonSizes[size],
                    width: buttonSizes[size],
                    backgroundColor: theme.color[backgroundColor]
                }
            ]}
            onPress={onPress}
           >
            <MaterialIcon
              style={styles.icon}
              size={iconSizes[size]}
              name={name}
              color={theme.color[color]}
            />
          </TouchableOpacity>
        </View>
    );
};

Icon.propTypes = {
    name: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    onPress: PropTypes.func,
};

Icon.defaultProps = {
    name: 'android',
    size: 'medium',
    color: 'colorWhite',
    backgroundColor: 'colorPrimary',
    onPress: () => {}
};

export { Icon as default };
