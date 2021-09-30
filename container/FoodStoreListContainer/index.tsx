import React, { FC } from "react";
import { FoodStoreList } from "../../components";

interface FoodStoreItemProps {
  storeName: string;
  storeScore: string;
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
