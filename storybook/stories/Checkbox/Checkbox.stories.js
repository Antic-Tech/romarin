import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import Checkbox from './Checkbox';

storiesOf('Checkbox', module).addDecorator((getStory) => <CenterView>{getStory()}</CenterView>).add('default', () => (
	<React.Fragment>
		<Checkbox padding="Small" />
		<Checkbox checked />
	</React.Fragment>
));
