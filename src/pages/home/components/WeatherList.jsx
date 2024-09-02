import styled from "styled-components";
import { useContext } from "react";
import { HomeDispatchContext, HomeStateContext } from "../Home";
import WeatherListItem from "./WeatherListItem";
import BookmarkImg from "../../../assets/icon/bookmark.svg";

const WeatherList = () => {
  const datas = useContext(HomeStateContext);
  const setDatas = useContext(HomeDispatchContext);

  const handleDelete = (id) => {
    setDatas(datas.filter((data) => data.id !== id));
  };

  return (
    <>
      {datas.length !== 0 ? (
        <StyledWeatherList>
          {datas.map((data) => (
            <li key={data.id}>
              <WeatherListItem data={data} onDelete={handleDelete} />
            </li>
          ))}
        </StyledWeatherList>
      ) : (
        <Empty>
          <img src={BookmarkImg} alt="북마크" width="60" height="60" />
          <p>도시를 추가해주세요! 😎</p>
        </Empty>
      )}
    </>
  );
};

export default WeatherList;

const StyledWeatherList = styled.ul`
  display: flex;
  gap: 40px;
  padding: 0;
  margin-top: 65px;
  list-style-type: none;
  height: 500px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  margin: 65px 0;
  p {
    font-size: 32px;
    margin: 0;
  }
`;
