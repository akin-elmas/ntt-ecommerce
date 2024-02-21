import Box from "@material-ui/core/Box";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "../../../ui/TextField";
import SearchBoxSelect from "../SearchBoxSelect";

const SearchTextField = styled(TextField)`
  width: 100%;
  & input::placeholder {
    font-weight: 500;
    padding-left: 0.75rem;
    color: #74777a;
  }
`;

const SelectWrapper = styled(Box)`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${({ theme }) => `1px solid ${theme.palette.grey[600]}`};
  border-radius: 4px;
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    border-radius: 4px 0px 0px 4px;
    border-right: none;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  gap: 0.75rem;
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    gap: 0;
  }
`;

const SearchButton = styled(Box)`
  height: 100%;
  width: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: #0059bc;
  border-radius: 4px;
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    border-radius: 0 4px 4px 0px;
  }
`;

export default function SearchBox() {
  return (
    <Wrapper>
      <SelectWrapper>
        <SearchTextField placeholder="Search..." />
        <SearchBoxSelect />
      </SelectWrapper>

      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </Wrapper>
  );
}
