import axios from "axios";

const getWeather = async (city, lat = null, lon = null) => {
  const API_KEY = `7a78457b7920aaa3309f665ba5f28cf8`;
  let url = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

  // 도시 이름이 제공된 경우
  if (city) {
    url += `&q=${city}`;
  }
  // 위도와 경도가 제공된 경우
  else if (lat && lon) {
    url += `&lat=${lat}&lon=${lon}`;
  }
  // 도시 이름도 위도/경도도 제공되지 않은 경우
  else {
    return { error: "도시명 또는 위치 정보를 제공해주세요." };
  }

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return { error: "날씨 정보를 가져오는 데 문제가 발생했습니다." };
  }
};

export default getWeather;
