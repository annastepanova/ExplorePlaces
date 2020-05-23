import React, { useState, useCallback } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import UserPlaces from './places/pages/UserPlaces'
import UpdatePlace from './places/pages/UpdatePlace'
import Auth from './user/pages/Auth'
import { AuthContext } from './shared/context/AuthContext'

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userId, setUserId] = useState(false)
  const login = useCallback((uid) => {
    setIsLoggedIn(true)
    setUserId(uid)
  }, [])
  const logout = useCallback(() => {
    setIsLoggedIn(false)
    setUserId(null)
  }, [])

  let routes

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/:userId/places" component={UserPlaces} />
        <Route exact path="/places/new" component={NewPlace} />
        <Route path="/places/:placeId" component={UpdatePlace} />
        <Redirect to="/" />
      </Switch>
    )
  }
    else {
      routes = (
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/:userId/places" component={UserPlaces} />
          <Route path="/auth" component={Auth} />
          <Redirect to="/auth" />
        </Switch>
      )
    }
  
 
  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, userId: userId, login: login, logout: logout}}>
      <Router>
        <MainNavigation/>
          <main>
            {routes}
          </main>
      </Router>
    </AuthContext.Provider>
  )
  
}

export default App
