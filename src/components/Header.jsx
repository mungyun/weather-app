import styled from "styled-components";
import homeImg from "../assets/icon/home.svg";
import myImg from "../assets/icon/my.svg";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderImgs>
        <img src={homeImg} alt="홈페이지" width="60" height="60" />
        <img src={myImg} alt="마이페이지" width="60" height="60" />
      </HeaderImgs>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 35px 38px;

  display: flex;
  justify-content: flex-end;
`;

const HeaderImgs = styled.div`
  display: flex;
  gap: 18px;

  img {
    cursor: pointer;
  }
`;
