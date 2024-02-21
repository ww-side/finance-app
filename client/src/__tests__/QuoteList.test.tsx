import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import QuotesList from "@/components/common/QuotesList";
import { QuoteType } from "@/types/quote.ts";
import { MemoryRouter } from "react-router-dom";

describe("QuotesList component", () => {
  test("renders with empty quotes array", () => {
    const { getByText } = render(<QuotesList quotes={[]} />);
    const noMatchText = getByText(
      "We couldn't find any match for your result."
    );
    expect(noMatchText).toBeInTheDocument();
  });

  test("renders with correctly array", () => {
    const quotes: QuoteType[] = [
      {
        ticker: "AAPL",
        exchange: "NASDAQ",
        price: "150.00",
        change: "-123.5",
        change_percent: "50%",
        yield: "10",
        dividend: "5",
        last_trade_time: new Date(),
      },
    ];

    const { getByTestId } = render(
      <MemoryRouter>
        <QuotesList quotes={quotes} />
      </MemoryRouter>
    );

    quotes.forEach((quote) => {
      const quoteItem = getByTestId(`quote-item-${quote.ticker}`);
      expect(getByTestId(`quote-item-${quote.ticker}`)).toBeInTheDocument();
      expect(quoteItem).toHaveTextContent(quote.ticker);
    });
  });
});
