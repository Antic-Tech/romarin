import React from "react";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

import Text from "./Text";
import CenterView from "../CenterView";

storiesOf("Text", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add("default", () => (
        <React.Fragment>
          <Text>default text</Text>
        </React.Fragment>
    ))
  .add("size prop", () => (
    <React.Fragment>
      <Text size="xlarge">size xlarge</Text>
      <Text size="large">size large</Text>
      <Text size="medium">size medium</Text>
      <Text size="small">size small</Text>
      <Text size="xsmall">size xsmall</Text>
    </React.Fragment>
  ))
  .add("muted prop", () => (
    <React.Fragment>
      <Text muted>muted true</Text>
    </React.Fragment>
  ));
