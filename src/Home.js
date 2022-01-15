import React from 'react';
import WeatherWidget from './components/WeatherWidget';


function Home() {
  return (
    <div className="widget-cards-collection">
      <WeatherWidget city={'Ghent'}/>
      <WeatherWidget city={'Utrecht'}/>
      <WeatherWidget city={'Sidney'}/>
      <WeatherWidget city={'New York'}/>
      <WeatherWidget city={'Moscou'}/>
      <WeatherWidget city={'Dakhla'}/>
    </div>
  );
}

export default Home;
