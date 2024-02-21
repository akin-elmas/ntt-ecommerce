import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import MenuBanner from "../../../static/img/banners/menu-banner.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f4f5f6;
  border-radius: 1px;
  padding: 30px 48px;
  gap: 96px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ImgArea = styled.img`
  width: 100%;
  height: 100%;
`;

export default function SubMenuItem() {
  return (
    <Wrapper>
      <Column>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "16.41px",
            color: "#000000",
          }}>
          Header
        </Typography>

        {Array.from({ length: 8 }, (_, i) => (
          <Typography
            key={i}
            sx={{
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "16.41px",
              color: "#000000",
            }}>
            Subheader
          </Typography>
        ))}
      </Column>

      <Column>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "16.41px",
            color: "#000000",
          }}>
          Header
        </Typography>

        {Array.from({ length: 8 }, (_, i) => (
          <Typography
            key={i}
            sx={{
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "16.41px",
              color: "#000000",
            }}>
            Subheader
          </Typography>
        ))}
      </Column>

      <ImgArea src={MenuBanner} alt="menu banner" />
    </Wrapper>
  );
}
