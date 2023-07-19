import React from "react";
import { Story, Meta } from "@storybook/react";

import { InputCheckbox, InputCheckboxProps } from "./index";

export default {
    title: "Component/InputCheckbox",
    component: InputCheckbox,
} as Meta;

const Profile: Story<InputCheckboxProps> = (args) => (
    <InputCheckbox {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
        children:"He leido los terminos y condiciones",
        onChecked:() => {},
        
        styleTemplate:"InputCheckbox"
};