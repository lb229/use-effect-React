import { useState } from 'react'
import { Welcome } from './components/Welcome'
import { Clock } from './components/Clock'


export function App() {
  return (
    <div>
      <Welcome />
      <hr />
      <Clock />
    </div>
  )
}