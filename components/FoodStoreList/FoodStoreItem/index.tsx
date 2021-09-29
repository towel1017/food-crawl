import React, { FC } from "react";
import * as S from "./styled";

interface FoodStoreItemProps {
  storeName: string;
  storeScore: number;
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
        <button>Notion에 적용</button>
        <span>{storeScore}점</span>
      </S.StoreItemInfoWrapper2>
    </S.FoodStoreItemWrapper>
  );
};

export default FoodStoreItem;
