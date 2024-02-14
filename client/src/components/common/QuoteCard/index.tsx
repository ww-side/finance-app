import { type FC } from "react";
import cx from "classnames";
import { Box, Chip, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import type { QuoteType } from "@/types/quote.ts";
import st from "./styles.module.css";

const QuoteCard: FC<{ quote: QuoteType }> = ({ quote }) => {
  const changeColorStyles = cx({
    [st.changePositive]: Number(quote.change) > 0,
    [st.changeNegative]: Number(quote.change) <= 0,
  });

  const quoteChangePercentStyles = cx(
    {
      [st.changePercentPositive]: Number(quote.change) > 0,
      [st.changePercentNegative]: Number(quote.change) <= 0,
    },
    st.quoteChangePercent
  );

  const changePercent =
    Number(quote.change_percent) > 0
      ? quote.change_percent
      : quote.change_percent.replace("-", "");

  return (
    <Box className={st.quoteCard}>
      <Chip className={st.ticker} label={quote.ticker} />
      <Typography fontWeight={500} variant="body2">
        {quote.price}$
      </Typography>
      <Typography
        className={changeColorStyles}
        fontWeight={500}
        align="left"
        variant="body2"
      >
        {quote.change}$
      </Typography>
      <Box className={quoteChangePercentStyles}>
        {Number(quote.change_percent) > 0 ? (
          <ArrowUpwardIcon color="success" />
        ) : (
          <ArrowDownwardIcon color="error" />
        )}
        <Typography fontWeight={500} variant="body2">
          {changePercent}%
        </Typography>
      </Box>
      <AddCircleOutlineOutlinedIcon />
    </Box>
  );
};

export default QuoteCard;
