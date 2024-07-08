import { HStack } from "@/components/stack";
import { Text } from "@/components/text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Profile, { ProfileContent, ProfileLeft, ProfileRight } from "@/components/ui/profileCard";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { PhoneCall, StarIcon } from "lucide-react";



// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "UI/ProfileCard",
    component: (props) => (
        <Profile {...props} className="flex gap-80">
            <div className="flex items-center gap-1.5 ">
            <ProfileLeft>
                1.
                <Avatar>
                    <AvatarImage></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </ProfileLeft>
            <ProfileContent>
                <Text styles={"subtle_semibold"}>Suresh Kumar</Text>
                <Text styles={"details"} className="text-muted-foreground">
                    364CS21022
                </Text>
            </ProfileContent>

            </div>
            <ProfileRight>
                <Text styles={"details"} className="text-muted-foreground">
                    Invited just now
                </Text>
                <Button variant={"box"}>Cancel Invitation</Button></ProfileRight>

        </Profile>
    ),
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    // argTypes: {
    //   variant: "default"
    // },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        variant: "default"
    },
};



