
import React from 'react'
import { render,screen } from '@testing-library/react';
import Board from "../board"
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'



describe('With React Testing Library', () => {
  const initialState = {output:10}
  const mockStore:any = configureStore()
  let store,wrapper

  it('Shows "Hello world!"', () => {
    store = mockStore(initialState)
    const { container} = render(<Provider store={store}><Board /></Provider>)
    expect(container).toBeTruthy()
  })
  test("",()=>{
    store = mockStore(initialState)
    render(<Provider store={store}><Board /></Provider>)
    screen.debug()
  })
})