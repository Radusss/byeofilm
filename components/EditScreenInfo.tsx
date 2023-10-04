import React, { useState, useEffect } from "react";
import { Platform, View } from "react-native"; // Import View from react-native
import { Graph as WebGraph } from "./GraphComponent.web";
import { Graph as NativeGraph } from "./GraphComponent.native";
import AreYouSafeComponent from "./AreYouSafeComponent";
import useFetchData from "./useFetchData";
import HealthyTip from "./HealthyTipComponent";

export default function EditScreenInfo({ path }: { path: string }) {
  // const [readings, setReadings] = useState<string[]>([]);
  // const [timestamps, setTimestamps] = useState<string[]>([]);
  const threshold = 250;
  const [selectedDomain, setSelectedDomain] = useState<any>(null);
  const [zoomDomain, setZoomDomain] = useState<any>(null);
  const { readings, timestamps } = useFetchData();

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
          threshold={threshold}
        />
      ) : (
        <NativeGraph
          readings={readings}
          timestamps={timestamps}
          threshold={threshold}
        />
      )}
      <AreYouSafeComponent
        lastReading={readings[readings.length - 1]}
        threshold={threshold}
      />
      {/* <HealthyTip text="Hello, World!" /> */}
    </View>
  );
}
