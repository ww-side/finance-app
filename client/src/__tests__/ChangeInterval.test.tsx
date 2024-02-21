import { afterEach, describe, expect, test, vi } from "vitest";
import toast from "react-hot-toast";
import { fireEvent, render } from "@testing-library/react";
import ChangeInterval from "@/components/common/ChangeInterval";
import socketApi from "@/api/socket-api.ts";
import "@testing-library/jest-dom";

const socketApiChangeInterval = vi.spyOn(socketApi, "changeInterval");
const reactHotToastError = vi.spyOn(toast, "error");

describe("ChangeInterval component", () => {
  test("interval change correctly", () => {
    const { getByTestId, getByLabelText } = render(<ChangeInterval />);

    fireEvent.change(getByLabelText("Enter new interval"), {
      target: { value: "5" },
    });

    fireEvent.click(getByTestId("change-interval-button"));

    expect(socketApiChangeInterval).toHaveBeenCalledWith(5000);
    expect(reactHotToastError).not.toHaveBeenCalled();
  });

  test("invalid interval in input", () => {
    const { getByTestId, getByLabelText } = render(<ChangeInterval />);

    fireEvent.change(getByLabelText("Enter new interval"), {
      target: { value: "-2" },
    });

    fireEvent.click(getByTestId("change-interval-button"));

    expect(socketApiChangeInterval).not.toHaveBeenCalled();
    expect(reactHotToastError).toBeCalledTimes(1);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
