import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { PlusCircle } from "lucide-react"
import NavItem from "./nav-item"
  
  export function AccordionDemo() {
    return (
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
        <AccordionItem value="item-2">
          <AccordionTrigger><PlusCircle />Computer Science</AccordionTrigger>
          <AccordionContent>
            <NavItem>Semester 1</NavItem>
            <NavItem>Semester 2</NavItem>
            <NavItem>Semester 3</NavItem>
            <NavItem>Semester 4</NavItem>
            <NavItem>Semester 5</NavItem>
            <NavItem>Semester 6</NavItem>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger><PlusCircle />Mechanical Engg.</AccordionTrigger>
          <AccordionContent >
            <NavItem>Semester 1</NavItem>
            <NavItem>Semester 2</NavItem>
            <NavItem>Semester 3</NavItem>
            <NavItem>Semester 4</NavItem>
            <NavItem>Semester 5</NavItem>
            <NavItem>Semester 6</NavItem>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  