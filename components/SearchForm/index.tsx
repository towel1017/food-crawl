import React, { FC } from "react";
import * as S from "./styled";

interface SearchFormProps {
  search: string;
  handleSearchInputChange: (e: any) => void;
  handleSearch: (e: any) => void;
}

const SearchForm: FC<SearchFormProps> = ({ search, handleSearchInputChange, handleSearch }) => {
  return (
    <S.SearchFormWrapper>
      <input type="text" placeholder="검색하고 싶은 곳을 적고 Enter를 눌러주세요!" value={search} onChange={handleSearchInputChange} onKeyPress={handleSearch} />
    </S.SearchFormWrapper>
  );
};

export default SearchForm;
