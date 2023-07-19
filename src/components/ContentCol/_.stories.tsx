import React from "react";
import { Story, Meta } from "@storybook/react";

import { ContentCol, ContentColProps } from "./index";
import { ImagesProduct } from "../ImagesProduct";

export default {
    title: "Component/ContentCol",
    component: ContentCol,
} as Meta;

const Profile: Story<ContentColProps> = (args) => (
    <ContentCol {...args} />
);

export const Index = Profile.bind({});
Index.args = {

    styleTemplate: "ContentCol1",
    children: <>

        <ImagesProduct
  img='/img/trakihome/trakihome1.1.jpg'
  text="Descubre lo ultimo en TRK Home"
  button="Descubre Mas"
        />
        <ImagesProduct
  img='/img/trakihome/trakihome2.jpg'
  text="Descubre lo ultimo en TRK Home"
  button="Descubre Mas"
        />
        <ImagesProduct
  img='/img/trakihome/trakihome3.jpg'
  text="Descubre lo ultimo en TRK Home"
  button="Descubre Mas"
        />
        
    </>
};