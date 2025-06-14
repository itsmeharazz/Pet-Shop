import React from 'react'
import {
  CircularChart3DComponent,
  CircularChart3DSeriesCollectionDirective,
  CircularChart3DSeriesDirective,
  PieSeries3D,
  CircularChartDataLabel3D,
  Inject,
} from '@syncfusion/ej2-react-charts';
import {pieChartData} from '../../../Data/dummy'

const Pie = () => {
  return (
    <CircularChart3DComponent
      id="charts"
      title="Browser Market Shares in November 2023"
      tilt={-45}
    >
      <Inject
        services={[
          PieSeries3D,
          CircularChartDataLabel3D,
        ]}
      />
      <CircularChart3DSeriesCollectionDirective>
        <CircularChart3DSeriesDirective
          dataSource={pieChartData}
          xName="x"
          yName="y"
        ></CircularChart3DSeriesDirective>
      </CircularChart3DSeriesCollectionDirective>
    </CircularChart3DComponent>
  )
}

export default Pie