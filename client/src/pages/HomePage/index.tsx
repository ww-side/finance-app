import { observer } from "mobx-react-lite";
import { Blocks } from "react-loader-spinner";
import { Box, Typography } from "@mui/material";
import QuotesList from "@/components/common/QuotesList";
import MarketTrends from "@/components/common/MarketTrends";
import SearchBar from "@/components/ui/SearchBar";
import { useSocketQuotes } from "@/hooks/useSocketQuotes.ts";
import { filtersStore } from "@/store/filters.ts";

const HomePage = observer(() => {
  const { quotes, isLoading } = useSocketQuotes();
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
      {isLoading ? (
        <>
          <Typography variant="body2">Wait a little while</Typography>
          <Blocks
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            visible={true}
          />
        </>
      ) : (
        <QuotesList quotes={filteredAndSortedQuotes} />
      )}
    </Box>
  );
});

export default HomePage;
