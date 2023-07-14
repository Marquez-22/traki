import React from "react";
import { Story, Meta } from "@storybook/react";

import { FormularioLogin, FormularioLoginProps } from "./index";

export default {
    title: "Component/FormularioLogin",
    component: FormularioLogin,
} as Meta;

const Profile: Story<FormularioLoginProps> = (args) => (
    <FormularioLogin {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
        
        styleTemplate:"FormularioLogin"
};