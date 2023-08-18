import './styles/index.scss'
import {UseTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/RouterProvider";
import {Navbar} from "widgets/Navbar";

export const App = () => {
  const {theme, toggleTheme} = UseTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>theme toggle</button><br />
    </div>
  );
};