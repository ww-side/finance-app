import QuotesList from "@/components/common/QuotesList";
import { Box } from "@mui/material";
import { filtersStore } from "@/store/filters.ts";
import { useSocketQuotes } from "@/hooks/useSocketQuotes.ts";
import { observer } from "mobx-react-lite";
import SearchBar from "@/components/ui/SearchBar";
import MarketTrends from "@/components/common/MarketTrends";

const HomePage = observer(() => {
  const { quotes } = useSocketQuotes();
  const { selectedTrend, searchQuery } = filtersStore;

  const filteredAndSortedQuotes = quotes
    .filter((quote) =>
      quote.ticker.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((quote) => {
      if (selectedTrend === "gainers") {
        return Number(quote.change) > 0;
      }

      if (selectedTrend === "losers") {
        return Number(quote.change) < 0;
      }

      return true;
    })
    .sort((a, b) => a.ticker.localeCompare(b.ticker));

  return (
    <Box>
      <SearchBar
        onSearchChange={(query) => filtersStore.setSearchQuery(query)}
      />
      <MarketTrends />
      <QuotesList quotes={filteredAndSortedQuotes} />
    </Box>
  );
});

export default HomePage;
