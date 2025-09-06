import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './components/UserContext'
import ProfilePage from './components/ProfilePage'

function App() {
  const UserData = { name: 'John Doe', email: 'john@example.com' };

  return (
    <UserContext.Provider value={{ userData: UserData }}>
      <ProfilePage />
    </UserContext.Provider>
  )
}


export default App
