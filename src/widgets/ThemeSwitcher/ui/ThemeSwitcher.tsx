import slc from './ThemeSwitcher.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  return (
    <div className={classNames(slc.themeSwitcher, {}, [className])}>

    </div>
  );
};