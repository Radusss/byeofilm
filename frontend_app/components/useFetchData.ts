// useFetchData.ts
import { useState, useEffect } from 'react';

interface ReadingData {
  reading: string;
  timestamp: string;
}

const useFetchData = () => {
  const [readings, setReadings] = useState<string[]>([]);
  const [timestamps, setTimestamps] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const cloudFunctionUrl =
        'https://europe-west1-analog-delight-400119.cloudfunctions.net/pull-data';

      try {
        const response = await fetch(cloudFunctionUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_id: 'arduin0' }),
        });

        const data: { success: boolean; readings: ReadingData[] } = await response.json();
        if (data.success && data.readings.length > 0) {
          const readingsFromDB = data.readings.map((r) => r.reading);
          const timestampsFromDB = data.readings.map((r) => r.timestamp);
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

  return { readings, timestamps };
};

export default useFetchData;
