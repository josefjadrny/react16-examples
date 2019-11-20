import React, { useContext } from 'react'

const defaultContext = React.createContext({})
const annotation = 'You can use params in component tree without passing those params through every component.'

export const Context = () => {
  return (
    <defaultContext.Provider value={annotation}>
      <h2>Context</h2>
      <SomeDiv/>
    </defaultContext.Provider>
  )
}

const SomeDiv = () => {
  return(
    <LastDiv/>
  )
}

const LastDiv = () => {
  const context = useContext(defaultContext)
  return(
    <div>
      {context}
    </div>
  )
}