import React from "react";
import { Story, Meta } from "@storybook/react";

import { ImgTextoSvg, ImgTextoSvgProps } from "./index";

export default {
    title: "Component/ImgTextoSvg",
    component: ImgTextoSvg,
} as Meta;

const Profile: Story<ImgTextoSvgProps> = (args) => (
    <ImgTextoSvg {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
        
        styleTemplate:"ImgTextoSvg"
};