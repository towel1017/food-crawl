import React from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { foodStoreState, keywordState } from "../recoil/atom";
import { FoodStoreListContainer, SearchFormContainer } from "../container";
import styled from "styled-components";

const Home: React.FC = () => {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const HandleGetFoodStoreLists = (keyword: string) => {
    const foodStoreList = useRecoilValueLoadable(foodStoreState(keyword));
    switch (foodStoreList.state) {
      case "hasError":
        return "Error";
      case "loading":
        return "대기중...";
      case "hasValue":
        console.log(foodStoreList);
        return foodStoreList.contents;
    }
  };

  return (
    <>
      <TitleText>회사 주변 500m 맛집 크롤링(feat. Notion)</TitleText>
      <SearchFormContainer handleChangeKeyword={setKeyword} />
      <FoodStoreListContainer foodStoreList={HandleGetFoodStoreLists(keyword)} />
    </>
  );
};

const TitleText = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;

  margin: 25px;
`;

export default Home;
