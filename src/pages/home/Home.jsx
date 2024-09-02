import styled from "styled-components";
import Header from "../../components/Header";
import HomeContent from "./components/HomeContent";
import WeatherList from "./components/WeatherList";
import { createContext, useEffect, useState } from "react";

export const HomeStateContext = createContext();
export const HomeDispatchContext = createContext();

const Home = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    console.log(datas);
  }, [datas]);

  return (
    <>
      <Header />
      <HomeStateContext.Provider value={datas}>
        <HomeDispatchContext.Provider value={setDatas}>
          <StyledHome>
            <HomeContent />
            <WeatherList />
          </StyledHome>
        </HomeDispatchContext.Provider>
      </HomeStateContext.Provider>
    </>
  );
};

export default Home;

const StyledHome = styled.div`
  width: 830px;
  margin: 0 auto;
`;
