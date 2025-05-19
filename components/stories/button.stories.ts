import type { StoryObj, Meta } from "@storybook/react";

import { Button } from "../../components/ui/button";

import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
    title: "Components/ui/button",
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: "select",
            description: "Button variants",
            options: ["default", "link", "ghost", "secondary", "outline", "destructive"],
        },
        size: {
            control: "select",
            description: "Button sizes",
            options: ["default", "sm", "lg", "icon"],
        },
        disabled: {
            control: "boolean",
            description: "Disable the button",
        },
        onClick: {
            action: "clicked",
            description: "Function called when the default button is clicked",
        },
        children: {
            control: "text",
            description: "Content to be displayed inside the button",
        },
        className: {
            control: "text",
            description: "Custom tailwind CSS classes to apply to the button",
        },    
    }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'default',
        size: 'sm',
        disabled: false,
        onClick: action('default click'),
        children: "Default button",
        className: 'shadow-lg',
    },
}
export const Link: Story = {
    args: {
        variant: 'link',
        size: 'lg',
        disabled: false,
        onClick: action('link click'),
        children: "Link button",
        className: 'shadow-lg',
    },
}
export const Ghost: Story = {
    args: {
        variant: 'ghost',
        size: 'lg',
        disabled: false,
        onClick: action('ghost click'),
        children: "Ghost button",
        className: 'shadow-lg',
    },
}
export const Secondary: Story = {
    args: {
        variant: 'secondary',
        size: 'lg',
        disabled: false,
        onClick: action('secondary click'),
        children: "Secondary button",
        className: 'shadow-lg',
    },
}
export const Outline: Story = {
    args: {
        variant: 'outline',
        size: 'lg',
        disabled: false,
        onClick: action('outline click'),
        children: "Outline button",
        className: 'rounded-none shadow-lg',
    },
}
export const Destructive: Story = {
    args: {
        variant: 'destructive',
        size: 'lg',
        disabled: false,
        onClick: action('destructive click'),
        children: "Destructive button",
        className: 'shadow-lg',
    },
}