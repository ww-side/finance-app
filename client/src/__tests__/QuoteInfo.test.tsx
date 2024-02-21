import { test, expect, describe } from "vitest";
import { render } from "@testing-library/react";
import QuoteInfo from "@/components/common/QuoteInfo";
import type { QuoteType } from "@/types/quote.ts";

const mockQuote: QuoteType = {
  ticker: "AAPL",
  exchange: "NASDAQ",
  price: "150.00",
  change: "5.00",
  change_percent: "3%",
  dividend: "2.00",
  yield: "1.5%",
  last_trade_time: new Date(),
};

describe("QuoteInfo component", () => {
  test("renders QuoteInfo with mock data", () => {
    const { getByTestId } = render(<QuoteInfo quote={mockQuote} />);

    expect(getByTestId(`quote-info-${mockQuote.ticker}`)).toBeInTheDocument();
  });
});
