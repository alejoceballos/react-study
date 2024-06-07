import {render, screen} from "@testing-library/react";
import Categories from "./Categories";

describe("Categories", () => {

    const PRODUCTS_MOCK = [
        {
            name: "Product 1.1",
            type: "Type 1",
            description: "Product 1.1 description",
            monthlyCost: .1,
            contractLength: 1
        },
        {
            name: "Product 1.2",
            type: "Type 1",
            description: "Product 1.2 description",
            monthlyCost: .2,
            contractLength: 1
        },
        {
            name: "Product 2.1",
            type: "Type 2",
            description: "Product 2.1 description",
            monthlyCost: .3,
            contractLength: 1
        },
        {
            name: "Product 3.1",
            type: "Type 3",
            description: "Product 3.1 description",
            monthlyCost: .4,
            contractLength: 1
        }
    ];

    it("Should render a the loading message", () => {
        render(<Categories products={({})} basket={[]} onAddToBasket={jest.fn()} onRemoveFromBasket={jest.fn()} />);

        const panelTitle = screen.getByTestId(/^categories-loading-msg$/);
        expect(panelTitle).toHaveTextContent(/^Loading...$/);
    })
});