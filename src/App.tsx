import React, {Suspense, useContext} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {UseTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

export const App = () => {
  const {theme, toggleTheme} = UseTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>theme toggle</button><br />
      <Link to={'/'} >Главная</Link>
      <Link to={'/about'} >О себе</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageAsync />} />
          <Route path={'/about'} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};