import { ReactNode } from "react";
import { Box, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0 7.5rem;
  background-color: ${({ theme }) => theme.palette.background.default};
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.md)} {
    padding: 0 2rem;
  }
  ${({ theme }) => theme.breakpoints.down(theme.breakpoints.values.sm)} {
    padding: 0 1rem;
  }
,`;

type GlobalContainerProps = BoxProps & {
  children: ReactNode;
};

export default function GlobalContainer({ children }: GlobalContainerProps) {
  return <Container>{children}</Container>;
}
