import { observer } from "mobx-react-lite";
import { Box, Chip } from "@mui/material";
import marketTrendsStore from "@/store/marketTrends.ts";
import MovingIcon from "@mui/icons-material/Moving";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import ListIcon from "@mui/icons-material/List";

const MarketTrends = observer(() => {
  const handleTrendChange = (trend: string) => {
    marketTrendsStore.setSelectedTrend(trend);
  };

  const setColor = (trendType: string) => {
    return marketTrendsStore.selectedTrend === trendType
      ? "primary"
      : "default";
  };

  return (
    <Box>
      <Chip
        icon={<MovingIcon />}
        label="Gainers"
        color={setColor("gainers")}
        variant="outlined"
        onClick={() => handleTrendChange("gainers")}
      />
      <Chip
        icon={<TrendingDownIcon />}
        label="Losers"
        color={setColor("losers")}
        variant="outlined"
        onClick={() => handleTrendChange("losers")}
      />
      <Chip
        icon={<ListIcon />}
        label="All"
        color={setColor("all")}
        variant="outlined"
        onClick={() => handleTrendChange("all")}
      />
    </Box>
  );
});

export default MarketTrends;
