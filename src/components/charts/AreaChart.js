import "../../../node_modules/react-vis/dist/style.css";

import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    AreaSeries
  }  from "react-vis";

const AreaChart = (sensorData) => {
    const data = sensorData.sensorData;
    return (
      <div style={{ marginTop: "15px" }}>
        <XYPlot height={300} width={300} xType="time">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
            <AreaSeries
          className="area-series-example"
          curve={'curveMonotoneX'}
          data={data}
        />
        </XYPlot>
      </div>
    );
};

export default AreaChart;