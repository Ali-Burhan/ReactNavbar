
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function WeatherDisplay() {
//   const [weather, setWeather] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await fetch(
//           `https://api.openweathermap.org/data/2.5/weather?q=zocco&appid=25324049616cf90e3ed8d019a745dce1`
//         );
//         setWeather(result.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   if (loading) {
//     return <div className="text-center py-8">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center py-8">{error.message}</div>;
//   }

// //   const { main, description} = weather[0];
//   return (
//     <div className="text-center py-8">
//       <h1 className="text-4xl font-medium"></h1>
//       <div className="flex items-center justify-center">
//         <p className="text-6xl font-medium mr-2">
//           {/* {Math.round(main.temp - 273.15)} */}
//         </p>
//         <p className="text-2xl font-medium">°C</p>
//       </div>
//       {/* <p className="text-xl font-medium">{ description}</p> */}
//     </div>
//   );
// }

// export default WeatherDisplay;
