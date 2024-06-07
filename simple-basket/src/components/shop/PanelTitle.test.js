import {render, screen} from "@testing-library/react";
import PanelTitle from "./PanelTitle";

describe("PanelTitle", () => {
    it("should display the text wrapped in", () => {
        render(<PanelTitle data-testid="test-id">text</PanelTitle>);

        const panelTitle = screen.getByTestId(/^test-id$/);
        expect(panelTitle).toHaveTextContent(/^text$/);
    });
});