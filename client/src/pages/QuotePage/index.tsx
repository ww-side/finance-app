import { useParams } from "react-router-dom";
import QuoteInfo from "@/components/common/QuoteInfo";
import { useSocketQuotes } from "@/hooks/useSocketQuotes.ts";
import { Typography } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";

const QuotePage = () => {
  const params = useParams<{ ticker: string }>();
  const { quotes } = useSocketQuotes();

  const foundQuote = quotes.find(
    (q) => q.ticker === params.ticker?.toUpperCase()
  );

  return (
    <>
      {foundQuote ? (
        <QuoteInfo quote={foundQuote} />
      ) : (
        <>
          <SearchOffIcon fontSize="large" />
          <Typography variant="h6">
            We couldn't find any match for your search ticker {params.ticker}
          </Typography>
        </>
      )}
    </>
  );
};

export default QuotePage;
