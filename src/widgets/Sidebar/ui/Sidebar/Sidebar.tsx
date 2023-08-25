import cls from './Sidebar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useTranslation} from "react-i18next";
import {LangSwitcher} from "widgets/LangSwitcher/LangSwitcher";

interface SidebarProps {
  className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
  const { t } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(false)

  const onToggle = () => {
    setIsCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(cls.sidebar, {[cls.collapsed]: isCollapsed}, [className])}>
      <button onClick={onToggle}>{t('Переключатель')}</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};