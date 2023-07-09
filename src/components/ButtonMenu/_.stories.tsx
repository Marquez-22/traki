import React from "react";
import { Story, Meta } from "@storybook/react";

import { ButtonMenu, ButtonMenuProps } from "./index";

export default {
    title: "Component/ButtonMenu",
    component: ButtonMenu,
} as Meta;

const Profile: Story<ButtonMenuProps> = (args) => (
    <ButtonMenu {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
        
        styleTemplate:"ButtonMenu"
};