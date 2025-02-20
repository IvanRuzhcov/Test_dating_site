import React, { useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import X from '../../../assets/icons/x.png';
import down_arrow from '../../../assets/icons/down_arrow.png';
import points from '../../../assets/icons/points.png';
import head from '../../../assets/icons/head.png';
import sity from '../../../assets/icons/sity.png';
import ghost from '../../../assets/icons/ghost.png';
import arm from '../../../assets/icons/arm.png';
import heart from '../../../assets/icons/purple_heart.png';
import victoria from '../../../assets/img/victoria.png';
interface MainPageProps {
  className?: string;
}

const woman = {
  name: 'Виктория',
  photo: [victoria, victoria, victoria],
  age: 20,
  sity: 'Санкт Петербург',
  about_me:
    'Много работаю ( просто пекарь, бариста, кассир)) Играю на виолончели 🎻 Люблю гулять на свежем воздухе...',
};

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
        <div className={cls.profile_card}>
          <img src={victoria} alt="" className={cls.background_image} />
          <div className={cls.profile_card_slider}>
            <div className={cls.slider_active}></div>
            <div className={cls.slider}></div>
            <div className={cls.slider}></div>
          </div>

          <div className={cls.header_profile_card}>
            <div className={cls.sity_profile_card}>
              <img src={sity} alt="" />
              <p>{woman.sity}</p>
            </div>
            <div className={cls.preference_profile_card}>
              <ul>
                <li>
                  <p>🍸</p>
                  <p>Бар</p>
                </li>
                <li>
                  <p>🌭</p>
                  <p>Стритфуд</p>
                </li>
                <li>
                  <p>📍</p>
                  <p>Адмиралтейский район</p>
                </li>
              </ul>
            </div>
          </div>

            <div className={cls.bottom_card_profile}>
              <div className={cls.bottom_card_profile_text}>
                <p
                  className={cls.bottom_card_profile_name}
                >{`${woman.name}, ${woman.age} лет`}</p>

                <p className={cls.bottom_card_profile_info}>{woman.about_me}</p>
              </div>
              <div className={cls.bottom_card_profile_button}>
                <button>
                  <p>⬅️</p>
                   Назад</button>
                <button>❤️</button>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
