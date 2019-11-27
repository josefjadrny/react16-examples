import React from 'react'
import ReactDom from 'react-dom'

export const Portal = () => {
  const title = ReactDom.createPortal(<TitleComponent/>, document.head)

  return (
    <div>
      <h2>Portals</h2>
      {title}
      This component renders a document title which is outside of your app’s DOM hierarchy.
    </div>
  )
}

const TitleComponent = () => {
  return (
    <title>
      React 16 Examples
    </title>
  )
}