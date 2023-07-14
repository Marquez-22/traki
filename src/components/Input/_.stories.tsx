import React from "react";
import { Story, Meta } from "@storybook/react";

import { Input, InputProps } from "./index";

export default {
    title: "Component/Input",
    component: Input,
} as Meta;

const Profile: Story<InputProps> = (args) => (
    <Input {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
        
        styleTemplate:"Input1"
};