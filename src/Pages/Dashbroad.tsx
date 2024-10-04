"use client";
import { useState } from "react";
import fetchAirQualityDataByArea from "../Components/fatchdata";
import AirQualityPieChart from "@/Components/airQualityPieChart";
import Map from "@/Components/googleMap";


interface AirQualityData {
  aqi: number;
  pm25: number;
  pm10: number;
  co2: number;
  o3: number;
  no2: number;
  so2: number;
  temperature: number;
  humidity: number;
  radioactivity: number;
  area: string;
}


const Dashboard = () => {  
  const [area, setArea] = useState("");
  const [airQualityData, setAirQualityData] = useState<AirQualityData | null>(
    null
  );

  const handleFetchData = async () => {
    const data = await fetchAirQualityDataByArea(area);
    setAirQualityData(data);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Enter area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="border p-2 mr-4 rounded"
        />
        <button
          onClick={handleFetchData}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Fetch Data
        </button>
      </div>

      {airQualityData ? (
        <div>
          <h1 className="text-2xl font-bold mb-6">Air Quality Dashboard</h1>

          {/* Four cards in the same row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Temperature Card */}
            <div className="card temperature-card text-center p-6 rounded-lg shadow-lg bg-red-500 text-white">
              <h2 className="text-lg font-semibold mb-2">Temperature</h2>
              <p className="text-3xl">{airQualityData.temperature}°C</p>
            </div>

            {/* Humidity Card */}
            <div className="card humidity-card text-center p-6 rounded-lg shadow-lg bg-blue-500 text-white">
              <h2 className="text-lg font-semibold mb-2">Humidity</h2>
              <p className="text-3xl">{airQualityData.humidity}%</p>
            </div>

            {/* Radioactivity Card */}
            <div className="card radioactivity-card text-center p-6 rounded-lg shadow-lg bg-green-500 text-white">
              <h2 className="text-lg font-semibold mb-2">Radioactivity</h2>
              <p className="text-3xl">{airQualityData.radioactivity} µSv/h</p>
            </div>

            {/* Air Bad Elements Card */}
            <div className="card bad-elements-card text-center p-6 rounded-lg shadow-lg bg-yellow-500 text-white">
              <h2 className="text-lg font-semibold mb-2">Air Bad Elements</h2>
              <p className="text-3xl">{airQualityData.so2}</p>
            </div>
          </div>

          {/* Air Quality Pie Chart */}
          <h2 className="text-xl font-semibold mt-6 mb-4 text-center">
            Air Quality Indices
          </h2>
          <div className="chart-container">
            <AirQualityPieChart
              data={airQualityData}
              width={800}
              height={600}
            />
          </div>
        </div>
      ) : (
        <p>No data available for this area</p>
      )}
      <div>
        <Map areaName={area} />
      </div>
    </div>
  );
};

export default Dashboard;
