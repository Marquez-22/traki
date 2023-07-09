import React from "react";
import { Story, Meta } from "@storybook/react";

import { Logo, LogoProps } from "./index";

export default {
    title: "Component/Logo",
    component: Logo,
} as Meta;

const Profile: Story<LogoProps> = (args) => (
    <Logo {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
      
        styleTemplate:"Logo1"
};