import "./Input.css";
import { useState, useEffect } from "react";

function Input() {
  const [temperature, setTemperature] = useState("");
  const [moisture, setMoisture] = useState("");
  const [humidity, setHumidity] = useState("");
  const [sensorData, setSensorData] = useState([]);

  // Fetch latest 5 records
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/data"); // Update with backend URL if needed
        const data = await response.json();
        setSensorData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Auto refresh every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      temperature: Number(temperature),
      moisture: Number(moisture),
      humidity: Number(humidity),
    };

    try {
      const response = await fetch("http://localhost:5000/endpoint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Data saved successfully");
        setTemperature("");
        setMoisture("");
        setHumidity("");
      } else {
        alert("Error saving data");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error saving data");
    }
  };

  return (
    <div className="main-container">
      {/* Left Side - Form */}
      <div className="form-container">
        <h1>Plant Monitoring System</h1>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Temperature:
            <input type="number" value={temperature} onChange={(e) => setTemperature(e.target.value)} required />
          </label>
<br />
          <label>
            Moisture:
            <input type="number" value={moisture} onChange={(e) => setMoisture(e.target.value)} required />
          </label>
<br />
          <label>
            Humidity:
            <input type="number" value={humidity} onChange={(e) => setHumidity(e.target.value)} required />
          </label>
<br />
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Right Side - Data Display */}
      <div className="data-container">
        <h2>Latest Sensor Data</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>Temperature (°C)</th>
              <th>Moisture (%)</th>
              <th>Humidity (%)</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {sensorData.map((data) => (
              <tr key={data._id}>
                <td>{data.temperature}</td>
                <td>{data.moisture}</td>
                <td>{data.humidity}</td>
                <td>{new Date(data.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Input;




// import './App.css'; // Correct CSS import
// import { useState } from "react";

// function App() {
//   const [temperature, setTemperature] = useState("");
//   const [moisture, setMoisture] = useState("");
//   const [humidity, setHumidity] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = {
//       temperature: Number(temperature),
//       moisture: Number(moisture),
//       humidity: Number(humidity),
//     };

//     try {
//       const urls="http://localhost:3000/endpoint";
//       const url="https://plantmonitoring-system.onrender.com/endpoint";

//       const response = await fetch(urls, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert("Data saved successfully");
//       } else {
//         alert("Error saving data");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error saving data");
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Plant Monitoring System</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             Temperature:
//             <input
//               type="number"
//               value={temperature}
//               onChange={(e) => setTemperature(e.target.value)}
//               required
//             />
//           </label>
//         </div>

//         <div>
//           <label>
//             Moisture:
//             <input
//               type="number"
//               value={moisture}
//               onChange={(e) => setMoisture(e.target.value)}
//               required
//             />
//           </label>
//         </div>

//         <div>
//           <label>
//             Humidity:
//             <input
//               type="number"
//               value={humidity}
//               onChange={(e) => setHumidity(e.target.value)}
//               required
//             />
//           </label>
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
