// Import the functions from the testing-library
import { render, screen, fireEvent } from "@testing-library/react-native";

// Import the component to test
import RowComponent from "../components/RowComponent";

describe("RowComponent", () => {
  it("displays PENDING and the switch is OFF when isComplete is false", () => {
    const testRowData = { id: 1, name: "Test Task", isCompleted: false };
    const { getByText, getByTestId } = render(
      <RowComponent rowNumber={testRowData} />
    );
    expect(getByText("Pending")).toBeTruthy();
    expect(getByTestId("todoSwitch").props.value).toBe(false);
  });

  it("displays FINISHED and the switch is ON when isComplete is true", () => {
    const testRowData = { id: 1, name: "Test Task", isCompleted: true };
    const { getByText, getByTestId } = render(
      <RowComponent rowNumber={testRowData} />
    );
    expect(getByText("Finished")).toBeTruthy();
    expect(getByTestId("todoSwitch").props.value).toBe(true);
  });
});
