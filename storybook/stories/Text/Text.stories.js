import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Page } from '../../components';
import Text from './Text';

storiesOf('Text', module)
	.addDecorator((getStory) => <Page padded>{getStory()}</Page>)
	.add('default', () => (
		<React.Fragment>
			<Text>default text</Text>
		</React.Fragment>
	))
	.add('size prop', () => (
		<React.Fragment>
			<Text size="xlarge">size xlarge</Text>
			<Text size="large">size large</Text>
			<Text size="medium">size medium</Text>
			<Text size="small">size small</Text>
			<Text size="xsmall">size xsmall</Text>
		</React.Fragment>
	))
	.add('padding prop', () => (
		<React.Fragment>
			<Text size="xlarge" padding="Medium">
				size xlarge
			</Text>
			<Text size="large" paddingTop="">
				size large
			</Text>
			<Text size="medium">size medium</Text>
			<Text size="small">size small</Text>
			<Text size="xsmall">size xsmall</Text>
		</React.Fragment>
	))
	.add('muted prop', () => (
		<React.Fragment>
			<Text muted>muted true</Text>
		</React.Fragment>
	));
