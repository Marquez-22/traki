import React from "react";
import { Story, Meta } from "@storybook/react";

import { InputSelect, InputSelectProps } from "./index";

export default {
    title: "Component/InputSelect",
    component: InputSelect,
} as Meta;

const Profile: Story<InputSelectProps> = (args) => (
    <InputSelect {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
        options:[
            {
                label:"Elige una opcion",
                value:"valor"
            },
            {
                label:"XS",
                value:"valo1r"
            },
            {
                label:"S",
                value:"valo1r"
            },
            {
                label:"M",
                value:"valo1r"
            },
            {
                label:"L",
                value:"valo1r"
            },
        ]
};