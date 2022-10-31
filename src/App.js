import React from 'react'
import './App.css';
import Pagination from './components/Pagination'
import Search from './components/Search'
import Stories from './components/Stories'

const App = () => {
  return (
    <div>
      <Search/>
      <Pagination/>
      <Stories/>
    </div>
  )
}

export default App