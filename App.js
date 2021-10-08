import React from 'react';
import { Home } from './src/screens/Home'

import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <>
    <StatusBar
    animated={true}
    style='dark'
    backgroundColor='#242526'
    />
    <Home/>
    </>
  )
}

export default App;