import React, { createContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { GraphDataProvider } from "./src/context/graphDataContext"

export const wrapRootElement = ({ element }) => (
  <GraphDataProvider>{element}</GraphDataProvider>
)