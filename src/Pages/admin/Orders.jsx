import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Page,
  Sort,
  Filter,
  Edit,
  ContextMenu,
  ExcelExport,
  PdfExport,
} from "@syncfusion/ej2-react-grids";
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-navigations/styles/material.css";
import "@syncfusion/ej2-react-grids/styles/material.css";

import { ordersData, ordersGrid } from "../../Data/dummy";
import Header from "../../components/admin/Header";

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Orders' />
      <GridComponent
        id='gridcomp'
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowFiltering
        rowHeight={50}
        className='border border-gray-300 rounded-lg'>
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter, ContextMenu, Edit]} />
      </GridComponent>
    </div>
  );
};

export default Orders;
