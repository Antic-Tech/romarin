import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import CenterView from '../CenterView';
import ThemeProvider from '../../theme';

storiesOf('Button', module)
	.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
	.add('basic button', () => (
		<React.Fragment>
			<Text>{ThemeProvider.theme.colorPrimary}</Text>
			<Button onPress={this.updateTheme} label="Button" />
			<Text>label Emoji</Text>
			<Button onPress={action('clicked-emoji')} label="😀 😎 👍 💯" />
		</React.Fragment>
	));
