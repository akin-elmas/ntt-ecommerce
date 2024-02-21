import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";
import { Box } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const imgPath = "../../../../src/static/social-icons/";

const FooterText = styled(Typography)`
  font-size: 20px;
  font-weight: 400;
  text-align: left;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 12px;
  }
`;

const SocialMediaContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
  }
`;

const SocialMediaImg = styled("img")`
  width: 24px;
  height: 24px;
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 20px;
    height: 20px;
  }
`;

export default function FooterBottom() {
  const isMobile = useMediaQuery("(max-width:480px)");
  return (
    <Stack
      sx={{ height: isMobile ? "44px" : "64px" }}
      direction="row"
      alignItems="center"
      justifyContent="space-between">
      <FooterText>contact@nttdata.com</FooterText>
      <FooterText>+3 9876 765 444</FooterText>
      <SocialMediaContainer>
        <SocialMediaImg src={`${imgPath}instagram.svg`} alt="instagram logo" />
        <SocialMediaImg src={`${imgPath}facebook.svg`} alt="facebook logo" />
        <SocialMediaImg src={`${imgPath}linkedin.svg`} alt="linkedin logo" />
      </SocialMediaContainer>
    </Stack>
  );
}
