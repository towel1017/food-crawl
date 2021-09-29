import React from "react";
import { Client } from "@notionhq/client";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { foodStoreState, keywordState } from "../recoil/atom";
import { FoodStoreListContainer, SearchFormContainer } from "../container";
import styled from "styled-components";

const notion = new Client({ auth: "secret_XW6AuSx9ql1KK6kW4JhniDGtZkn2R5gv2sm9GuEHv66" });

const databaseId = "255cfc3432674551bd05b742d4ec6b6b";
const blockid = "255cfc3432674551bd05b742d4ec6b6b";

const addItem = async () => {
  const response = await notion.pages.create({
    parent: {
      database_id: databaseId,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: "Tuscan Kale",
            },
          },
        ],
      },
      star: {
        number: 5,
      },
      address: {
        rich_text: [
          {
            text: {
              content: "서울특별시 관악구 관악로10길 73",
            },
          },
        ],
      },
      type: {
        select: {
          name: "한식",
        },
      },
    },
  });
  console.log(response);
};

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
