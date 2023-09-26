import React from "react";
import { Story, Meta } from "@storybook/react";

import { UserList, UserListProps } from "./index";

export default {
    title: "Component/UserList",
    component: UserList,
} as Meta;

const Profile: Story<UserListProps> = (args) => (
    <UserList {...args}/>
);

export const Index = Profile.bind({});
Index.args = {
        styleTemplate:"userlist1"
};