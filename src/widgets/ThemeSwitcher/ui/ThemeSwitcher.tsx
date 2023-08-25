import cls from './ThemeSwitcher.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Theme, UseTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/theme-light.svg';
import DarkIcon from 'shared/assets/theme-dark.svg';
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = UseTheme()

  return (
    <div className={classNames(cls.themeSwitcher, {}, [className])}>
      <Button onClick={toggleTheme} theme={ThemeButton.CLEAR}>
        {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
      </Button>
    </div>
  );
};