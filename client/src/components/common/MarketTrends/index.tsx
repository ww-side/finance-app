import { observer } from "mobx-react-lite";
import { Box, Chip } from "@mui/material";
import { filtersStore } from "@/store/filters.ts";
import MovingIcon from "@mui/icons-material/Moving";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import ListIcon from "@mui/icons-material/List";
import st from "./styles.module.css";

const MarketTrends = observer(() => {
  const handleTrendChange = (trend: string) => {
    filtersStore.setSelectedTrend(trend);
  };

  const setColor = (trendType: string) => {
    return filtersStore.selectedTrend === trendType ? "primary" : "default";
  };

  return (
    <Box className={st.markerTrends}>
      <Chip
        data-testid="gainers-label"
        icon={<MovingIcon />}
        label="Gainers"
        color={setColor("gainers")}
        variant="outlined"
        onClick={() => handleTrendChange("gainers")}
      />
      <Chip
        data-testid="losers-label"
        icon={<TrendingDownIcon />}
        label="Losers"
        color={setColor("losers")}
        variant="outlined"
        onClick={() => handleTrendChange("losers")}
      />
      <Chip
        data-testid="all-label"
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
