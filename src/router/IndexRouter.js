import React from 'react'
import {HashRouter,Routes, Route} from 'react-router-dom'
import Login from '../views/login/index'
import Home from '../views/home/index'

export default function IndexRouter() {
  return (
    <Routes>
        <Route path="/login" element={Login} />
        <Route path="/" element={Home} />
    </Routes>
  )
}
