import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './utils/AppLayout'
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'
import About from './components/About'


function App() {

  const GeneralRoutes = [
    {path:'/', Component: Home},
    {path:'contact', Component: Contact},
    {path:'projects', Component: Projects},
    {path:'about', Component: About}
]
  return (
   <BrowserRouter>
   <Routes>
    {GeneralRoutes.map((item,i) => (
      <Route key={i} path={item.path} element={<AppLayout><item.Component/></AppLayout>} />
    ))}
   </Routes>
   </BrowserRouter>
  )
}

export default App
