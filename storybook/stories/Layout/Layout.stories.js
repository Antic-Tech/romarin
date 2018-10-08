import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Checkbox, Column, Row, Text, Touchable } from '../../components';
import Divider from '../Divider/Divider';

storiesOf('Layout', module).add('List item', () => (
	<React.Fragment>
		<Touchable type="highlight">
			<Row>
				<Column padding="Small" center>
					<Checkbox checked />
				</Column>
				<Column grow paddingTop="Small">
					<Text>Title</Text>

					<Text muted size="Small" paddingBottom="Small">
						Subtitle
					</Text>
					<Divider />
				</Column>
			</Row>
		</Touchable>
		<Touchable>
			<Row>
				<Column padding="Small" center>
					<Checkbox checked />
				</Column>
				<Column grow paddingTop="Small">
					<Text>Title</Text>

					<Text muted size="Small" paddingBottom="Small">
						Subtitle
					</Text>
					<Divider />
				</Column>
			</Row>
		</Touchable>
	</React.Fragment>
));
