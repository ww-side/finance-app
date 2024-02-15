import { type FC } from "react";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import QuoteDetailsTable from "./QuoteDetailsTable";
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
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">
          {quote.ticker.toUpperCase()} • {quote.exchange}
        </Typography>
      </Breadcrumbs>
      <Box className={st.quoteInfo}>
        <QuoteSummary
          ticker={quote.ticker}
          price={quote.price}
          change={quote.change}
          changePercent={quote.change_percent}
          lastTradeTime={quote.last_trade_time}
        />
        <QuoteDetailsTable options={detailsOptions} />
      </Box>
    </>
  );
};

export default QuoteInfo;
