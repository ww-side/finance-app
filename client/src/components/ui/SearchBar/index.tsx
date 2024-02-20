import { ChangeEvent, type FC } from "react";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import st from "./styles.module.css";

interface SearchBarProps {
  onSearchChange: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearchChange }) => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <Box className={st.searchBarWrapper}>
      <SearchIcon data-testid="search-icon" className={st.searchIcon} />
      <TextField
        label="Search tickers"
        variant="standard"
        onChange={handleSearchChange}
      />
    </Box>
  );
};

export default SearchBar;
