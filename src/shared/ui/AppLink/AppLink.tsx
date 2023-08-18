import cls from './AppLink.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...otherProps
  } = props

  return (
    <Link className={classNames(cls.AppLink, {}, [className, cls[theme]])} to={to} {...otherProps}>
      {children}
    </Link>
  );
};