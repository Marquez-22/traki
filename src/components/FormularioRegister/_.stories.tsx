import React from "react";
import { Story, Meta } from "@storybook/react";

import { FormularioRegister, FormularioRegisterProps } from "./index";

export default {
    title: "Component/FormularioRegister",
    component: FormularioRegister,
} as Meta;

const Profile: Story<FormularioRegisterProps> = (args) => (
    <FormularioRegister {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
        
        styleTemplate:"FormularioRegister"
};