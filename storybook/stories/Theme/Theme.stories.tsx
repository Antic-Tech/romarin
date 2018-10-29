import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import { Page, Text } from '../../components';
import { Theme } from '../../definitions/Theme';
import ThemeProvider from '../../theme';
import Button from '../Button/Button';

const firstAndFive: Theme = {
	base: {
		colorPrimary: '#30bce0',
		textColor: '#22233a',
		borderRadius: 3,
	},
	input: {
		borderColor: '#aeaeae',
		borderWidth: 2

	}
};

const thinkShare: Theme = {
	base: {
		colorRed: '#de5241',
		colorOrange: '#ea953e',
		colorYellow: '#f6e84f',
		colorGreen: '#97c360',
		colorTeal: '#4c98c9',
		colorBlue: '#4568ac',
		colorPurple: '#95559a',
		textFontFamily: 'Chalkduster',
		colorPrimary: '#4568ac',
		borderRadius: 0
	},
	pageBackgroundColor: '#e2e2e2',

};

const routineBuilder: Theme = {
	colorPrimary: 'red',
	coreBorderRadius: 12,
	checkboxBorderRadius: 4
};

const weightUp: Theme = {
	base:{
		colorPrimary: '#e4ca63',
		borderRadius: 30,

	},
	page: {
		backgroundColor: '#2c2e34',
		padding:0,
	},
	button:{
		labelWeight: 'bold',
	},
	text:{
		color: '#dedede',
		colorMuted: '#A4A4A4',
	},
	checkboxBorderRadius: 4,
	dividerColor: '#64666c',
	inputBorderWidth: 0,
	inputBackgroundColor: '#22242b',
	inputTextColor: '#dedede',
	inputLabelColor: '#dedede',
	inputPlaceholderColor: '#444444',
};

const purple: Theme = {
	base:{
		colorPrimary: 'rgb(103, 56, 237)',
		borderRadius: 12,

		fontSizeXLarge: 24,
		fontSizeLarge: 20,
		fontSizeMedium: 16,
		fontSizeSmall: 14,
		fontSizeXSmall: 12,
		fontFamily: 'Comic Sans',
	},
	checkboxSize: 20,
	checkboxBorderRadius: 8,
	checkboxBorderColor: 'rgb(95, 95, 107)',


	buttonLabelWeight: 'bold',

};

storiesOf('Theme', module).add('Update theme', () => <ButtonConatiner />);

class ButtonConatiner extends React.Component {
	constructor(props) {
		super(props);
		this.updateTheme = this.updateTheme.bind(this);
		this.resetTheme = this.resetTheme.bind(this);
	}

	updateTheme(theme: Theme) {
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
				<Text>
					{JSON.stringify(ThemeProvider.theme,null,2)}
				</Text>
			</Page>
		);
	}
}
