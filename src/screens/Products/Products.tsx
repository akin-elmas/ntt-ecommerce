import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Button, Stack } from "@mui/material";
import { Typography } from "@material-ui/core";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  fetchProducts,
  updateProductFavoriteStatus,
} from "../../features/productSlice";

const Container = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 3rem;
  padding-bottom: 6rem;
`;

const Title = styled(Typography)`
  font-size: 2rem;
  font-weight: 500;
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.md)} {
    font-size: 1.5rem;
  }
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    font-size: 1rem;
  }
`;

const SwitchButton = styled(Button)`
  text-transform: none;
  height: 27px;
  font-size: 1rem;
  background-color: #0059bc;
  color: #fff;
  &:hover {
    background-color: #0059bc;
  }
`;

const ProductsWrapper = styled(Stack)`
  display: flex;
  padding: 0 0.75rem;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.75rem;
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.md)} {
    gap: 1rem;
    padding: 0;
  }
`;

export default function Products() {
  const [showJustFav, setShowJustFav] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { product, favProductsCount, productShowNumber } = useAppSelector(
    (state) => state.product
  );
  const getVisibleProducts = () => {
    const visibleProducts = product;

    if (showJustFav) {
      return visibleProducts.filter((product) => product.favStatus);
    }

    if (productShowNumber) {
      return visibleProducts.slice(0, productShowNumber);
    }

    return visibleProducts;
  };

  const visibleProducts = getVisibleProducts();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container>
      <Stack direction="row" justifyContent="space-between">
        <Title>Content title goes here</Title>

        <Stack direction="row" alignItems="center" sx={{ gap: "12px" }}>
          <Stack direction="row" alignItems="center" sx={{ gap: "8px" }}>
            {favProductsCount ? (
              <FavoriteIcon width="24" height="24" color="error" />
            ) : (
              <FavoriteBorderIcon width="24" height="24" />
            )}
            <Typography>{`${favProductsCount} ÜRÜN`}</Typography>
          </Stack>

          <SwitchButton onClick={() => setShowJustFav(!showJustFav)}>
            {showJustFav ? "Beğenilenler" : "Tüm Ürünler"}
          </SwitchButton>
        </Stack>
      </Stack>

      <ProductsWrapper>
        {visibleProducts.map(
          ({
            id,
            name,
            description,
            imageUrl,
            price,
            shippingMethod,
            favStatus,
          }) => {
            return (
              <ProductCard
                key={id}
                name={name}
                description={description}
                imageUrl={imageUrl}
                price={price}
                shippingMethod={shippingMethod}
                favStatus={favStatus}
                onClick={() => {
                  dispatch(updateProductFavoriteStatus(id));
                }}
              />
            );
          }
        )}
      </ProductsWrapper>
    </Container>
  );
}
