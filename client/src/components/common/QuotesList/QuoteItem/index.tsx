import { type FC, useEffect, MouseEvent } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Chip, Typography } from "@mui/material";
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

  const handleAddQuoteToWatchingList = (e: MouseEvent, ticker: string) => {
    e.preventDefault();
    if (!watchingQuotesStore.isTickerInWatchingList(ticker)) {
      watchingQuotesStore.addQuoteToWatchingList({ ticker });
    }
  };

  const handleDeleteQuoteFromWatchingList = (e: MouseEvent, ticker: string) => {
    e.preventDefault();
    watchingQuotesStore.deleteQuoteFromWatchingList({ ticker });
  };

  return (
    <Link
      data-testid={`quote-item-${quote.ticker}`}
      className={st.quoteCard}
      to={`/quote/${quote.ticker}`}
    >
      <Chip className={st.ticker} label={quote.ticker} />
      <Typography fontWeight={500} variant="body2">
        {quote.price}$
      </Typography>
      <ChangePriceIndicator quoteChange={Number(quote.change)} />
      <ChangePricePercentChip changePercent={quote.change_percent} />
      {watchingQuotesStore.isTickerInWatchingList(quote.ticker) ? (
        <RemoveCircleOutlineIcon
          data-testid="add-remove-icon"
          className={st.icon}
          onClick={(e) => handleDeleteQuoteFromWatchingList(e, quote.ticker)}
        />
      ) : (
        <AddCircleOutlineOutlinedIcon
          data-testid="add-remove-icon"
          className={st.icon}
          onClick={(e) => handleAddQuoteToWatchingList(e, quote.ticker)}
        />
      )}
    </Link>
  );
});

export default QuoteItem;
