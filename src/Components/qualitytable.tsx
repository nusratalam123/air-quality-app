// components/AQIInfoTable.tsx
import React from "react";

import "../styles/learningSection.css";

const AQIInfoTable: React.FC = () => {
  return (
    <div>
      <h1 className="table-title">Air Quality Index Information</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Daily AQI Color</th>
              <th>Levels of Concern</th>
              <th>Values of Index</th>
              <th>Description of Air Quality</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: "green", color: "white" }}>
              <td>Green</td>
              <td>Good</td>
              <td>0 to 50</td>
              <td>
                Air quality is satisfactory, and air pollution poses little or
                no risk.
              </td>
            </tr>
            <tr style={{ backgroundColor: "yellow", color: "black" }}>
              <td>Yellow</td>
              <td>Moderate</td>
              <td>51 to 100</td>
              <td>
                Air quality is acceptable. However, there may be a risk for some
                people, particularly those who are unusually sensitive to air
                pollution.
              </td>
            </tr>
            <tr style={{ backgroundColor: "orange", color: "black" }}>
              <td>Orange</td>
              <td>Unhealthy for Sensitive Groups</td>
              <td>101 to 150</td>
              <td>
                Members of sensitive groups may experience health effects. The
                general public is less likely to be affected.
              </td>
            </tr>
            <tr style={{ backgroundColor: "red", color: "white" }}>
              <td>Red</td>
              <td>Unhealthy</td>
              <td>151 to 200</td>
              <td>
                Some members of the general public may experience health
                effects; members of sensitive groups may experience more serious
                health effects.
              </td>
            </tr>
            <tr style={{ backgroundColor: "purple", color: "white" }}>
              <td>Purple</td>
              <td>Very Unhealthy</td>
              <td>201 to 300</td>
              <td>
                Health alert: The risk of health effects is increased for
                everyone.
              </td>
            </tr>
            <tr style={{ backgroundColor: "maroon", color: "white" }}>
              <td>Maroon</td>
              <td>Hazardous</td>
              <td>301 and higher</td>
              <td>
                Health warning of emergency conditions: everyone is more likely
                to be affected.
              </td>
            </tr>
          </tbody>
        </table>
        <p style={{ textAlign: "center" }}>
          See the{" "}
          <a href="https://www.airnow.gov/activity-guides">Activity Guides</a>{" "}
          to learn ways to protect your health when the AQI reaches unhealthy
          levels.
        </p>
      </div>
    </div>
  );
};

export default AQIInfoTable;
