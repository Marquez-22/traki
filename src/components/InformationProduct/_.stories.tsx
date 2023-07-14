import React from "react";
import { Story, Meta } from "@storybook/react";

import { InformationProduct, InformationProductProps } from "./index";

export default {
    title: "Component/InformationProduct",
    component: InformationProduct,
} as Meta;

const Profile: Story<InformationProductProps> = (args) => (
    <InformationProduct {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
        
        styleTemplate:"InformationProduct1"
};