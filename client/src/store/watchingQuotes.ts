import { makeAutoObservable } from "mobx";

type WatchingListType = {
  ticker: string;
};

interface WatchingQuotesModel {
  watchingList: WatchingListType[];
  loadWatchingList(): void;
  setWatchingList(list: WatchingListType[]): void;
  addQuoteToWatchingList(quote: WatchingListType): void;
  deleteQuoteFromWatchingList(quote: WatchingListType): void;
  saveWatchingList(): void;
  isTickerInWatchingList(ticker: string): void;
}

class WatchingQuotesStore implements WatchingQuotesModel {
  watchingList: WatchingListType[] = [];

  constructor() {
    makeAutoObservable(this);
    this.loadWatchingList();
  }

  loadWatchingList() {
    const watchingListString = localStorage.getItem("watchingList");
    this.watchingList = watchingListString
      ? JSON.parse(watchingListString)
      : [];
  }

  isTickerInWatchingList(ticker: string) {
    return this.watchingList.some((item) => item.ticker === ticker);
  }

  saveWatchingList() {
    localStorage.setItem("watchingList", JSON.stringify(this.watchingList));
  }

  setWatchingList(list: WatchingListType[]) {
    this.watchingList = list;
  }

  addQuoteToWatchingList(quote: WatchingListType) {
    this.watchingList.push(quote);
    this.saveWatchingList();
  }

  deleteQuoteFromWatchingList(quote: WatchingListType) {
    this.watchingList = this.watchingList.filter(
      (item) => item.ticker !== quote.ticker
    );
    this.saveWatchingList();
  }
}

export const watchingQuotesStore = new WatchingQuotesStore();
