import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { Text } from '../../components';
import { withTheme } from '../../theme';

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
		const { label, theme, ...props } = this.props;
		const { isFocused } = this.state;

		return (
			<View
				style={{
					borderRadius: theme.inputBorderRadius,
					borderColor: isFocused
						? theme.focusedInputBorderColor
						: theme.inputBorderColor,
					backgroundColor: theme.inputBackgroundColor,
					margin: theme.inputMargin,
					padding: theme.inputPadding,
					paddingHorizontal: theme.inputPaddingHorizontal,
					borderWidth: theme.inputBorderWidth,
					flexDirection: 'row',

					alignItems: 'center'
				}}
			>
				<Text
					style={{
						width: 80,
						margin: theme.inputLabelMargin,
						color: isFocused
							? theme.focusedInputLabelColor
							: theme.inputLabelColor,
						fontSize: theme.coreFontSizeMedium
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
						fontSize: theme.coreFontSizeMedium,
						color: theme.inputTextColor
					}}
					selectionColor={theme.focusedInputLabelColor}
					placeholderTextColor={theme.inputPlaceholderColor}
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

export default withTheme(Input)

