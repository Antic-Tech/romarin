import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Page } from '../../components';
import Input from './Input';

storiesOf('Input', module).addDecorator((getStory) => <Page padded>{getStory()}</Page>).add('default', () => (
	<React.Fragment>
		<Input placeholder="me@example.com" label="Email" />
		<Input placeholder="•••••••••" label="Password" />
	</React.Fragment>
));
