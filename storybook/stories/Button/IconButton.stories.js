import React from 'react';
import { Text, Linking } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import IconButton from './IconButton';
import CenterView from '../CenterView';
import icon from './resources/free-breakfast.png';

storiesOf('IconButton', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('default', () => (
        <React.Fragment>
          <IconButton
            />
        </React.Fragment>
    ))
    .add('size prop', () => (
        <React.Fragment>
          <Text>xsmall</Text>
          <IconButton
            size = "xsmall"
            source={icon}
            onPress={action('clicked-xsmall')}/>
          <Text>small</Text>
          <IconButton
            size = "small"
            source={icon}
            onPress={action('clicked-small')}/>
          <Text>medium</Text>
          <IconButton
            size = "medium"
            source={icon}
            onPress={action('clicked-medium')}/>
          <Text>large</Text>
          <IconButton
            size = "large"
            source={icon}
            onPress={action('clicked-large')}/>
          <Text>xlarge</Text>
          <IconButton
            size = "xlarge"
            source={icon}
            onPress={action('clicked-xlarge')}/>
        </React.Fragment>
    ))
    .add('color prop', () => (
        <React.Fragment>
          <Text>backgroundColor colorYellow</Text>
          <IconButton
            source={icon}
            backgroundColor = "colorYellow"
            onPress={action('clicked-blue-icon')}/>
        </React.Fragment>
    ));
