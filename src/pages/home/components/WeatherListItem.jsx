import styled from "styled-components";
import ToCelsius from "../../../components/ToCelsius";
import addImg from "../../../assets/icon/add.svg";
import cancelImg from "../../../assets/icon/cancel.svg";

const WeatherListItem = ({ data, onDelete }) => {
  const handleDelete = () => onDelete(data.id);

  return (
    <StyledWeatherListItem>
      <AddImg src={addImg} alt="추가" width="40" height="40" />
      <CancelImg
        onClick={handleDelete}
        src={cancelImg}
        alt="삭제"
        width="40"
        height="40"
      />
      <ItemLeft>
        <h2>{data.name}</h2>
        <span>{`${ToCelsius(data.main.temp)}°C`}</span>
      </ItemLeft>
      <ItemMiddle>
        <span>체감기온: {ToCelsius(data.main.feels_like)}</span>
        <span>최고기온: {ToCelsius(data.main.temp_max)}</span>
        <span>최저기온: {ToCelsius(data.main.temp_min)}</span>
        <span>습도: {data.main.humidity}%</span>
      </ItemMiddle>
    </StyledWeatherListItem>
  );
};

export default WeatherListItem;

const StyledWeatherListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 132px;

  background-color: #f6fcfb;
  width: 822px;
  margin: 0 5px;
  height: 415px;
  border-radius: 24px;
  box-shadow: 0 1px 1px;
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  cursor: pointer;
`;

const AddImg = styled(Img)`
  left: 18px;
  top: 18px;
`;

const CancelImg = styled(Img)`
  right: 18px;
  top: 18px;
`;

const ItemLeft = styled.div`
  font-weight: 700;
  h2 {
    margin: 0;
    font-size: 24px;
  }
  span {
    font-size: 42px;
  }
`;

const ItemMiddle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 28px;
  font-weight: bold;
`;
