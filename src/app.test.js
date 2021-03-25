import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
const { dayOfTheWeek } = require('./sample.js');
import Footer from "./components/Footer/Footer.js";


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

test('getDay returns the long-format day of the week', () => {

    const day = dayOfTheWeek( new Date('3/25/2021') );
    expect( day ).toBe('Thursday');
});

// it("test new component", () => {
//     act(() => {
//       render(<Footer/>, container);
//     });
//     expect(container.textContent).toBe("Copyright ⓒ 2021");
//   
    // act(() => {
    //   render(<Footer name="Jenny"/>, container);
    // });
    // expect(container.textContent).toBe("Footer, Jenny!");
//   
    // act(() => {
    //   render(<Footer name="Margaret" />, container);
    // });
    // expect(container.textContent).toBe("Footer, Margaret!");
// });