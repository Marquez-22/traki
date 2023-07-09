import React from "react";
import { Story, Meta } from "@storybook/react";

import { Footer, FooterProps } from "./index";

export default {
    title: "Component/Footer",
    component: Footer,
} as Meta;

const Profile: Story<FooterProps> = (args) => (
    <Footer {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
        
        styleTemplate:"Footer"
};