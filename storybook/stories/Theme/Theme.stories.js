import React from 'react';
import { Text, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import Button from '../Button/Button';
import CenterView from '../CenterView';
import ThemeProvider from '../../theme';

const firstAndFive = {
	colorPrimary: '#30bce0',
	textColor: '#22233a',
	textFontFamily: 'Exo 2',
	coreBorderRadius: 20,
	buttonBorderRadius: 3
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
	buttonBorderRadius: 4
};
const routineBuilder = {
	colorPrimary: 'red',
	coreBorderRadius: 12
};

storiesOf('Theme', module)
	.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
	.add('Update theme', () => <ButtonConatiner />);

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
			<React.Fragment>
				<Button onPress={() => this.resetTheme()} label="Romarin" />
				<View style={{ height: 16 }} />
				<Button onPress={() => this.updateTheme(thinkShare)} label="ThinkShare" />
				<View style={{ height: 16 }} />
				<Button onPress={() => this.updateTheme(firstAndFive)} label="1st&5" />
				<View style={{ height: 16 }} />
				<Button onPress={() => this.updateTheme(routineBuilder)} label="routineBuilder" />
			</React.Fragment>
		);
	}
}
