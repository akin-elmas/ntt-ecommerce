import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const Container = styled("div")`
  height: 40px;
`;

const EmailField = styled("input")`
  width: 306px;
  height: 38px;
  background-color: #ffffff;
  color: #000;
  padding-left: 10px;
  font-size: 1rem;
  border: none;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 243px;
  }
`;

const SignUpButton = styled(Button)`
  width: 101px;
  height: 38px;
  background-color: #00254f;
  border-radius: 0;
  font-size: 1rem;
  font-weight: 400;
  text-transform: none;
  color: #ffffff;
  padding-top: 0;
`;

export default function FooterEmailField() {
  return (
    <Container>
      <EmailField placeholder="Email" />
      <SignUpButton>Sign Up</SignUpButton>
    </Container>
  );
}
