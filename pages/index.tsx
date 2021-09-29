import React, { useEffect } from "react";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: "secret_XW6AuSx9ql1KK6kW4JhniDGtZkn2R5gv2sm9GuEHv66" });

const databaseId = "255cfc3432674551bd05b742d4ec6b6b";
const blockid = "255cfc3432674551bd05b742d4ec6b6b";

async function addItem(text) {
  try {
    const response = await notion.blocks.children.list({
      block_id: blockid,
    });
    console.log(response);
    console.log("Success! Entry added.");
  } catch (error) {
    console.error("에러아님");
  }
}

addItem("Yurts in Big Su");

const Home: React.FC = () => {
  return (
    <>
      <div>회사 주변 500m 맛집 크롤링 + 노션</div>
    </>
  );
};

export default Home;
