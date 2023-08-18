import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "../config/routerConfig";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/*{routerConfig.map(route => (*/}
        {/*  <Route key={route.path} path={route.path} element={route.element} />*/}
        {/*))}*/}
        {Object.values(routeConfig).map(({path, element}) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};