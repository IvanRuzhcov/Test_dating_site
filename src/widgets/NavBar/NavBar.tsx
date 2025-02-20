import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import chat from '../../assets/icons/chat.png';
import profile from '../../assets/icons/profile.png';
import heard from '../../assets/icons/heard.png';
import questionnaire from '../../assets/icons/questionnaire.png';

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <nav className={cls.nav_container}>
        <div className={cls.nav_button}>
          <img src={chat} alt="" />
          <p>Чаты</p>
        </div>
        <div className={cls.nav_button}>
          <img src={heard} alt="" />
          <p>Симпатии</p>
        </div>
        <div className={cls.nav_button_questionnaire}>
          <img src={questionnaire} alt="" />
          <p>Анкеты</p>
        </div>
        <div className={cls.nav_button}>
          <img src={profile} alt="" />
          <p>Профиль</p>
        </div>
      </nav>
    </div>
  );
};
