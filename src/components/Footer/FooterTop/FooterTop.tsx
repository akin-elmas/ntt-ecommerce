import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import FooterEmailField from "../FooterEmailField";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const LeftSide = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 24px;
`;

const RightSide = styled(Box)`
  display: flex;
  flex-direction: row;
  align-content: flex-end;
  gap: 142px;
`;

const Logo = styled("img")`
  width: 170px;
  height: 42px;
`;

const Description = styled("p")`
  font-size: 16px;
  width: 407px;
  font-weight: 400;
  color: #ffffff;
  letter-spacing: 0em;
  text-align: left;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
  }
`;

const LinkTitle = styled(Typography)`
  font-size: 24px;
  font-weight: 500;
  text-align: left;
  color: #ffffff;
`;

const SubLink = styled(Typography)`
  font-size: 20px;
  letter-spacing: 0em;
  color: #ffffff;
  font-weight: 400;
  text-align: left;
`;

const TabletWrapper = styled(Box)`
  display: flex;
  gap: 142px;
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.md)} {
    display: none;
  }
`;

const MobileWrapper = styled(Box)`
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    display: none;
  }
`;

export default function FooterTop() {
  const logoPath = "../../../../src/static/logo-negative.svg";
  const isMobile = useMediaQuery("(max-width:480px)");

  return (
    <Stack
      sx={{ height: isMobile ? "214px" : "335px" }}
      alignItems="center"
      direction="row"
      justifyContent="space-between">
      <LeftSide>
        <Logo src={logoPath} alt="logo" />
        <Description>
          Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium aliquam
          neque.
        </Description>
        <FooterEmailField />
      </LeftSide>

      <RightSide>
        <MobileWrapper>
          <Stack
            direction="column"
            sx={{
              gap: "12px",
            }}>
            <LinkTitle>Title</LinkTitle>
            {Array.from({ length: 4 }).map((_, index) => (
              <SubLink key={index}>Subtitle</SubLink>
            ))}
          </Stack>
        </MobileWrapper>

        <TabletWrapper>
          <Stack
            direction="column"
            sx={{
              gap: "12px",
            }}>
            <LinkTitle>Title</LinkTitle>
            {Array.from({ length: 4 }).map((_, index) => (
              <SubLink key={index}>Subtitle</SubLink>
            ))}
          </Stack>
          <Stack
            direction="column"
            sx={{
              gap: "12px",
            }}>
            <LinkTitle>Title</LinkTitle>
            {Array.from({ length: 4 }).map((_, index) => (
              <SubLink key={index}>Subtitle</SubLink>
            ))}
          </Stack>
        </TabletWrapper>
      </RightSide>
    </Stack>
  );
}
