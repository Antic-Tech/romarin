import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import debounce from 'lodash/debounce';
import ThemeProvider from '../../theme';

const Touchable = ({ children, debounceTrailing, debounceWait, onPress, type, ...props }) => {
	const touchables = {
		highlight: TouchableHighlight,
		opacity: TouchableOpacity,
		none: TouchableWithoutFeedback
	};

	const touchablesProps = {
		opacity: {
			activeOpacity: ThemeProvider.theme.touchableActiveOpacity
		},
		highlight: {
			underlayColor: ThemeProvider.theme.touchableUnderlayColor
		},
		none: {}
	};

	const debouncedOnPress = onPress
		? debounce(onPress, debounceWait, {
				leading: !debounceTrailing,
				trailing: debounceTrailing
			})
		: () => {};

	const SelectedTouchable = touchables[type];
	const touchableProps = touchablesProps[type];

	return (
		<SelectedTouchable onPress={debouncedOnPress} {...touchableProps} {...props}>
			{children}
		</SelectedTouchable>
	);
};

Touchable.propTypes = {
	type: PropTypes.oneOf(['opacity', 'highlight', 'none']),
	debounceWait: PropTypes.number,
	debounceTrailing: PropTypes.bool,
	onPress: PropTypes.func,
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]).isRequired
};

Touchable.defaultProps = {
	onPress: null,
	debounceWait: 500,
	debounceTrailing: false,
	type: 'none'
};

export default Touchable;
