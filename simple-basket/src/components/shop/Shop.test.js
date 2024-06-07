import {render, screen} from "@testing-library/react";
import Shop from "./Shop";

describe("Shop", () => {
    it("Should render title and product and basket panels", () => {
        render(<Shop />);

        const shopTitle = screen.getByTestId(/^shop-title$/);
        expect(shopTitle).toHaveTextContent(/^Shop$/);

        const panelTitle = screen.getByTestId(/^product-panel-title$/);
        expect(panelTitle).toHaveTextContent(/^Products$/);

        const basketTitle = screen.getByTestId(/^basket-panel-title$/);
        expect(basketTitle).toHaveTextContent("Basket");
    });
});