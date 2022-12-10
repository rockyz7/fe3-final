import React from "react"
import '@testing-library/jest-dom/extend-expect'
import {  render, screen } from '@testing-library/react'
import { ContextProvider } from "../Components/utils/global.context"
import Contact from "../Routes/Contact"
import userEvent from "@testing-library/user-event"
 
describe("Contact form", () => {

    beforeEach(() => {
        render (
            <ContextProvider>
                <Contact/>
            </ContextProvider>
        )
    })

    test("Render form", () => {
        const nameForm = screen.getByPlaceholderText(/your name/i)
        const emailForm = screen.getByPlaceholderText(/email/i)
        expect(nameForm).toBeInTheDocument()
        expect(emailForm).toBeInTheDocument()
    
        const input = screen.getByPlaceholderText(/email/i)
        
        expect(input).toHaveAttribute('type', 'email')
    })

    test("Wrong email", async () => {
        const mockData = { name: "Rocky", email: "rockygmail.com"}
        const inputName = screen.getByPlaceholderText(/your name/i)
        const inputEmail = screen.getByPlaceholderText(/email/i)

        const button = screen.getByRole("button", {
            name: /submit/i
          })

        userEvent.type(inputName, mockData.name);
        userEvent.type(inputEmail, mockData.email);
        userEvent.click(button);

        const invalidEmail = await screen.findByText("Please enter a valid email");

        expect(invalidEmail).toBeInTheDocument()
        
    })
})

