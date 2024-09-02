import styled from "styled-components";
import homeImg from "../assets/icon/home.svg";
import myImg from "../assets/icon/my.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();

  return (
    <StyledHeader>
      <HeaderImgs>
        <img
          src={homeImg}
          alt="홈페이지"
          width="60"
          height="60"
          onClick={() => nav("/")}
        />
        <img
          src={myImg}
          alt="마이페이지"
          width="60"
          height="60"
          onClick={() => nav("/my")}
        />
      </HeaderImgs>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  max-width: 1200px;
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
