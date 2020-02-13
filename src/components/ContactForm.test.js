import React from "react";
import { render } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm without crashing", () =>{
    const { getByLabelText } = render(<ContactForm />);
    getByLabelText(/First Name*/i);
    getByLabelText(/Last Name*/i);
    getByLabelText(/Email*/i);
    getByLabelText(/Message/i);  
})