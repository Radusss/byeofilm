// import React, { useState, useEffect } from "react";
// import { Graph } from "./GraphComponent.web";

// export default function EditScreenInfo({ path }: { path: string }) {
//   const [readings, setReadings] = useState<string[]>([]);
//   const [timestamps, setTimestamps] = useState<string[]>([]);
//   const [selectedDomain, setSelectedDomain] = useState<any>(null);
//   const [zoomDomain, setZoomDomain] = useState<any>(null);

//   useEffect(() => {
//     const fetchData = () => {
//       const cloudFunctionUrl =
//         "https://europe-west1-analog-delight-400119.cloudfunctions.net/pull-data";

//       fetch(cloudFunctionUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ user_id: "arduin0" }),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           if (data.success && data.readings.length > 0) {
//             const readingsFromDB = data.readings.map((r: any) => r.reading);
//             const timestampsFromDB = data.readings.map((r: any) => r.timestamp);
//             setReadings(readingsFromDB);
//             setTimestamps(timestampsFromDB);
//           }
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     };

//     fetchData();
//     const intervalId = setInterval(fetchData, 5000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const handleZoom = (domain: any) => {
//     setSelectedDomain(domain);
//   };

//   const handleBrush = (domain: any) => {
//     setZoomDomain(domain);
//   };

//   return (
//     <div>
//       <Graph
//         readings={readings}
//         timestamps={timestamps}
//         selectedDomain={selectedDomain}
//         zoomDomain={zoomDomain}
//         onZoomDomainChange={handleZoom}
//         onBrushDomainChange={handleBrush}
//       />
//     </div>
//   );
// }
// import React, { useState, useEffect } from "react";
// import { Platform } from "react-native";
// import { Graph as WebGraph } from "./GraphComponent.web";
// import { Graph as NativeGraph } from "./GraphComponent.native";

// export default function EditScreenInfo({ path }: { path: string }) {
//   const [readings, setReadings] = useState<string[]>([]);
//   const [timestamps, setTimestamps] = useState<string[]>([]);
//   const [selectedDomain, setSelectedDomain] = useState<any>(null);
//   const [zoomDomain, setZoomDomain] = useState<any>(null);

//   useEffect(() => {
//     const fetchData = () => {
//       const cloudFunctionUrl =
//         "https://europe-west1-analog-delight-400119.cloudfunctions.net/pull-data";

//       fetch(cloudFunctionUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ user_id: "arduin0" }),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           if (data.success && data.readings.length > 0) {
//             const readingsFromDB = data.readings.map((r: any) => r.reading);
//             const timestampsFromDB = data.readings.map((r: any) => r.timestamp);
//             setReadings(readingsFromDB);
//             setTimestamps(timestampsFromDB);
//           }
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     };

//     fetchData();
//     const intervalId = setInterval(fetchData, 5000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const handleZoom = (domain: any) => {
//     setSelectedDomain(domain);
//   };

//   const handleBrush = (domain: any) => {
//     setZoomDomain(domain);
//   };

//   return (
//     <div>
//       {Platform.OS === "web" ? (
//         <WebGraph
//           readings={readings}
//           timestamps={timestamps}
//           selectedDomain={selectedDomain}
//           zoomDomain={zoomDomain}
//           onZoomDomainChange={handleZoom}
//           onBrushDomainChange={handleBrush}
//         />
//       ) : (
//         <NativeGraph readings={readings} timestamps={timestamps} />
//       )}
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { Platform, View } from "react-native"; // Import View from react-native
import { Graph as WebGraph } from "./GraphComponent.web";
import { Graph as NativeGraph } from "./GraphComponent.native";

export default function EditScreenInfo({ path }: { path: string }) {
  const [readings, setReadings] = useState<string[]>([]);
  const [timestamps, setTimestamps] = useState<string[]>([]);
  const [selectedDomain, setSelectedDomain] = useState<any>(null);
  const [zoomDomain, setZoomDomain] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const cloudFunctionUrl =
        "https://europe-west1-analog-delight-400119.cloudfunctions.net/pull-data";

      try {
        const response = await fetch(cloudFunctionUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_id: "arduin0" }),
        });

        const data = await response.json();
        if (data.success && data.readings.length > 0) {
          const readingsFromDB = data.readings.map((r: any) => r.reading);
          const timestampsFromDB = data.readings.map((r: any) => r.timestamp);
          setReadings(readingsFromDB);
          setTimestamps(timestampsFromDB);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleZoom = (domain: any) => {
    setSelectedDomain(domain);
  };

  const handleBrush = (domain: any) => {
    setZoomDomain(domain);
  };

  return (
    // Use View here instead of div and ensure it occupies the available space.
    <View style={{ flex: 1 }}>
      {Platform.OS === "web" ? (
        <WebGraph
          readings={readings}
          timestamps={timestamps}
          selectedDomain={selectedDomain}
          zoomDomain={zoomDomain}
          onZoomDomainChange={handleZoom}
          onBrushDomainChange={handleBrush}
        />
      ) : (
        <NativeGraph readings={readings} timestamps={timestamps} />
      )}
    </View>
  );
}
