import axios from "axios";

const getWeather = async (city) => {
  const API_KEY = `7a78457b7920aaa3309f665ba5f28cf8`;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};

export default getWeather;
