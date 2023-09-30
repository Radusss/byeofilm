//GraphComponent.tsx
import React from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryZoomContainer,
  VictoryBrushContainer,
} from "victory";

interface GraphProps {
  readings: string[];
  timestamps: string[];
  selectedDomain: any;
  zoomDomain: any;
  onZoomDomainChange(domain: any): void;
  onBrushDomainChange(domain: any): void;
}

export const Graph: React.FC<GraphProps> = ({
  readings,
  timestamps,
  selectedDomain,
  zoomDomain,
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

  return (
    <div>
      <VictoryChart
        width={550}
        height={300}
        scale={{ x: "time" }}
        containerComponent={
          <VictoryZoomContainer
            responsive={false}
            //zoomDimension="x"
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
      </VictoryChart>

      <VictoryChart
        width={550}
        height={90}
        scale={{ x: "time" }}
        padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
        containerComponent={
          <VictoryBrushContainer
            responsive={false}
            brushDomain={selectedDomain}
            onBrushDomainChange={onBrushDomainChange}
            brushStyle={{
              stroke: "transparent",
              fill: "white",
              fillOpacity: 0.1,
            }}
          />
        }
      >
        <VictoryAxis
          tickValues={timestamps.map((timestamp) => new Date(timestamp))}
          tickFormat={(x) => new Date(x).getFullYear()}
        />
        <VictoryLine
          style={{
            data: { stroke: "tomato" },
          }}
          data={data}
        />
      </VictoryChart>
    </div>
  );
};
