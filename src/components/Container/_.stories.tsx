import React from "react";
import { Story, Meta } from "@storybook/react";

import { Container, ContainerProps } from "./index";

export default {
    title: "Component/Container",
    component: Container,
} as Meta;

const Profile: Story<ContainerProps> = (args) => (
    <Container {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
        
        styleTemplate:"Container1"
};