import { vi, describe, test, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { filtersStore } from "@/store/filters.ts";
import MarketTrends from "@/components/common/MarketTrends";

vi.mock("@/store/filters.ts", () => ({
  filtersStore: {
    selectedTrend: "all",
    searchQuery: "",
    setSelectedTrend: vi.fn(),
    setSearchQuery: vi.fn(),
  },
}));

describe("MarketTrends component", () => {
  test("renders MarketTrends component correctly", () => {
    const { getByTestId } = render(<MarketTrends />);

    expect(getByTestId("all-label")).toBeInTheDocument();
  });

  test("change trend correctly", () => {
    const { getByTestId } = render(<MarketTrends />);

    fireEvent.click(getByTestId("gainers-label"));

    expect(filtersStore.setSelectedTrend).toHaveBeenCalledWith("gainers");
  });

  test("correct colors to chips based on selected trend", () => {
    const { getByTestId } = render(<MarketTrends />);

    fireEvent.click(getByTestId("gainers-label"));
    expect(
      getByTestId("gainers-label").classList.contains("MuiChip-outlinedPrimary")
    ).toBe(false);

    fireEvent.click(getByTestId("losers-label"));
    expect(
      getByTestId("losers-label").classList.contains(
        "MuiChip-outlinedSecondary"
      )
    ).toBe(false);
  });
});
