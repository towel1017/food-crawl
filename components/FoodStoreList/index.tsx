import React, { FC } from "react";
import FoodStoreItem from "./FoodStoreItem";
import * as S from "./styled";

interface FoodStoreItemProps {
  storeName: string;
  storeScore: number;
  storeAddress: string;
  storeType: string;
  handleAddNotion: () => void;
}

interface FoodStoreListProps {
  foodStoreList: FoodStoreItemProps[] | string;
}

const FoodStoreList: FC<FoodStoreListProps> = ({ foodStoreList }) => {
  return <S.FoodStoreListWrapper>{typeof foodStoreList === "string" ? foodStoreList : foodStoreList.map((store, i) => <FoodStoreItem key={i} {...store} />)}</S.FoodStoreListWrapper>;
};

export default FoodStoreList;
