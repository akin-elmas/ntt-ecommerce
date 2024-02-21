import {
  AppBar as MuiBar,
  Toolbar as MuiToolbar,
  Box,
  IconButton,
} from "@material-ui/core";
import logo from "../../static/logo.svg";
import SearchBox from "./SearchBox";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import MobileMenu from "../MobileMenu";
import { Divider, Stack } from "@mui/material";
import GlobalContainer from "../GlobalContainer";
import Navigation from "./Navigation";

const Container = styled(Box)`
    width: 100%;
    gap: 1.5rem;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 2rem 0;
    ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
      flex-direction: column;
      padding: 1.5rem 0;
    }
,`;

const Logo = styled("img")`
  height: 1.5rem;
  cursor: pointer;
`;

const ButtonIcon = styled(IconButton)`
  display: none;
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    display: block;
  }
`;

const LogoWrapper = styled(Box)`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    justify-content: space-between;
    width: 100%;
  }
`;

const AppBar = styled(MuiBar)`
  background-color: #fff;
  box-shadow: none;
`;

const Toolbar = styled(MuiToolbar)`
  padding: 0;
`;

const CustomDivider = styled(Divider)`
  background-color: #89919a;
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    display: none;
  }
`;

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <AppBar position="sticky" color="transparent">
      <GlobalContainer>
        <Toolbar>
          <Stack
            direction="column"
            sx={{
              width: "100%",
            }}>
            <Container>
              <LogoWrapper>
                <Logo src={logo} alt="logo" />
                <ButtonIcon onClick={() => setOpen(true)}>
                  <MenuIcon />
                </ButtonIcon>
              </LogoWrapper>

              <SearchBox />

              <MobileMenu open={open} setOpen={setOpen} />
            </Container>
          </Stack>
        </Toolbar>
      </GlobalContainer>

      <CustomDivider />

      <GlobalContainer>
        <Navigation />
      </GlobalContainer>
    </AppBar>
  );
}
