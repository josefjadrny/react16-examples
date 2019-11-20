import React from 'react'
import ReactDom from 'react-dom'
import { NewReturnTypesArray, NewReturnTypesString} from './newReturnTypes'
import RenderError from './errorBoundaries'
import { Context } from './context'

ReactDom.render([
    <h1 key="Title">React 16 examples</h1>,
    <NewReturnTypesArray key="NewTypes1"/>,
    <NewReturnTypesString key="NewTypes2"/>,
    <RenderError key="Error1"/>,
    <Context key="Context1"/>,
  ],
  document.getElementById("app")
)
