import { AccordionDemo } from "@/components/accordiondemo";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { PlusCircle } from "lucide-react";
import NavItem from "@/components/nav-item";

const meta: Meta = {
    title: "UI/Accordion",
    component: AccordionDemo,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: { onClick: fn() },
} satisfies Meta<typeof AccordionDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Multiple: Story = {
    args: {},
    render: () => <div className="w-56">
        <AccordionDemo />
    </div>,
};

export const Single: Story = {
    args: {},
    render: () =>
        <div className="w-56">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger><PlusCircle />Artificial Intelligence</AccordionTrigger>
                    <AccordionContent>
                        <NavItem>Semester 1</NavItem>
                        <NavItem>Semester 2</NavItem>
                        <NavItem>Semester 3</NavItem>
                        <NavItem>Semester 4</NavItem>
                        <NavItem>Semester 5</NavItem>
                        <NavItem>Semester 6</NavItem>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    ,
};
