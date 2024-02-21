import { describe, expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AppRouter from "@/components/common/AppRouter";

describe("AppRouter component", () => {
  test("test routers", async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    );

    const watchingListLink = getByTestId("watching-list-link");
    expect(watchingListLink).toBeInTheDocument();

    await userEvent.click(watchingListLink);
    expect(getByTestId("watching-list-page")).toBeInTheDocument();

    const homeLink = getByTestId("home-link");
    expect(homeLink).toBeInTheDocument();

    await userEvent.click(homeLink);
    expect(getByTestId("home-page")).toBeInTheDocument();
  });
});
