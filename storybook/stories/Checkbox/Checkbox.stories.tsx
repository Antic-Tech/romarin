import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Page } from '../../components';
import Checkbox from './Checkbox';

storiesOf('Checkbox', module).addDecorator((getStory) => <Page padded>{getStory()}</Page>).add('default', () => (
	<React.Fragment>
		<Checkbox padding="Small" />
		<Checkbox checked />
	</React.Fragment>
));
