import React, { ReactElement } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from 'react-vant'

function App(): ReactElement {
  const APP_VERSION = 'v1.0.0'
  console.log('123')
  return (
    <div className='App'>
      <div className='demo-button'>
        <Button type='primary'>Primary</Button>
        <Button type='info'>Info</Button>
        <Button type='default'>Default</Button>
        <Button type='warning'>Warning</Button>
        <Button type='danger'>Dangeer</Button>
        <input type='text' />
      </div>
      <header className='App-header'>
        <img alt='logo' className='App-logo' src={logo} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          rel='noopener noreferrer'
          target='_blank'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
