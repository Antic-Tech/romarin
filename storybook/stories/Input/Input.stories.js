import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import Input from './Input';

storiesOf('Input', module).addDecorator((getStory) => <CenterView>{getStory()}</CenterView>).add('default', () => (
	<React.Fragment>
		<Input placeholder="me@example.com" label="Email" />
		<Input placeholder="•••••••••" label="Password" />
	</React.Fragment>
));
