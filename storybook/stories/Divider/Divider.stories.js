import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import Divider from './Divider';
import { Text } from '../../components';
import CenterView from '../CenterView';

storiesOf('Divider', module)
	.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
	.add('default', () => (
		<React.Fragment>
			<Divider />
			<Divider label="Label" />
		</React.Fragment>
	));
