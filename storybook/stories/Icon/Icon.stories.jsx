import React from "react";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

import Icon from "./Icon";
import CenterView from "../CenterView";

storiesOf("Icon", module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add("default icon", () => (
            <React.Fragment>
                <Icon/>
            </React.Fragment>
    ));
