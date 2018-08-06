import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import Input from './Input';
import CenterView from '../CenterView';

storiesOf('Input', module)
	.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
	.add('default', () => (
		<React.Fragment>
			<Input placeholder="Email" />
			<Input placeholder="Password" />

			<Input placeholder="Input" />

			<Input placeholder="Input" />

			<Input placeholder="Input" />
		</React.Fragment>
	));
