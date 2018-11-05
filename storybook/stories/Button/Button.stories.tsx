import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import { Page } from '../../components';
import ThemeProvider from '../../theme';
import Button from './Button';

storiesOf('Button', module).addDecorator((getStory) => <Page padded>{getStory()}</Page>).add('basic button', () => (
	<React.Fragment>
		<Text>{ThemeProvider.theme.colorPrimary}</Text>
		<Button onPress={()=>{}} label="Button" />
		<Text>label Emoji</Text>
		<Button onPress={action('clicked-emoji')} label="😀 😎 👍 💯" />
	</React.Fragment>
));
