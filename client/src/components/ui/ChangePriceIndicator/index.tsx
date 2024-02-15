import { type FC } from "react";
import cx from "classnames";
import { Typography } from "@mui/material";
import st from "./styles.module.css";

const ChangePriceIndicator: FC<{ quoteChange: number }> = ({ quoteChange }) => {
  const changeColorStyles = cx({
    [st.changePositive]: quoteChange > 0,
    [st.changeNegative]: quoteChange <= 0,
  });

  return (
    <Typography
      className={changeColorStyles}
      fontWeight={500}
      align="left"
      variant="body2"
    >
      {quoteChange}$
    </Typography>
  );
};

export default ChangePriceIndicator;
