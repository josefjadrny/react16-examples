import React from 'react'
import ReactDom from 'react-dom'
import { NewReturnTypesArray, NewReturnTypesString} from './newReturnTypes'
import RenderError from './errorBoundaries'

ReactDom.render([
    <h1 key="Title">React 16 examples</h1>,
    <NewReturnTypesArray key="NewTypes1"/>,
    <NewReturnTypesString key="NewTypes2"/>,
    <RenderError key="Error1"/>,
  ],
  document.getElementById("app")
)
