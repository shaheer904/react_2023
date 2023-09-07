import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, logout } from './redux/slicer/auth.slicer';
import PrivateRoute from './privateRoute/PrivateRoute';
import { useLoadUserQuery } from './redux/api/auth.api';
import routes, { authRoutes } from './routes';
import AppLayout from './layout/AppLayout';

const App = () => {
  // const token = localStorage.getItem('token');
  // const { data } = useLoadUserQuery(token);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (data?.result) {
  //     dispatch(loadUser({ user: data?.result, isAuthentication: true }));
  //   } else {
  //     dispatch(logout());
  //   }
  // }, [data, dispatch]);

  const loading = useSelector((state) => state.auth.authLoading);

  return (
    <div>
      {loading ? (
        <div>loading......</div>
      ) : (
        <Router>
          <Suspense fallback={<p>Loading.....</p>}>
            <Routes>
              {authRoutes.map((route, idx) => {
                return (
                  <Route
                    key={idx}
                    path={route.path}
                    element={route.element}
                    exact={route.exact}
                  />
                );
              })}

              {/* <Route element={<PrivateRoute />}> */}
              {routes.map((route, idx) => {
                return (
                  <Route
                    key={idx}
                    path={route.path}
                    element={route.element}
                    exact={route.exact}
                  />
                );
              })}
              {/* </Route> */}
            </Routes>
          </Suspense>
        </Router>
      )}
    </div>
  );
};

export default App;
