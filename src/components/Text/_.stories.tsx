import React from "react";
import { Story, Meta } from "@storybook/react";

import {Text,TextProps } from "./index";

export default {
    title: "Component/Text",
    component: Text,
} as Meta;

const Profile: Story<TextProps> = (args) => (
    <Text {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
        children:"Traki Home ",
        styleTemplate:"text",

     

};