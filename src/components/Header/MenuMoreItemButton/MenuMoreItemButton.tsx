/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Menu } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import MenuItem from "../MenuItem";

const CustomButton = styled(Button)`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  width: 68px;
  height: 28px;
  padding: 0;
  color: #6a6d70;
  &:hover {
    background-color: transparent;
  }
`;

const CustomMenu = styled(Menu)`
  .MuiMenu-paper {
    margin-top: 0.5rem;
  }
  & .MuiMenu-paper {
    background-color: #f4f5f6;
  }
`;

const MenuContent = styled("div")`
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  background-color: #f4f5f6;
`;

export default function MenuMoreItemButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CustomButton
        onClick={handleClick}
        endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}>
        More
      </CustomButton>

      <CustomMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuContent>
          {Array.from({ length: 4 }, (_, i) => (
            <MenuItem key={i} />
          ))}
        </MenuContent>
      </CustomMenu>
    </>
  );
}
