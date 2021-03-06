import React, { useEffect, useState } from 'react'
import { firebase } from '../firebase/firebase-config'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import JournalScreen from '../components/journal/JournalScreen'
import AuthRouter from './AuthRouter'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import { starLoadingNotes } from '../actions/notes'
import LoadingScreen from '../components/LoadingScreen'

const AppRouter = () => {
  const dispatch = useDispatch()
  const [checkin, setCheckin] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
        setIsLoggedIn(true)

        dispatch(starLoadingNotes(user.uid))

      } else {
        setIsLoggedIn(false)
      }
      // setCheckin(false)
      setTimeout(() => {
        setCheckin(false)
      },2000)
    })
  }, [dispatch, setCheckin, setIsLoggedIn])

  if (checkin) {
    return (
      <LoadingScreen />
    )
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuthenticated={isLoggedIn}
            path='/auth'
            component={AuthRouter}
          />
          <PrivateRoute
            exact
            isAuthenticated={isLoggedIn}
            path='/'
            component={JournalScreen}
          />
          <Redirect to='/auth/login' />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
