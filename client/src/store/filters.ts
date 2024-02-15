import { makeAutoObservable } from "mobx";

interface FiltersModel {
  selectedTrend: string;
  searchQuery: string;
  setSelectedTrend(trend: string): void;
  setSearchQuery(query: string): void;
}

class FiltersStore implements FiltersModel {
  selectedTrend = "all";
  searchQuery = "";

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedTrend(trend: string) {
    this.selectedTrend = trend;
  }

  setSearchQuery(query: string) {
    this.searchQuery = query;
  }
}

export const filtersStore = new FiltersStore();
