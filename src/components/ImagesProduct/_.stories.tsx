import React from "react";
import { Story, Meta } from "@storybook/react";

import { ImagesProduct, ImagesProductProps } from "./index";

export default {
    title: "Component/ImagesProduct",
    component: ImagesProduct,
} as Meta;

const Profile: Story<ImagesProductProps> = (args) => (
    <ImagesProduct {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    
    styleTemplate:"ImagesProduct",
    img:"/img/trakiwoman/traki1.jpg",
    button:"Descubre Mas",
    text:"Lo nuevo en TRK Woman"
  

    
};