import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { Text } from '../../components';
import ThemeProvider from '../../theme';

class Input extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isFocused: false
		};
		this.onBlur = this.onBlur.bind(this);
		this.onFocus = this.onFocus.bind(this);
	}

	onFocus(event) {
		this.setState({ isFocused: true });

		if (this.props.onFocus) {
			this.props.onFocus(event);
		}
	}

	onBlur() {
		this.setState({ isFocused: false });

		if (this.props.onBlur) {
			this.props.onBlur();
		}
	}

	render() {
		const { label, ...props } = this.props;
		const { isFocused } = this.state;

		return (
			<View
				style={{
					borderRadius: ThemeProvider.theme.inputBorderRadius,
					borderColor: isFocused
						? ThemeProvider.theme.focusedInputBorderColor
						: ThemeProvider.theme.inputBorderColor,
					margin: ThemeProvider.theme.inputMargin,
					padding: ThemeProvider.theme.inputPadding,
					paddingHorizontal: ThemeProvider.theme.inputPaddingHorizontal,
					borderWidth: ThemeProvider.theme.inputBorderWidth,
					flexDirection: 'row',

					alignItems: 'center'
				}}
			>
				<Text
					style={{
						width: 80,
						margin: ThemeProvider.theme.inputLabelMargin,
						color: isFocused ? ThemeProvider.theme.focusedInputLabelColor : undefined,
						fontSize: ThemeProvider.theme.coreFontSizeMedium
						// textAlign: 'right'
					}}
					weight="bold"
				>
					{label}
				</Text>
				<TextInput
					style={{
						flexDirection: 'row',
						flex: 1,
						fontSize: ThemeProvider.theme.coreFontSizeMedium
					}}
					selectionColor={ThemeProvider.theme.focusedInputLabelColor}
					onFocus={this.onFocus}
					onBlur={this.onBlur}
					{...props}
				/>
			</View>
		);
	}
}

Input.propTypes = {
	size: PropTypes.string,
	muted: PropTypes.bool
};

Input.defaultProps = {
	size: 'medium',
	muted: false,
	label: ''
};

export { Input as default };
