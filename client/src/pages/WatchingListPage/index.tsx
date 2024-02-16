import { Box, Typography } from "@mui/material";
import QuotesList from "@/components/common/QuotesList";
import { useSocketQuotes } from "@/hooks/useSocketQuotes.ts";
import { watchingQuotesStore } from "@/store/watchingQuotes.ts";

const WatchingListPage = () => {
  const { quotes } = useSocketQuotes();
  const watchingList = watchingQuotesStore.watchingList;

  const filteredQuotes = quotes.filter((quote) =>
    watchingList.some((item) => item.ticker === quote.ticker)
  );

  return (
    <Box>
      <Typography variant="h5">Your watching list</Typography>
      <QuotesList quotes={filteredQuotes} />
    </Box>
  );
};

export default WatchingListPage;
