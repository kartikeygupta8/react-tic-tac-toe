import Block from "../block";
import React from "react"
import { fireEvent, render,screen } from '@testing-library/react';

describe("Component", ()=>{
  test("should component render",()=>{
    const {container}=render(<Block/>)
    expect(container).toBeTruthy()
  })
  test("",()=>{
    const {container}=render(<Block mark="1"/>)
    expect(container.getElementsByClassName("Block markundefined").length).toBe(0);
    
  })
  test("",()=>{
    const {container}=render(<Block/>)
    expect(container.getElementsByClassName("Block markundefined").length).toBe(1);
  })
  test("",()=>{
    const handleClick = jest.fn()
    render(<Block changeMark={handleClick} position="8"/>)
    const onClick = screen.getByTestId("1")
    fireEvent.click(onClick)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})