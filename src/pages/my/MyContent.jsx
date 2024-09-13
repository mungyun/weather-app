import { useAtom } from "jotai";
import { mydatasAtom } from "../../state";
import WeatherListItem from "../home/components/WeatherListItem";
import styled from "styled-components";
import { toast } from "react-toastify";

const MyContent = () => {
  const [mydatas, setMyDatas] = useAtom(mydatasAtom);

  const handleDelete = (id) => {
    setMyDatas(mydatas.filter((data) => data.id !== id));
    toast.error(`삭제되었습니다.`);
  };
  return (
    <>
      <StyledMyContent>
        <MyTitle>관심있는 도시 목록</MyTitle>
        {mydatas.map((data) => (
          <li key={data.id}>
            <WeatherListItem data={data} onDelete={handleDelete} />
          </li>
        ))}
      </StyledMyContent>
    </>
  );
};

export default MyContent;

const StyledMyContent = styled.div`
  list-style-type: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 42px;
`;

const MyTitle = styled.span`
  font-size: 28px;
  font-weight: 700;
`;
