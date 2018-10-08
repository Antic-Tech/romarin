import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import ThemeProvider from '../../theme';
import Button from '../Button/Button';
import CenterView from '../CenterView';

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

storiesOf('Theme', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
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
