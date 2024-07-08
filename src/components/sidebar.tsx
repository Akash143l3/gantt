"use client"
import React from 'react'
import Sidebar, { SidebarBody, SidebarItem, SidebarLabel } from "@/components/sidebarcom";
import { Home, Plus, Users } from "lucide-react";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { AccordionDemo } from './accordiondemo';

export default function Sidebar1(){
   const pathname = usePathname();
  return (
    <Sidebar className="border-r min-h-screen">
      <SidebarBody>
        <SidebarLabel>
          MAIN MENU
        </SidebarLabel>
        <Link href={"/"} className="w-full">
          <SidebarItem isActive={pathname === "/"}>
            <Home /> Dashboard
          </SidebarItem>
        </Link>
        <Link href={"/faculty"} className="w-full">
          <SidebarItem isActive={pathname === "/faculty"}>
            <Users />Faculty
          </SidebarItem>
        </Link>
        <SidebarLabel>
          <div className="flex justify-between">
            BRANCHES

            <Dialog>
              <DialogTrigger asChild>
                <Plus className="pb-1 hover:cursor-pointer" />
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add Branch</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="flex items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Branch Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue="Computer Science"
                      className="w-2/3"
                    />
                  </div>
                  <div className="w-full items-center flex gap-8">
                    <Label htmlFor="semester" className="text-right">
                      Number of Semester
                    </Label>
                    <select
                      id="semester"
                      defaultValue="1"  // Set the default selected option here
                      className="bg-secondary/0 w-20"
                    >
                      {/* Option for each semester number */}
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      {/* Add more options as needed */}
                    </select>

                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

          </div>
        </SidebarLabel>
        <AccordionDemo />
      </SidebarBody>



    </Sidebar>
  )
}
