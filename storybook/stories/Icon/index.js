import PropTypes from "prop-types";
import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import design from "../../design-tokens";


const Icon = props => {
    const {
        name,
        size,
        color,
        underlayColor,
        onPress
    } = props;

    return (
        <View>
          <TouchableOpacity
            underlayColor = {design.color[underlayColor]}
            style={[
                styles.button,
                {
                    borderRadius: design.buttonSize[size],
                    height: design.buttonSize[size],
                    width: design.buttonSize[size],
                    backgroundColor: design.color[underlayColor]
                }
            ]}
            onPress={onPress}
           >
            <MaterialIcon
              style={styles.icon}
              size={design.iconSize[size]}
              name={name}
              color={design.color[color]}
            />
          </TouchableOpacity>
        </View>
    );
};

Icon.propTypes = {
    name: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    underlayColor: PropTypes.string,
    onPress: PropTypes.func,
};

Icon.defaultProps = {
    name: 'android',
    size: 'medium',
    underlayColor: 'white',
    color: 'black',
    onPress: () => {}
};

const styles = StyleSheet.create({
    button: {
        margin: design.margin.small,
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

export { Icon as default };
