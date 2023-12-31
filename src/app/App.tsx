import './styles/index.scss'
import {UseTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/RouterProvider";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {Suspense} from "react";



export const App = () => {
  const {theme} = UseTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className={'content-page'}>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};