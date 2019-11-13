import React from 'react'

export const NewReturnTypesArray = () => {
  return [
    <h1 key="uniq1">New return types</h1>,
    <p key="uniq2">You can use arrays as a return type in render method.</p>,
  ]
}

export const NewReturnTypesString = () => {
  return 'Or you can use strings also.'
}