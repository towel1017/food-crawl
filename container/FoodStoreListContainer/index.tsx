import React, { FC } from "react";
import { FoodStoreList } from "../../components";

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

const FoodStoreListContainer: FC<FoodStoreListProps> = ({ foodStoreList }) => {
  return <FoodStoreList foodStoreList={foodStoreList} />;
};

export default FoodStoreListContainer;
