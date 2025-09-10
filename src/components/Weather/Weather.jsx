import { useState } from "react";
import WeatherData from "../db/data.json";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Button, Card } from "antd";

export const Weather = () => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const [weather, setWeather] = useState(null);

  function click() {
    const cityKey = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    if (cityKey in WeatherData) {
      setWeather(WeatherData[cityKey]);
      setOpen(true);
    } else {
      setOpen(false);
      setWeather(null);
    }
    console.log(weather);
  }

  return (
    <>
      <div className="search">
        <Input
          placeholder="Enter city"
          value={inputValue}
          onChange={({ target }) => setInputValue(target.value)}
        />
        <Button type="primary" icon={<SearchOutlined />} onClick={click}>
          Search
        </Button>
      </div>

      {open && weather && (
        <Card className="Card" title={inputValue} style={{ width: 300 }}>
          <p>Icon: {weather.icon}</p>
          <p>Temperature: {weather.temp}°C</p>
          <p>Description: {weather.description}</p>
        </Card>
      )}
    </>
  );
};
