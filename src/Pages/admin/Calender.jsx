import React from "react";
import "@syncfusion/ej2-react-schedule/styles/material.css";
import "@syncfusion/ej2-react-calendars/styles/material.css";

import {
  ScheduleComponent,
  ViewsDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Resize,
  DragAndDrop,
  Inject,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { scheduleData } from "../../Data/dummy";
import Header from "../../components/admin/Header";

const Calender = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Calendar' />
      <ScheduleComponent
        height='550px'
        eventSettings={{ dataSource: scheduleData }}>
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calender;
