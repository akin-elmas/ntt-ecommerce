import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

const FooterWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #0059bc;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const FooterContainer = styled(Box)`
  padding: 0 7.5rem;
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.md)} {
    padding: 0 2rem;
  }
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    padding: 0 1rem;
  }
`;

const CustomDivider = styled(Divider)`
  background-color: #d9d9d9;
  height: 2px;
  margin: 0;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterTop />
      </FooterContainer>

      <CustomDivider />
      <FooterContainer>
        <Box sx={{ width: "100%" }} color="white">
          <FooterBottom />
        </Box>
      </FooterContainer>
    </FooterWrapper>
  );
}
