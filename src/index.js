import React from 'react'
import ReactDom from 'react-dom'
import { NewReturnTypesArray, NewReturnTypesString} from './newReturnTypes'

ReactDom.render([
    <NewReturnTypesArray key="NewTypes1"/>,
    <NewReturnTypesString key="NewTypes2"/>
  ],
  document.getElementById("app")
)
