import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import chat from 'shared/assets/icons/chat.png';
import profile from 'shared/assets/icons/profile.png';
import heard from 'shared/assets/icons/heard.png';
import questionnaire from 'shared/assets/icons/questionnaire.png';

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
          <div className={cls.notification}>
            <p>+99</p>
          </div>
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
