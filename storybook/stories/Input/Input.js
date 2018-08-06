import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import ThemeProvider from '../../theme';

const Input = props => {
	return (
		<TextInput
			style={{
				borderRadius: ThemeProvider.theme.inputBorderRadius,
				padding: ThemeProvider.theme.inputPadding,
				margin: ThemeProvider.theme.inputMargin,
				borderColor: ThemeProvider.theme.inputBorderColor,
				borderWidth: ThemeProvider.theme.inputBorderWidth,
				flexDirection: 'row'
			}}
			{...props}
		/>
	);
};

Input.propTypes = {
	size: PropTypes.string,
	muted: PropTypes.bool
};

Input.defaultProps = {
	size: 'medium',
	muted: false
};

export { Input as default };
