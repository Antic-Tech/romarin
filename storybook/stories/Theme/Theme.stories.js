import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import { Page } from '../../components';
import ThemeProvider from '../../theme';
import Button from '../Button/Button';

const firstAndFive = {
	colorPrimary: '#30bce0',
	textColor: '#22233a',
	coreBorderRadius: 3,
	inputBorderColor: '#aeaeae',
	inputBorderWidth: 2
};

const thinkShare = {
	colorRed: '#de5241',
	colorOrange: '#ea953e',
	colorYellow: '#f6e84f',
	colorGreen: '#97c360',
	colorTeal: '#4c98c9',
	colorBlue: '#4568ac',
	colorPurple: '#95559a',
	textFontFamily: 'Chalkduster',
	colorPrimary: '#4568ac',
	coreBorderRadius: 0
};

const routineBuilder = {
	colorPrimary: 'red',
	coreBorderRadius: 12,
	checkboxBorderRadius: 4
};

const weightUp = {
	colorPrimary: '#e4ca63',
	coreBorderRadius: 30,
	checkboxBorderRadius: 4,
	pageBackgroundColor: '#2c2e34',
	textColor: '#dedede',
	textColorMuted: '#A4A4A4',
	dividerColor: '#64666c',
	inputBorderWidth: 0,
	inputBackgroundColor: '#22242b',
	inputTextColor: '#dedede',
	inputLabelColor: '#dedede',
	inputPlaceholderColor: '#444444',
	buttonLabelWeight: 'bold'
};

const purple = {
	colorPrimary: 'rgb(103, 56, 237)',
	coreBorderRadius: 12,
	checkboxSize: 20,
	checkboxBorderRadius: 8,
	checkboxBorderColor: 'rgb(95, 95, 107)',

	coreFontSizeXLarge: 24,
	coreFontSizeLarge: 20,
	coreFontSizeMedium: 16,
	coreFontSizeSmall: 14,
	coreFontSizeXSmall: 12
};

storiesOf('Theme', module).add('Update theme', () => <ButtonConatiner />);

class ButtonConatiner extends React.Component {
	constructor(props) {
		super(props);
		this.updateTheme = this.updateTheme.bind(this);
		this.resetTheme = this.resetTheme.bind(this);
	}

	updateTheme(theme) {
		ThemeProvider.setTheme(theme);
		this.forceUpdate();
	}

	resetTheme() {
		ThemeProvider.resetTheme();
		this.forceUpdate();
	}

	render() {
		return (
			<Page padded>
				<Button onPress={() => this.resetTheme()} label="Romarin" />
				<View style={{ height: 16 }} />
				<Button onPress={() => this.updateTheme(thinkShare)} label="ThinkShare" />
				<View style={{ height: 16 }} />
				<Button onPress={() => this.updateTheme(firstAndFive)} label="1st&5" />
				<View style={{ height: 16 }} />
				<Button onPress={() => this.updateTheme(routineBuilder)} label="Routine Builder" />
				<View style={{ height: 16 }} />
				<Button onPress={() => this.updateTheme(weightUp)} label="Weight Up" />
				<View style={{ height: 16 }} />
				<Button onPress={() => this.updateTheme(purple)} label="Purple" />
			</Page>
		);
	}
}
