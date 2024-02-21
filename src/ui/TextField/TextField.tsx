import { ReactNode } from "react";
import MuiTextField, { TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(MuiTextField)`
  input {
    padding: 0;
  }
  ,
  & input::placeholder {
    font-family: Roboto;
    font-size: 1rem;
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border: none;
    }
    &:hover fieldset {
      border: none;
    }
    &.Mui-focused fieldset {
      border: none;
    }
  }
`;

type CustomTextFieldProps = TextFieldProps & {
  children?: ReactNode;
};

export default function TextField(props: CustomTextFieldProps) {
  return <CustomTextField {...props} />;
}
