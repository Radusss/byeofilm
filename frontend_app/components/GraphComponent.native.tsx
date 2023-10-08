import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryZoomContainer,
} from "victory-native";

interface GraphProps {
  readings: string[];
  timestamps: string[];
  threshold: number;
}

export const Graph: React.FC<GraphProps> = ({
  readings,
  timestamps,
  threshold,
}) => {
  const data = timestamps.map((timestamp, index) => ({
    x: new Date(timestamp),
    y: parseFloat(readings[index]),
  }));

  // State to hold the current zoom domain
  const [zoomDomain, setZoomDomain] = useState<{ x: [Date, Date] }>();

  // State to decide whether to show time in 'day' or 'hour' format
  const [timeFormat, setTimeFormat] = useState("day"); // "day" or "hour"

  // useEffect to update the timeFormat based on zoomDomain
  useEffect(() => {
    if (!zoomDomain) return;
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
    const diffDays = Math.round(
      Math.abs((zoomDomain.x[1].getTime() - zoomDomain.x[0].getTime()) / oneDay)
    );
    setTimeFormat(diffDays > 1 ? "day" : "hour");
  }, [zoomDomain]);

  return (
    <View
      style={{
        backgroundColor: "rgba(160, 160, 160, 0.8)",
        padding: 20,
        borderRadius: 70,
      }}
    >
      <VictoryChart
        width={350}
        containerComponent={
          <VictoryZoomContainer
            zoomDimension="x"
            onZoomDomainChange={(domain) =>
              setZoomDomain({
                x: [new Date(domain.x[0]), new Date(domain.x[1])],
              })
            }
          />
        }
      >
        {timestamps.length > 0 && (
          <VictoryLine
            data={[
              { x: new Date(timestamps[0]), y: threshold },
              { x: new Date(timestamps[timestamps.length - 1]), y: threshold },
            ]}
            style={{
              data: { stroke: "#404258", opacity: 0.5 },
            }}
          />
        )}

        <VictoryAxis
          tickFormat={(x) => {
            const date = new Date(x);
            // Check the timeFormat and return the formatted string accordingly
            if (timeFormat === "day") {
              return `${date.getMonth() + 1}/${date.getDate()}`;
            } else {
              // Ensuring minutes are always two digits
              return `${date.getHours()}:${String(date.getMinutes()).padStart(
                2,
                "0"
              )}`;
            }
          }}
        />

        <VictoryAxis dependentAxis />

        <VictoryLine
          style={{
            data: { stroke: "tomato" },
          }}
          data={data}
        />
      </VictoryChart>
    </View>
  );
};
