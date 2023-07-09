import React from "react";
import { Story, Meta } from "@storybook/react";

import { Header, HeaderProps } from "./index";

export default {
    title: "Component/Header",
    component: Header,
} as Meta;

const Profile: Story<HeaderProps> = (args) => (
    <Header {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
        
        styleTemplate:"Header"
};