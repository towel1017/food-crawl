import React, { FC } from "react";
import { addItemInNotion } from "../../lib/addItemInNotion";
import FoodStoreItem from "./FoodStoreItem";
import * as S from "./styled";

interface FoodStoreItemProps {
  storeName: string;
  storeScore: string;
  storeAddress: string;
  storeType: string;
  handleAddNotion: (storeInfo: any) => void;
}

interface FoodStoreListProps {
  foodStoreList: FoodStoreItemProps[] | string;
}

const FoodStoreList: FC<FoodStoreListProps> = ({ foodStoreList }) => {
  console.log(foodStoreList);
  return (
    <S.FoodStoreListWrapper>
      {typeof foodStoreList === "string"
        ? foodStoreList
        : foodStoreList.map((store, i) => (
            <FoodStoreItem
              key={i}
              handleAddNotion={async () => {
                await addItemInNotion(store);
                alert("등록이 완료되었습니다!");
              }}
              storeName={store.storeName}
              storeAddress={store.storeAddress}
              storeScore={store.storeScore}
              storeType={store.storeType}
            />
          ))}
    </S.FoodStoreListWrapper>
  );
};

export default FoodStoreList;
