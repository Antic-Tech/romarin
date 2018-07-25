import React from "react";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

import Text from "./Text";
import CenterView from "../CenterView";

storiesOf("Text", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("with text", () => (
    <React.Fragment>
      <Text size="xlarge">xlarge</Text>
      <Text size="large">large</Text>
      <Text size="medium">medium</Text>
      <Text size="small">small</Text>
      <Text size="xsmall">xsmall</Text>

      <Text muted>medium</Text>
    </React.Fragment>
  ));
