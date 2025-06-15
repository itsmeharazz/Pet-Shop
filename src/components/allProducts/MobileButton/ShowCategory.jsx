import React from "react";
// import { enableRipple } from "@syncfusion/ej2-base";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";



import AllCategory from "../AllCategory";
import Brands from "../Brands";

const ShowCategory = () => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='shadow-md p-2 mb-15 sm:hidden lg:hidden border rounded-xl'>
          <DropDownButtonComponent
            id='element'
            items={<AllCategory />}
            iconCss='e-icons e-menu'
            content='Category'>
            Category{" "}
          </DropDownButtonComponent>
        </div>
        <div className='shadow-md p-2 mb-15 sm:hidden lg:hidden border rounded-xl'>
          <DropDownButtonComponent
            id='element'
            items={<Brands />}
            iconCss='e-icons e-menu'
            content='Brands'>
            Brands{" "}
          </DropDownButtonComponent>
        </div>
      </div>
    </>
  );
};

export default ShowCategory;
