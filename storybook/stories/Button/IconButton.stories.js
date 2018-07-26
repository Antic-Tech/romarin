import React from 'react';
import { Text, Linking } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import IconButton from './IconButton';
import CenterView from '../CenterView';

storiesOf('IconButton', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('default', () => (
        <React.Fragment>
            <IconButton />
        </React.Fragment>
    ))
    .add('size prop', () => (
        <React.Fragment>
          <Text>xsmall</Text>
          <IconButton
            size = "xsmall"
            onPress={action('clicked-xsmall')}/>
          <Text>small</Text>
          <IconButton
            size = "small"
            onPress={action('clicked-small')}/>
          <Text>medium</Text>
          <IconButton
            size = "medium"
            onPress={action('clicked-medium')}/>
          <Text>large</Text>
          <IconButton
            size = "large"
            onPress={action('clicked-large')}/>
          <Text>xlarge</Text>
          <IconButton
            size = "xlarge"
            onPress={action('clicked-xlarge')}/>
        </React.Fragment>
    ))
    .add('color props', () => (
        <React.Fragment>
          <Text>iconColor colorBlue</Text>
          <Text>backgroundColor colorWhite</Text>
          <IconButton
            iconColor = "colorBlue"
            backgroundColor = "colorWhite"
            onPress={action('clicked-blue-icon')}/>
        </React.Fragment>
    ))
    .add('name(icon) prop', () => (
        <React.Fragment>
          <Text>name hot-tub</Text>
          <IconButton
            name="hot-tub"
            onPress={action('clicked-hot-tub')}/>
          <Text>Note: Must Replace Underscore with Dash</Text>
          <Text
            onPress={() => Linking.openURL('https://material.io/tools/icons/?style=baseline')}
            style={{color: 'blue'}}>
            Full Icon List
          </Text>
        </React.Fragment>
    ));
