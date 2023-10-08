import React from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryZoomContainer,
  VictoryBrushContainer,
  VictoryTheme,
} from "victory";

interface GraphProps {
  readings: string[];
  timestamps: string[];
  selectedDomain: any;
  zoomDomain: any;
  threshold: number;
  onZoomDomainChange(domain: any): void;
  onBrushDomainChange(domain: any): void;
}

export const Graph: React.FC<GraphProps> = ({
  readings,
  timestamps,
  selectedDomain,
  zoomDomain,
  threshold,
  onZoomDomainChange,
  onBrushDomainChange,
}) => {
  // Convert data to the format expected by VictoryLine
  const data = timestamps.map((timestamp, index) => {
    return {
      x: new Date(timestamp), // converting timestamp to Date object
      y: parseFloat(readings[index]), // converting reading to number
    };
  });
  if (data.length === 0) {
    return null;
  }
  return (
    <div
      style={{
        backgroundColor: "rgba(169, 169, 169, 0.75)", // grey background with 0.5 transparency
        padding: 20, // optional: for some spacing
        borderRadius: 10, // optional: if you want rounded corners
      }}
    >
      <div>
        <VictoryChart
          width={550}
          height={250}
          containerComponent={
            <VictoryZoomContainer
              responsive={false}
              zoomDomain={zoomDomain}
              onZoomDomainChange={onZoomDomainChange}
            />
          }
        >
          <VictoryLine
            style={{
              data: { stroke: "tomato" },
            }}
            data={data}
          />
          {/* Threshold line */}
          <VictoryLine
            data={[
              { x: new Date(timestamps[0]), y: threshold },
              { x: new Date(timestamps[timestamps.length - 1]), y: threshold },
            ]}
            //y={() => threshold}
            style={{
              data: { stroke: "#404258", opacity: 0.3 },
            }}
          />
          {/* <VictoryAxis dependentAxis tickFormat={(tick) => `${tick} mV`} /> */}
        </VictoryChart>

        <VictoryChart
          width={550}
          height={90}
          scale={{ x: "time", y: "linear" }}
          padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
          // theme={VictoryTheme.material}
          containerComponent={
            <VictoryBrushContainer
              responsive={false}
              brushDomain={selectedDomain}
              brushDimension="x"
              onBrushDomainChange={onBrushDomainChange}
              brushStyle={{
                stroke: "transparent",
                fill: "black",
                fillOpacity: 0.1,
              }}
            />
          }
        >
          <VictoryAxis />
          <VictoryLine
            style={{
              data: { stroke: "tomato" },
            }}
            data={data}
          />
        </VictoryChart>
      </div>
    </div>
  );
};
