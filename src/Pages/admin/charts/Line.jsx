import React from "react";
import Header from "../../../components/admin/Header";
import LineCharts from "../../../components/admin/charts/LineCharts.jsx";

const Line = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Chart" title="Inflation Rate" />
      <div className="w-full"> <LineCharts /> </div>
    </div>
  );
};

export default Line;
