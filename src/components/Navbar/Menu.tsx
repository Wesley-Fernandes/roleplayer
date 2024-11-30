import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { AlignJustify } from "lucide-react"
  

  export default function Menu() {
    return (
        <Sheet>
        <SheetTrigger asChild>
            <Button size="icon" variant="outline">
                <AlignJustify />
            </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu global</SheetTitle>
            <SheetDescription>
              Menu global em desenvolvimento
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      
    )
  }
  