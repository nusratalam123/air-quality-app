// utils/getAirQualityMessage.t
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


export const getAirQualityMessage = (data: AirQualityData) => {
  let aqiMessage = "";

  if (data.aqi <= 50) {
    aqiMessage = "Air quality is good. No health risks.";
  } else if (data.aqi <= 100) {
    aqiMessage =
      "Air quality is moderate. Sensitive groups should take caution.";
  } else if (data.aqi <= 150) {
    aqiMessage =
      "Unhealthy for sensitive groups. Be cautious if you have pre-existing conditions.";
  } else if (data.aqi <= 200) {
    aqiMessage =
      "Air quality is unhealthy. General public might experience some adverse health effects.";
  } else if (data.aqi <= 300) {
    aqiMessage =
      "Very unhealthy. Everyone may experience more serious health effects.";
  } else {
    aqiMessage = "Hazardous! Emergency conditions, health risks for everyone.";
  }

  return {
    aqiMessage,
    pm25Message: `PM2.5 Level: ${data.pm25} µg/m³.`,
    co2Message: `CO2 Level: ${data.co2} ppm.`,
    temperatureMessage: `Current Temperature: ${data.temperature}°C.`,
  };
};
