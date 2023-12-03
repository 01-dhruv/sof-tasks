// import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import './components/Navbar/Navbar'
// import { BrowserRouter as Router } from 'react-router-dom'
// import MyRoutes from './MyRoutes';
// import { fetchAllQuestions } from './actions/question'
// import { fetchAllUsers } from './actions/users'

// import firebase from 'firebase/app';
// import { storage } from "./firebase";


// function App() {

//   const dispatch = useDispatch()





//   const API_KEY = 'ac11932887e9a92e5af65291dcb4a6f0'; // Replace with your OpenWeather API key

// const getWeatherData = async (latitude, longitude) => {
//   try {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

//     const response = await fetch(apiUrl);
//     if (response.status === 200) {
//       const data = await response.json();
//       return data;
//     } else {
//       throw new Error('Failed to fetch weather data');
//     }
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

// // Example usage:
// const latitude = 52.5200; // Replace with your desired latitude
// const longitude = 13.4050; // Replace with your desired longitude

// getWeatherData(latitude, longitude)
//   .then((data) => {
//     if (data) {
//       console.log('Weather data:', data.weather[0].main);
//       // You can extract and use data such as temperature, weather conditions, etc.
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });










//   useEffect( () => {
//     dispatch(fetchAllQuestions())
//     dispatch(fetchAllUsers())
//   }, [dispatch])



//   return (
//     <Router>
//       <Navbar/>
//       <MyRoutes/>
//     </Router>
//   );
// }

// export default App;




// function App() {
//   const dispatch = useDispatch();

//   const API_KEY = 'ac11932887e9a92e5af65291dcb4a6f0'; // Replace with your OpenWeather API key

//   const getWeatherData = async (latitude, longitude) => {
//     try {
//       const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
//       const response = await fetch(apiUrl);
      
//       if (response.status === 200) {
//         const data = await response.json();
//         return data;
//       } else {
//         throw new Error('Failed to fetch weather data');
//       }
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
//   };

//   useEffect(() => {
//     dispatch(fetchAllQuestions());
//     dispatch(fetchAllUsers());
    
//     // Get the user's location coordinates using the Geolocation API
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(function (position) {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
        
//         getWeatherData(latitude, longitude)
//           .then((data) => {
//             if (data) {
//               console.log('Weather data:', data.weather[0].main);
//               console.log(latitude, longitude)
//               // You can extract and use data such as temperature, weather conditions, etc.
//             }
//           })
//           .catch((error) => {
//             console.error(error);
//           });
//       });
//     } else {
//       console.error("Geolocation not available in this browser.");
//     }
//   }, [dispatch]);

//   return (
//     <Router>
//       <Navbar />
//       <MyRoutes />
//     </Router>
//   );
// }
// export default App;


















// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import { BrowserRouter as Router } from 'react-router-dom';
// import MyRoutes from './MyRoutes';
// import { fetchAllQuestions } from './actions/question';
// import { fetchAllUsers } from './actions/users';

// function App() {
//   const dispatch = useDispatch();
//   const API_KEY = 'ac11932887e9a92e5af65291dcb4a6f0'; // Replace with your OpenWeather API key
//   const [weatherCondition, setWeatherCondition] = useState('');
//   const [isLoading, setIsLoading] = useState(true);

//   const getWeatherData = async (latitude, longitude) => {
//     try {
//       const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
//       const response = await fetch(apiUrl);

//       if (response.status === 200) {
//         const data = await response.json();
//         return data;
//       } else {
//         throw new Error('Failed to fetch weather data');
//       }
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
//   };

//   useEffect(() => {
//     dispatch(fetchAllQuestions());
//     dispatch(fetchAllUsers());

//     if ('geolocation' in navigator) {
//       navigator.geolocation.getCurrentPosition(function (position) {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         // const latitude = 52.5200;
//         // const longitude = 13.4050;

//         getWeatherData(latitude, longitude)
//           .then((data) => {
//             if (data) {
//               console.log('Weather data:', data.weather[0].main);
//               setWeatherCondition(data.weather[0].main);
//             }
//           })
//           .catch((error) => {
//             console.error(error);
//           })
//           .finally(() => {
//             setIsLoading(false);
//           });
//       });
//     } else {
//       console.error('Geolocation not available in this browser.');
//     }
//   }, [dispatch]);

//   // Define a function to set website theme based on weather condition
//   const setWebsiteTheme = (condition) => {
//     const body = document.body;
//     const textColor = condition === 'Clear' ? 'black' : 'white';
//     const bgColor = condition === 'Clear' ? 'white' : 'black';

//     body.style.color = textColor;
//     body.style.backgroundColor = bgColor;
//   };

//   // Apply the theme when weatherCondition is available
//   if (!isLoading) {
//     setWebsiteTheme(weatherCondition);
//   }

//   return (
//     <Router>
//       <Navbar />
//       <MyRoutes theme={weatherCondition}/>
//     </Router>
//   );
// }

// export default App;














import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import MyRoutes from './MyRoutes';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';

function App() {
  const dispatch = useDispatch();
  const API_KEY = 'ac11932887e9a92e5af65291dcb4a6f0'; // Replace with your OpenWeather API key
  const [weatherCondition, setWeatherCondition] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getWeatherData = async (latitude, longitude) => {
    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
      const response = await fetch(apiUrl);

      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch weather data');
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const getTimeOfDay = () => {
    const now = new Date();
    const hours = now.getHours();
    return hours >= 6 && hours < 18 ? 'day' : 'night';
  };

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // const latitude = 52.5200; // Replace with your desired latitude
        // const longitude = 13.4050; 
        getWeatherData(latitude, longitude)
          .then((data) => {
            if (data) {
              console.log('Weather data:', data.weather[0].main);
              const weather = data.weather[0].main;
              const timeOfDay = getTimeOfDay();
              setWeatherCondition({ weather, timeOfDay });
            }
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      });
    } else {
      console.error('Geolocation not available in this browser.');
    }
  }, [dispatch]);

  // Define a function to set website theme based on weather condition and time of day
  const setWebsiteTheme = (condition) => {
    const body = document.body;
    // if (condition.weather === 'Clear' && condition.timeOfDay === 'day') {
    if (condition.weather === 'Clear' && condition.timeOfDay === 'day') {
      body.style.color = 'black';
      body.style.backgroundColor = 'white';
    } else {
      body.style.color = 'white';
      body.style.backgroundColor = 'black';
    }
  };

  // Apply the theme when weatherCondition is available
  if (!isLoading) {
    setWebsiteTheme(weatherCondition);
  }
  // console.log('test', weatherCondition)

  return (
    <Router>
      <Navbar />
      <MyRoutes theme={weatherCondition}/>
    </Router>
  );
}

export default App;
