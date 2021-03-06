import React, { FC } from "react";
import * as S from "./styled";

interface FoodStoreItemProps {
  storeName: string;
  storeScore: string;
  storeAddress: string;
  storeType: string;
  handleAddNotion: () => void;
}

const FoodStoreItem: FC<FoodStoreItemProps> = ({ storeName, storeScore, storeType, storeAddress, handleAddNotion }) => {
  return (
    <S.FoodStoreItemWrapper>
      <S.StoreItemInfoWrapper>
        <S.StoreNameText>{storeName}</S.StoreNameText>
        <S.StoreTypeText>{storeType}</S.StoreTypeText>
        <S.StoreAddressText>{storeAddress}</S.StoreAddressText>
      </S.StoreItemInfoWrapper>
      <S.StoreItemInfoWrapper2>
        <button onClick={handleAddNotion}>Notion에 적용</button>
        <span>{storeScore}</span>
      </S.StoreItemInfoWrapper2>
    </S.FoodStoreItemWrapper>
  );
};

export default FoodStoreItem;
