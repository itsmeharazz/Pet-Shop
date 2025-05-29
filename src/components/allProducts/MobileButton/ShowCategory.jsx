import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


import AllCategory from "../AllCategory";
import Brands from "../Brands";

const ShowCategory = () => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='shadow-md p-2 mb-15 lg:hidden border rounded-xl'>
          <Sheet>
            <SheetTrigger>Category</SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                  <AllCategory />
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className='shadow-md p-2 mb-15 lg:hidden border rounded-xl'>
          <Sheet>
            <SheetTrigger>Brand</SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                  <Brands />
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default ShowCategory;
