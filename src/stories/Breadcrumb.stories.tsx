import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Breadcrumbdemo from "@/components/breadcrumbdemo";

const meta: Meta = {
    title: "UI/Breadcrumb",
    component: Breadcrumbdemo,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: { onClick: fn() },
} satisfies Meta<typeof Breadcrumbdemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Multiple: Story = {
    args: {},
    render: () => 
        <Breadcrumbdemo />,
};
