import Cart from "../pages/cart";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "./test-utils/createMockRouter";

describe("Cart", () => {
  it("should redirect to home page on cliking of navigate to home button", async () => {
    const mockPush = jest.fn();
    const user = userEvent.setup();
    render(
      <RouterContext.Provider
        value={createMockRouter({
          push: mockPush,
        })}
      >
        <Cart />
      </RouterContext.Provider>
    );
    const BtnEl = screen.getByRole("button");
    screen.debug(null, 30000);

    await user.click(BtnEl);
    // fireEvent(BtnEl, new MouseEvent("click", { bubbles: true }));
    expect(mockPush).toHaveBeenCalled();
  });
});
