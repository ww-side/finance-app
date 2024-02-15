import { type FC } from "react";
import cx from "classnames";
import { Box, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import st from "./styles.module.css";

const ChangePricePercentChip: FC<{ changePercent: string }> = ({
  changePercent,
}) => {
  const numericChangePercent = Number(changePercent);

  const quoteChangePercentStyles = cx(
    {
      [st.changePercentPositive]: numericChangePercent > 0,
      [st.changePercentNegative]: numericChangePercent <= 0,
    },
    st.quoteChangePercent
  );

  const formattedChangePercent =
    numericChangePercent > 0 ? changePercent : changePercent.replace("-", "");

  return (
    <Box className={quoteChangePercentStyles}>
      {numericChangePercent > 0 ? (
        <ArrowUpwardIcon color="success" />
      ) : (
        <ArrowDownwardIcon color="error" />
      )}
      <Typography fontWeight={500} variant="body2">
        {formattedChangePercent}%
      </Typography>
    </Box>
  );
};

export default ChangePricePercentChip;
