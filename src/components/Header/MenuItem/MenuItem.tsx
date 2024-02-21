import HoverMenu from "material-ui-popup-state/HoverMenu";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";
import SubMenuItem from "../SubMenuItem";

import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const MenuItemButton = styled(Button)`
  font-weight: 500;
  font-size: 14px;
  width: 78px;
  height: 28px;
  padding: 0;
  text-transform: none;
  color: #6a6d70;
  position: relative;
  &:hover {
    &::after {
      position: absolute;
      content: "";
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #0059bc;
    }
  }
`;

export default function MenuItem() {
  const popupState = usePopupState({
    variant: "popover",
    popupId: "xxxxx",
  });
  return (
    <>
      <MenuItemButton {...bindHover(popupState)}>Menu Item</MenuItemButton>
      <HoverMenu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}>
        <SubMenuItem />
      </HoverMenu>
    </>
  );
}
