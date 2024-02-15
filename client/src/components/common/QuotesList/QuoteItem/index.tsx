import { type FC } from "react";
import { Box, Chip, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ChangePricePercentChip from "@/components/ui/ChangePricePercentChip";
import ChangePriceIndicator from "@/components/ui/ChangePriceIndicator";
import type { QuoteType } from "@/types/quote.ts";
import st from "./styles.module.css";

const QuoteItem: FC<{ quote: QuoteType }> = ({ quote }) => {
  return (
    <Box className={st.quoteCard}>
      <Chip className={st.ticker} label={quote.ticker} />
      <Typography fontWeight={500} variant="body2">
        {quote.price}$
      </Typography>
      <ChangePriceIndicator quoteChange={Number(quote.change)} />
      <ChangePricePercentChip changePercent={quote.change_percent} />
      <AddCircleOutlineOutlinedIcon />
    </Box>
  );
};

export default QuoteItem;
