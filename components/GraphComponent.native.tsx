// import React from "react";
// import { View } from "react-native";
// import {
//   VictoryChart,
//   VictoryLine,
//   VictoryAxis,
//   VictoryZoomContainer,
//   VictoryTheme,
// } from "victory-native";

// interface GraphProps {
//   readings: string[];
//   timestamps: string[];
//   threshold: number;
// }

// export const Graph: React.FC<GraphProps> = ({
//   readings,
//   timestamps,
//   threshold,
// }) => {
//   // Convert data to the format expected by VictoryLine
//   const data = timestamps.map((timestamp, index) => {
//     return {
//       x: new Date(timestamp), // converting timestamp to Date object
//       y: parseFloat(readings[index]), // converting reading to number
//     };
//   });

//   return (
//     <View>
//       <VictoryChart
//         //theme={VictoryTheme.material}
//         scale={{ x: "time" }}
//         // Adding VictoryZoomContainer as the containerComponent
//         containerComponent={<VictoryZoomContainer zoomDimension="x" />}
//       >
//         {timestamps.length > 0 && (
//           <VictoryLine
//             data={[
//               { x: new Date(timestamps[0]), y: threshold },
//               { x: new Date(timestamps[timestamps.length - 1]), y: threshold },
//             ]}
//             style={{
//               data: { stroke: "gray", opacity: 0.5 },
//             }}
//           />
//         )}

//         <VictoryAxis
//           tickFormat={(x) => {
//             const date = new Date(x);
//             return `${date.getMonth() + 1}/${date.getDate()}`;
//           }}
//         />
//         <VictoryAxis dependentAxis />
//         <VictoryLine
//           style={{
//             data: { stroke: "tomato" },
//           }}
//           data={data}
//         />
//       </VictoryChart>
//     </View>
//   );
// };
import React from "react";
import { View } from "react-native";
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryZoomContainer,
  VictoryTheme,
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
  // Convert data to the format expected by VictoryLine
  const data = timestamps.map((timestamp, index) => {
    return {
      x: new Date(timestamp), // converting timestamp to Date object
      y: parseFloat(readings[index]), // converting reading to number
    };
  });

  return (
    <View
      style={{
        backgroundColor: "rgba(160, 160, 160, 0.8)", // grey background with 0.5 transparency
        padding: 20, // optional: for some spacing
        borderRadius: 70, // optional: if you want rounded corners
      }}
    >
      <VictoryChart
        //theme={VictoryTheme.material}
        scale={{ x: "time" }}
        // Adding VictoryZoomContainer as the containerComponent
        containerComponent={<VictoryZoomContainer zoomDimension="x" />}
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
            return `${date.getMonth() + 1}/${date.getDate()}`;
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
