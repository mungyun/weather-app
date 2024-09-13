import styled from "styled-components";
import searchImg from "../../../assets/icon/search.svg";
import getWeather from "../../../api/getWeather";
import { useState, useEffect, useContext, useCallback } from "react";
import { HomeDispatchContext } from "../Home";

const HomeContent = () => {
  const [city, setCity] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const setDatas = useContext(HomeDispatchContext);

  const getData = useCallback(
    async (city) => {
      if (!city) return;

      const data = await getWeather(city);

      if (data.error) {
        setError(data.error);
      } else {
        setError("");
        setDatas((prevDatas) => [data, ...prevDatas]);
      }
    },
    [setDatas]
  );

  useEffect(() => {
    getData(city);
  }, [city, getData]);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setCity(comment);
      setComment("");
    }
  };

  const handleFocus = () => {
    setError("");
  };

  return (
    <StyledHomeContent>
      <Title>
        How is <br /> <span>The weather?</span>
      </Title>
      <SeachBar>
        <img src={searchImg} alt="돋보기" width="40" height="40" />
        <SearchBarInput
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          value={comment}
          type="text"
          placeholder="날씨가 궁금한 도시를 검색해주세요."
        />
      </SeachBar>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledHomeContent>
  );
};

export default HomeContent;

const StyledHomeContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 72px;
  font-weight: 700;
  line-height: 120%;
  margin: 0;

  span {
    color: #4b5ec3;
  }
`;

const SeachBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  border: 1px solid #000;
  border-radius: 24px;
  box-shadow: 0 5px 5px -5px;
  margin-top: 41px;
`;

const SearchBarInput = styled.input`
  width: 100%;
  height: 32px;
  border: none;
  font-size: 18px;
  &::placeholder {
    color: #5e5858;
    padding: 0;
  }
  outline: none;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 16px;
  margin: 10px 0 0 10px;
`;
