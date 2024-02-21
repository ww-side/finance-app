import { describe, test, vi, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "@/components/ui/SearchBar";

describe("SearchBar component", () => {
  test("renders SearchBar correctly", () => {
    const mockOnSearchChange = vi.fn();

    const { getByLabelText, getByTestId } = render(
      <SearchBar onSearchChange={mockOnSearchChange} />
    );

    expect(getByLabelText("Search tickers")).toBeInTheDocument();
    expect(getByTestId("search-icon")).toBeInTheDocument();
  });

  test("calls onSearchChange when input value changes", () => {
    const mockOnSearchChange = vi.fn();

    const { getByLabelText } = render(
      <SearchBar onSearchChange={mockOnSearchChange} />
    );

    fireEvent.change(getByLabelText("Search tickers"), {
      target: { value: "AAPL" },
    });

    expect(mockOnSearchChange).toHaveBeenCalledWith("AAPL");
  });
});
