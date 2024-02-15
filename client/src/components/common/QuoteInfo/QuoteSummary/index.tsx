import { type FC } from "react";
import dateFormat from "dateformat";
import { Box, Typography } from "@mui/material";
import ChangePricePercentChip from "@/components/ui/ChangePricePercentChip";
import ChangePriceIndicator from "@/components/ui/ChangePriceIndicator";
import st from "./styles.module.css";

const QuoteSummary: FC<{
  ticker: string;
  price: string;
  change: string;
  changePercent: string;
  lastTradeTime: Date;
}> = ({ ticker, price, change, changePercent, lastTradeTime }) => {
  return (
    <Box>
      <Typography variant="subtitle1">{ticker}</Typography>
      <hr />
      <Box className={st.mainInfo}>
        <Typography variant="h5">{price}$</Typography>
        <ChangePricePercentChip changePercent={changePercent} />
        <ChangePriceIndicator quoteChange={Number(change)} />
      </Box>
      <Box>
        <Typography className={st.lastTradeDate} variant="body2">
          Last trade time:{" "}
          {dateFormat(lastTradeTime, "ddd mmm dd yyyy HH:MM:ss")}
        </Typography>
      </Box>
    </Box>
  );
};

export default QuoteSummary;
