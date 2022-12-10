import React from "react"
import '@testing-library/jest-dom/extend-expect'
import {  render, screen } from '@testing-library/react'
import Navbar from "../Components/Navbar"
import { ContextProvider } from "../Components/utils/global.context"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"

test("Home test", () => {
    render(
    <ContextProvider>
        <BrowserRouter>
        <Navbar/>
        </BrowserRouter>
    </ContextProvider>
    )
    
    const button =  screen.getByRole('button', {
        name: /🌙/i
      })
    
    userEvent.click(button);

    const nav = screen.getByRole('navigation')

    expect(nav).toHaveClass("dark")
})