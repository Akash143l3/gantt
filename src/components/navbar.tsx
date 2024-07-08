import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function Navbar() {
    return (
        <div className='h-18 border-b items-center flex justify-between px-8 '>
            <div className='flex h-full gap-3 '>
                <div className='flex gap-6 items-center'>
                    <Avatar >
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className='flex items-center gap-2'>
                        <h1>KSIT </h1>

                        {/* used fot dout */}
                        <span className='pb-5 text-4xl'>.</span>
                    </div>
                    <Select>
                        <SelectTrigger className="w-[120px]" defaultValue="2023-24">
                            <SelectValue placeholder="2022-23" />

                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Years</SelectLabel>
                                <SelectItem value="2021-22">2021-22</SelectItem>
                                <SelectItem value="2022-23">2022-23</SelectItem>
                                <SelectItem value="2023-24">2023-24</SelectItem>
                                <SelectItem value="2024-25">2024-25</SelectItem>
                                <SelectItem value="2025-26">2025-26</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>


            </div>
            <div>
                <Avatar >
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>

        </div>
    )
}