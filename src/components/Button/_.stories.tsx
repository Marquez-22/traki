import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./index";

export default {
    title: "Component/Button",
    component: Button,
} as Meta;

const Profile: Story<ButtonProps> = (args) => (
    <Button {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
        children:"Descubre Mas",
        styleTemplate:"btn1"
};