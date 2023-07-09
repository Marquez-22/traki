import React from "react";
import { Story, Meta } from "@storybook/react";

import { Layout, LayoutProps } from "./index";

export default {
    title: "Component/Layout",
    component: Layout,
} as Meta;

const Profile: Story<LayoutProps> = (args) => (
    <Layout {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
       styleTemplate: "Layout1"
       
};