import { type FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Box, Chip, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ChangePricePercentChip from "@/components/ui/ChangePricePercentChip";
import ChangePriceIndicator from "@/components/ui/ChangePriceIndicator";
import { watchingQuotesStore } from "@/store/watchingQuotes.ts";
import type { QuoteType } from "@/types/quote.ts";
import st from "./styles.module.css";

const QuoteItem: FC<{ quote: QuoteType }> = observer(({ quote }) => {
  useEffect(() => {
    watchingQuotesStore.loadWatchingList();
  }, []);

  const handleAddQuoteToWatchingList = (ticker: string) => {
    if (!watchingQuotesStore.isTickerInWatchingList(ticker)) {
      watchingQuotesStore.addQuoteToWatchingList({ ticker });
    }
  };

  const handleDeleteQuoteFromWatchingList = (ticker: string) => {
    watchingQuotesStore.deleteQuoteFromWatchingList({ ticker });
  };

  return (
    <Box className={st.quoteCard}>
      <Chip className={st.ticker} label={quote.ticker} />
      <Typography fontWeight={500} variant="body2">
        {quote.price}$
      </Typography>
      <ChangePriceIndicator quoteChange={Number(quote.change)} />
      <ChangePricePercentChip changePercent={quote.change_percent} />

      {watchingQuotesStore.isTickerInWatchingList(quote.ticker) ? (
        <RemoveCircleOutlineIcon
          className={st.icon}
          onClick={() => handleDeleteQuoteFromWatchingList(quote.ticker)}
        />
      ) : (
        <AddCircleOutlineOutlinedIcon
          className={st.icon}
          onClick={() => handleAddQuoteToWatchingList(quote.ticker)}
        />
      )}
    </Box>
  );
});

export default QuoteItem;
