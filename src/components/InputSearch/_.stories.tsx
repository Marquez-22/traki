import React from "react";
import { Story, Meta } from "@storybook/react";

import { InputSearch, InputSearchProps } from "./index";

export default {
    title: "Component/InputSearch",
    component: InputSearch,
} as Meta;

const Profile: Story<InputSearchProps> = (args) => (
    <InputSearch {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
       styleTemplate: "input1"
       
};