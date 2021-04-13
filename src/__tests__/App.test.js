import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import App from "../App";
import { StateProvider } from "../store";

describe("render app", () => {
  beforeEach(() => {
    render(
      <StateProvider>
        <App />
      </StateProvider>
    );
  });

  afterEach(cleanup);

  test("render the header", () => {
    expect(screen.getByText(/kontakt/i)).toBeInTheDocument();
  });

  test("render the search bar", () => {
    expect(
      screen.getByPlaceholderText("Search contacts...")
    ).toBeInTheDocument();
  });

  test("check the contact list", async () => {
    expect(await screen.findByText("Adam Wright")).toBeInTheDocument;
    expect(await screen.findByText("Joe Manfrey")).toBeInTheDocument;
  });

  test("view contact", async () => {
    // checks if the contact list is rendered
    const contactItem = await screen.findByText("Adam Wright");
    // validates that the Contact is not in the view screen before clicking the name in the contact list.
    expect(screen.queryByAltText("Adam Wright")).not.toBeInTheDocument();
    // triggers a click event
    fireEvent.click(contactItem);
    // validates that the Contact Image Element is renders after the click.
    expect(screen.queryByAltText("Adam Wright")).toBeInTheDocument();
  });
});
