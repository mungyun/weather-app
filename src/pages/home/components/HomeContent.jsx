import styled from "styled-components";
import searchImg from "../../../assets/icon/search.svg";

const HomeContent = () => {
  return (
    <StyledHomeContent>
      <Title>
        How is <br /> <span>The weather?</span>
      </Title>
      <SeachBar>
        <img src={searchImg} alt="돋보기" width="32" height="32" />
        <SearchBarInput placeholder="날씨가 궁금한 도시를 검색해주세요." />
      </SeachBar>
    </StyledHomeContent>
  );
};

export default HomeContent;

const StyledHomeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 41px;
`;

const Title = styled.h1`
  font-size: 72px;
  font-weight: 700;
  line-height: 120%;

  span {
    color: #4b5ec3;
  }
`;

const SeachBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 24px 36px;
  border: 1px solid #000;
  border-radius: 24px;
`;

const SearchBarInput = styled.input`
  width: 100%;
  height: 32px;
  border: none;
  &::placeholder {
    color: #5e5858;
    font-size: 16px;
  }
  outline: none;
`;
