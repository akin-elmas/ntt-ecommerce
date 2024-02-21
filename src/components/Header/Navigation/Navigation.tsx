import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MenuItem from "../MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuMoreItemButton from "../MenuMoreItemButton";

const Wrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 2.181875rem;
  padding: 1.5rem 0;
  justify-content: space-around;
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    display: none;
  }
`;

export default function Navigation() {
  const matches = useMediaQuery("(max-width:768px)");
  const menuItemForMobile = matches ? 8 : 12;

  return (
    <Wrapper>
      {Array.from({ length: menuItemForMobile }, (_, i) => (
        <MenuItem key={i} />
      ))}
      {matches && <MenuMoreItemButton />}
    </Wrapper>
  );
}
