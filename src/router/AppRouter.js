
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { LoginScreen } from "../components/auth/LoginScreen";
import { PublicRoute } from "./PublicRouter";
import { PrivateRoute } from "./PrivateRouter";
import { startChecking } from "../actions/auth";
import { DasboardRoutes } from "./DasboardRoutes";
import { Louder } from "../components/ui/Louder";


export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking} = useSelector(state => state.auth);

  

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);


  if (checking) {
    return <Louder loading={checking}/>
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          } />

          <Route path="/*" element={
            <PrivateRoute>
              <DasboardRoutes/>
            </PrivateRoute>
          }/>

        </Routes>
      </div>
    </Router>
  );
};
