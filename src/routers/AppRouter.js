import React, { useEffect, useState } from "react";
import { firebase } from "../firebase/firebase-config";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";
import JournalScreen from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";

const AppRouter = () => {
  const dispatch = useDispatch();
  const [checkin, setCheckin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setCheckin(false);
    });
  }, [dispatch, setCheckin, setIsLoggedIn]);

  if (checkin) {
    return (
      <div className="auth__loading-screen">
        <BarLoader color="#fff" />
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route path="/" exact component={JournalScreen} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
