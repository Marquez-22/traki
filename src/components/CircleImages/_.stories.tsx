import React from "react";
import { Story, Meta } from "@storybook/react";

import { CircleImages, CircleImagesProps } from "./index";

export default {
    title: "Component/CircleImages",
    component: CircleImages,
} as Meta;

const Profile: Story<CircleImagesProps> = (args) => (
    <CircleImages {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
     circleimg:"/img/trakiwoman/trakiwoman1.jpg",
     texto:"Faldas y vestidos ",
        
        styleTemplate:"CircleImages"
};