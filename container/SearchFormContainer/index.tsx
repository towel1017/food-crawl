import React, { FC, useState } from "react";
import { SearchForm } from "../../components";

interface SearchFormContainerProps {
  handleChangeKeyword: (search: string) => void;
}

const SearchFormContainer: FC<SearchFormContainerProps> = ({ handleChangeKeyword }) => {
  const [search, setSearch] = useState("");
  const handleSearchInputChange = (e: any) => {
    setSearch(e.target.value);
  };
  const handleSearch = (e: any) => {
    if (e.key === "Enter") {
      console.log("[Crawl login start]");
      handleChangeKeyword(search);
    }
  };
  return <SearchForm search={search} handleSearchInputChange={handleSearchInputChange} handleSearch={handleSearch} />;
};

export default SearchFormContainer;
