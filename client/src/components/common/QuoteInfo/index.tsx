import { type FC } from "react";
import { Box } from "@mui/material";
import QuoteDetails from "./QuoteDetails";
import QuoteSummary from "./QuoteSummary";
import type { QuoteDetailsType, QuoteType } from "@/types/quote.ts";
import st from "./styles.module.css";

const QuoteInfo: FC<{ quote: QuoteType }> = ({ quote }) => {
  const detailsOptions: QuoteDetailsType[] = [
    { title: "Dividend", value: quote.dividend },
    { title: "Yield", value: quote.yield },
    { title: "Exchange", value: quote.exchange },
  ];

  return (
    <Box
      data-testid={`quote-info-${quote.ticker}`}
      className={st.quoteInfoWrapper}
    >
      <Box className={st.quoteInfo}>
        <QuoteSummary
          ticker={quote.ticker}
          price={quote.price}
          change={quote.change}
          changePercent={quote.change_percent}
          lastTradeTime={quote.last_trade_time}
        />
        <QuoteDetails options={detailsOptions} />
      </Box>
    </Box>
  );
};

export default QuoteInfo;
