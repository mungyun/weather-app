import { useEffect } from "react";
import getWeather from "../../api/getWeather";
import styled from "styled-components";
import Header from "../../components/Header";
import HomeContent from "./components/HomeContent";

const Home = () => {
  const getData = async () => {
    const data = await getWeather();
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledHome>
      <Header />
      <HomeContent />
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
