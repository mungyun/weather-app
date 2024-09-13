import Header from "../../components/Header";
import MyContent from "./MyContent";
import styled from "styled-components";

const My = () => {
  return (
    <>
      <Header />
      <StyledMy>
        <MyContent />
      </StyledMy>
    </>
  );
};

export default My;

const StyledMy = styled.div`
  width: 830px;
  margin: 0 auto;
`;
