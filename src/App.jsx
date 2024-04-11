import Hero from './components/Hero'
import Profile from './components/Profile'
import Signup from './components/Signup'
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import { useState } from 'react'

const App = () => {
  const [avatarImage, setAvatarImage] = useState(null);
  return (
    <div className='App'>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile avatarImage={avatarImage} setAvatarImage={setAvatarImage} />} />
        <Route path='/interest' element={<Hero />} />
        <Route path='/' element={<HomePage avatarImage={avatarImage} />} />
      </Routes>
    </div>
  )
}

export default App