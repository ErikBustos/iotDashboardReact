import "../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
} from "react-vis";

const Chart = (sensorData) => {
  const data = sensorData.sensorData;
  return (
    <div style={{ marginTop: "15px" }}>
      <XYPlot height={300} width={300} xType="time">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={data} color="green" 
        style={{mark:{stroke: 'white'}}}
        />
      </XYPlot>
    </div>
  );
};

export default Chart;