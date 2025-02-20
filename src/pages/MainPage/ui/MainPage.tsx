import React, { useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import X from '../../../assets/icons/x.png';
import down_arrow from '../../../assets/icons/down_arrow.png';
import points from '../../../assets/icons/points.png';
import head from '../../../assets/icons/head.png';

import ghost from '../../../assets/icons/ghost.png';
import arm from '../../../assets/icons/arm.png';
import heart from '../../../assets/icons/purple_heart.png';

interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      <header>
        <div className={cls.header__top}>
          <div className={cls.header_button}>
            <div className={cls.icon_button}>
              <img src={X} alt="" />
            </div>
            <p>Close</p>
          </div>
          <div className={cls.header_button}>
            <div className={cls.icon_button}>
              <img src={down_arrow} alt="" />
            </div>
            <div className={cls.icon_button}>
              <img src={points} alt="" />
            </div>
          </div>
        </div>

        <div className={cls.header__bottom}>
          <div>
            <ul className={cls.header__bottom_left}>
              <li className={cls.header__bottom_icon_button}>
                <img src={ghost} alt="" />
              </li>
              <li className={cls.header__bottom_icon_button}>
                <img src={head} alt="" />
              </li>
              <li className={cls.header__bottom_icon_button}>
                <img src={arm} alt="" />
              </li>
            </ul>
          </div>
          <div className={cls.header__bottom_right}>
              <img src={heart} alt="" />
            <p>10 000 000 </p>
          </div>
        </div>
      </header>
      <main>
        
      </main>
    </div>
  );
};

export default MainPage;
