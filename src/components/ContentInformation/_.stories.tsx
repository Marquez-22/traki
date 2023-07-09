import React from "react";
import { Story, Meta } from "@storybook/react";

import { ContentInformation, ContentInformationProps } from "./index";

export default {
    title: "Component/ContentInformation",
    component: ContentInformation,
} as Meta;

const Profile: Story<ContentInformationProps> = (args) => (
    <ContentInformation {...args} />
);

export const Index = Profile.bind({});
Index.args = {
    text: "Disponible en tiendas",
    button: "Descubre Mas",
    styleTemplate: "ContentInformation"
};