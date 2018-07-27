import React from "react";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

import IconButton from "./IconButton";
import CenterView from "../CenterView";

storiesOf("Button", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("IconButton", () => (
    <React.Fragment>
      <IconButton />
    </React.Fragment>
  ));
