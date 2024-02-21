import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";

import { styled } from "@mui/material/styles";

export default function SearchBoxSelect() {
  const SelectWrapper = styled(Select)`
    height: 100%;
    width: 8.25rem;
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    min-width: 132px;
    color: #32363a;
    background-color: #f4f5f6;
    ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
      display: none;
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: transparent;
    }

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: #0059bc;
    }

    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: #0059bc;
    }

    .MuiSvgIcon-root {
      color: #000000;
    }

    &:hover {
      border-color: #0059bc;
    }
  `;

  return (
    <SelectWrapper
      displayEmpty
      variant="outlined"
      MenuProps={{
        sx: {
          "& .MuiMenu-paper": {
            backgroundColor: "#00254f",
            padding: "12px",
          },
          "& .MuiMenuItem-root": {
            fontFamily: "Roboto",
            fontSize: "14px",
            fontWeight: 400,
            color: "#ffff",
            backgroundColor: "#00254f",
            padding: "4px 8px",
            borderRadius: "2px",
            "&:hover": {
              backgroundColor: "#0059bc",
            },
          },
          "& .Mui-selected": {
            backgroundColor: "#e6eef8",
            color: "#ffff",
          },
          "& .MuiList-root": {
            padding: 0,
          },
        },
      }}>
      <MenuItem disabled>Categories</MenuItem>
      <MenuItem value={2}>Category Name</MenuItem>
      <MenuItem value={3}>Category Name</MenuItem>
      <MenuItem value={4}>Category Name</MenuItem>
    </SelectWrapper>
  );
}
