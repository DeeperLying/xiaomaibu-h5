import React, { ReactElement } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from 'react-vant'
import { useRoutes } from 'react-router'
import RouterConfig from 'src/lib/routers'

function App(): ReactElement {
  const element = useRoutes(RouterConfig)
  return <div className='App'>{element}</div>
}

export default App
