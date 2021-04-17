import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header.js";


let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test('footer should display current year', () => {
    act(() => {
        render(<Footer/>, container);
    });
    expect(container.textContent).toBe("Copyright ⓒ 2021");
});

test('application header name test', () => {
    act(() => {
        render(<Header/>, container);
        });
    expect(container.textContent).toBe("Simple Notes App");
});
