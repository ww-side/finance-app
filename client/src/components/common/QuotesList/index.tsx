import { observer } from "mobx-react-lite";
import { type FC, useState } from "react";
import { v4 as uuid } from "uuid";
import { Box, Typography } from "@mui/material";
import MarketTrends from "@/components/common/MarketTrends";
import QuoteCard from "@/components/common/QuoteCard";
import SearchBar from "@/components/ui/SearchBar";
import { useSocketQuotes } from "@/hooks/useSocketQuotes.ts";
import marketTrendsStore from "@/store/marketTrends.ts";
import st from "./styles.module.css";

const QuotesList: FC = observer(() => {
  const { quotes } = useSocketQuotes();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { selectedTrend } = marketTrendsStore;

  const filteredAndSortedQuotes = quotes
    .filter((quote) =>
      quote.ticker.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((quote) => {
      if (marketTrendsStore.selectedTrend === "gainers") {
        return Number(quote.change) > 0;
      }

      if (marketTrendsStore.selectedTrend === "losers") {
        return Number(quote.change) < 0;
      }

      return true;
    })
    .sort((a, b) => a.ticker.localeCompare(b.ticker));

  return (
    <>
      <SearchBar onSearchChange={(query) => setSearchQuery(query)} />
      <MarketTrends />
      <Box className={st.listWrapper}>
        {filteredAndSortedQuotes.length === 0 ? (
          <Typography variant="h6">
            Hold on, the "{selectedTrend}" list is empty for now, but will be
            updated soon and will definitely be replenished
          </Typography>
        ) : (
          filteredAndSortedQuotes.map((quote) => (
            <QuoteCard key={uuid()} quote={quote} />
          ))
        )}
      </Box>
    </>
  );
});

export default QuotesList;
