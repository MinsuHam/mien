import React from 'react'
import TopNav from './components/TopNav'
import Slide from './components/Slide'
import Delivery from './components/Delivery'
import Weeks from './components/Weeks'
import Recipe from './components/Recipe'
import Category from './components/Category'
import Footers from './components/Footers'

const App = () => {
  return (
    <div className="App">
       <TopNav />
       <Slide />
       <Delivery />
       <Weeks />
       <Recipe />
       <Category />
       <Footers />
    </div>
  )
}

export default App