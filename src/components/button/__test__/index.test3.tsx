//search.test.js
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../index";

describe("Button", () => {
  it("should increment a counter", async () => {
    const user = userEvent.setup();

    render(<Button />);

    expect(screen.getByRole("button")).toHaveTextContent("0");

    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent("1");

    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent("2");

    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent("3");

    await user.click(screen.getByRole("button"));

  
    expect(screen.getByRole("button")).toHaveTextContent("4");
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
