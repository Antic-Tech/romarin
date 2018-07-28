import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import CenterView from '../CenterView';

storiesOf('Button', module)
	.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <React.Fragment>
      <Button  />
    </React.Fragment>
  ))
  .add('label prop', () => (
    <React.Fragment>
      <Text>label Button</Text>
      <Button onPress={action('clicked-text')} label="Button" />
      <Text>label Emoji</Text>
		  <Button onPress={action('clicked-emoji')} label="😀 😎 👍 💯"/>
    </React.Fragment>
  ));
