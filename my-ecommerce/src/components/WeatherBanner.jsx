import {useState} from 'react';
import {useEffect} from 'react';
const WeatherBanner = ({ darkMode }) => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState('New York');
  
    useEffect(() => {
      setTimeout(() => {
        const weatherData = {
          location: location,
          temperature: Math.floor(Math.random() * 30) + 10,
          condition: ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy'][Math.floor(Math.random() * 4)]
        };
        setWeather(weatherData);
        setLoading(false);
      }, 1000);
    }, [location]);
  
    const handleLocationChange = (e) => {
      if (e.key === 'Enter') {
        setLoading(true);
        setLocation(e.target.value);
      }
    };
  
    return (
      <div className={`${darkMode ? 'bg-dark' : 'bg-primary'} text-white py-2`}>
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <div className="d-flex align-items-center">
            {loading ? (
              <p className="mb-0">Loading weather...</p>
            ) : (
              <>
                <span className="me-2">
                  {weather.condition === 'Sunny' && '☀️'}
                  {weather.condition === 'Cloudy' && '☁️'}
                  {weather.condition === 'Rainy' && '🌧️'}
                  {weather.condition === 'Partly Cloudy' && '⛅'}
                </span>
                <span>
                  {weather.location}: {weather.temperature}°C, {weather.condition}
                </span>
              </>
            )}
          </div>
          <div className="w-100 w-md-auto mt-2 mt-md-0">
            <input
              type="text"
              placeholder="Enter location"
              className="form-control form-control-sm"
              onKeyDown={handleLocationChange}
            />
          </div>
        </div>
      </div>
    );
  };
  
  
  
export default WeatherBanner;  