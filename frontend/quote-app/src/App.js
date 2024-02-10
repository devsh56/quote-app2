import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainNavigation from './Components/MainNavigation/MainNavigation'

import AllQuotes from './Components/Pages/AllQuotes'
import EditQuotes from './Components/Pages/EditQuotes'
import NewQuotes from './Components/Pages/NewQuote'
import ShowQuotes from './Components/Pages/ShowQuote'

const App = () => {
  return (
    <Fragment>
      <MainNavigation />

      <main>
        <Routes>
          <Route path='/'    element={ <AllQuotes /> } />
          <Route path='/new' element={ <NewQuotes /> } />
          <Route path='/quotes/:id' element={ <ShowQuotes/> } />
          <Route path='/quotes/edit/:id' element={ <EditQuotes/> } />
        </Routes>
      </main>

    </Fragment>
  )
}

export default App