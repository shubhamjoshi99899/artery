import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { LoadingButton } from "@mui/lab";

type VariantProps = "outlined" | "contained" | "text" | undefined;
interface Props {
  variant: VariantProps;
  buttonText: string;
  onClick?: any;
  sx?: any;
  type: any;
  disabled?: boolean;
  loading?: boolean;
}

const PrimaryButtonComponent = styled(LoadingButton)({
  boxShadow: "none",
  fontSize: "0.75rem",
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100px",
  height: "32px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#090E82",
  letterSpacing: "0.5px",
  borderRadius: "8px",
  color: "#fff",
  zIndex: 1,

  "&:hover": {
    transition: "0.2s ease-in",
    backgroundColor: "#031637",
    color: "#f2f2f2",
    boxShadow: "none",
  },
  "&.Mui-disabled": {
    backgroundColor: "#041E49 !important",
    opacity: "54%",
    color: "#fff",
  },
});

const PrimaryButton: React.FC<Props> = ({
  variant,
  buttonText,
  onClick,
  type,
  disabled,
  loading,
  sx,
}) => {
  return (
    <PrimaryButtonComponent
      sx={sx}
      variant={variant}
      disabled={disabled}
      type={type}
      onClick={onClick}
      disableRipple
      loading={loading}
    >
      {buttonText}
    </PrimaryButtonComponent>
  );
};
export default PrimaryButton;
