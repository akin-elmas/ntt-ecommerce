import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Typography } from "@mui/material";

const Container = styled(Box)`
  width: 264px;
  height: 375px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 10px;
  border: 1px solid #E6E6E6;
  border-radius: 4px
  justify-content: space-between;
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.md)} {
    width:  164px;
    height:  276px;
  }
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    width:  428px;
    height:  381px;
    }
`;

const ImgArea = styled(Box)`
  position: relative;
  border-radius: 3px, 3px, 0px, 0px;
  height: 179px;
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.md)} {
    height: 111px;
    border-radius: 0;
  }
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    height: 208px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const IconWrapper = styled(Box)`
  position: absolute;
  background-color: #ffffff;
  top: 11px;
  right: 11px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    width: 14px;
  }
`;

const ContentArea = styled(Box)`
  display: flex;
  flex-direction: column;
  padding-top: 0.75rem;
  gap: 0.5rem;
`;

const Title = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
`;

const PriceBox = styled(Box)`
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  background-color: #e6eef8;
  font-size: 14px;
  font-weight: 700;
  padding: 0 8px;
`;

const Subtitle = styled(Typography)`
  font-size: 12px;
  font-weight: 500;
`;

const Description = styled(Typography)`
  font-size: 12px;
  font-weight: 400;
`;

const ShippingMethod = styled(Typography)`
  font-size: 10px;
  font-weight: 400;
`;

export interface ProductCardProps {
  favStatus: unknown;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  shippingMethod: string;
  onClick: (favStatus: boolean) => void;
}

export default function ProductCard({
  imageUrl,
  favStatus,
  onClick,
  name,
  description,
  price,
  shippingMethod,
}: ProductCardProps) {
  const handleCardClick = () => {
    window.open("https://react.dev/", "_blank");
  };

  const handleFavClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    onClick(!favStatus);
  };

  return (
    <Container onClick={handleCardClick}>
      <ImgArea>
        <img src={imageUrl} alt="product" />
        <IconWrapper onClick={handleFavClick}>
          {favStatus ? (
            <FavoriteIcon fontSize="small" color="error" />
          ) : (
            <FavoriteBorderIcon fontSize="small" color="disabled" />
          )}
        </IconWrapper>
      </ImgArea>
      <ContentArea>
        <Title>{name}</Title>
        <PriceBox>{price}</PriceBox>
        <Subtitle>Description</Subtitle>
        <Description>{description}</Description>
        <ShippingMethod>{shippingMethod}</ShippingMethod>
      </ContentArea>
    </Container>
  );
}
