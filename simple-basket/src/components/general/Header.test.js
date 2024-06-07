import {act, render, screen} from "@testing-library/react";
import Header from "./Header";
import {loadInfo, loadLogo} from '../../services/configService';

jest.mock('../../services/configService');

describe("Header", () => {

    const INFO_MOCK = {
        title: "Title",
        subTitle: "Subtitle",
        description: "Description"
    }

    beforeEach(() => {
        loadInfo.mockImplementation(() => Promise.resolve(INFO_MOCK));
        loadLogo.mockImplementation(() => Promise.resolve("logo-source"));
    });

    it("checks if default text is displayed before fetching data", () => {
        render(<Header/>);

        const title = screen.getByTestId(/^header-title$/);
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent(/^Loading...$/);

        const subtitle = screen.getByTestId(/^header-subtitle$/);
        expect(subtitle).toBeInTheDocument();
        expect(subtitle).toHaveTextContent(/^Loading...$/);

        const description = screen.getByTestId(/^header-description$/);
        expect(description).toBeInTheDocument();
        expect(description).toHaveTextContent(/^Loading...$/);

        const logo = screen.getByTestId(/^header-logo$/);
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute("src", "/logo192.png");
        expect(logo).toHaveAttribute("alt", "Loading...");
    })

    it("checks if data is correctly fetched", async () => {
        await act(async () => render(<Header/>));

        const title = screen.getByTestId(/^header-title$/);
        expect(title).toHaveTextContent(/^Title$/);

        const subtitle = screen.getByTestId(/^header-subtitle$/);
        expect(subtitle).toHaveTextContent(/^Subtitle$/);

        const description = screen.getByTestId(/^header-description$/);
        expect(description).toHaveTextContent(/^Description$/);

        const logo = screen.getByTestId(/^header-logo$/);
        expect(logo).toHaveAttribute("src", "logo-source");
        expect(logo).toHaveAttribute("alt", "Logo");
    })
})
