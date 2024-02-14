import { makeAutoObservable } from "mobx";

interface MarketTrendsModel {
  selectedTrend: string;
  setSelectedTrend(trend: string): void;
}

class MarketTrendsStore implements MarketTrendsModel {
  selectedTrend = "all";

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedTrend(trend: string) {
    this.selectedTrend = trend;
  }
}

const marketTrendsStore = new MarketTrendsStore();
export default marketTrendsStore;
