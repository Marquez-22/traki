import React from "react";
import { Story, Meta } from "@storybook/react";

import { InputQuantity, InputQuantityProps } from "./index";

export default {
    title: "Component/InputQuantity",
    component: InputQuantity,
} as Meta;

const Profile: Story<InputQuantityProps> = (args) => (
    <InputQuantity {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
        
        styleTemplate:"InputQuantity1"
};