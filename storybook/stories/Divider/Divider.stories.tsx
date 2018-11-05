import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Page } from '../../components';
import Divider from './Divider';



storiesOf('Divider', module)
	.addDecorator(getStory => <Page>{getStory()}</Page>)
	.add('default', () => (
		<React.Fragment>
			<Divider />
			<Divider label="Label" />
		</React.Fragment>
	));
