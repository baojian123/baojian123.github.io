/* eslint linebreak-style: ['error', 'unix']*/

import React, {useState, useEffect} from 'react';
import './App.scss';
import WeatherPage from './Pages/WeatherPage/WeatherPage';
import LoadingPage from './Pages/LoadingPage/LoadingPage';
/**
 * A functional component for the whole single page application
 * @return {object} A app component
 */
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <main className='App'>
      {isLoading && <LoadingPage/>}
      <WeatherPage isLoading={isLoading} />
    </main>
  );
};

export default App;
