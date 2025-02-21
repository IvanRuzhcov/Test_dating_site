import React, { useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import X from 'shared/assets/icons/x.png';
import down_arrow from 'shared/assets/icons/down_arrow.png';
import points from 'shared/assets/icons/points.png';
import head from 'shared/assets/icons/head.png';
import sity from 'shared/assets/icons/sity.png';
import ghost from 'shared/assets/icons/ghost.png';
import arm from 'shared/assets/icons/arm.png';
import heart from 'shared/assets/icons/purple_heart.png';
// import victoria from 'shared/assets/img/victoria.png';
import left_arrow from 'shared/assets/icons/left_arrow.png';
interface MainPageProps {
  className?: string;
}

const woman = {
  name: 'Виктория',
  // photo: [victoria, victoria, victoria],
  age: 20,
  sity: 'Санкт Петербург',
  about_me:
    'Много работаю ( просто пекарь, бариста, кассир)) Играю на виолончели 🎻 Люблю гулять на свежем воздухе...',
};

const MainPage = ({ className }: MainPageProps) => {
  const [active, setActive] = useState(false);





  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      <header>
        <div className={cls.header__top}>
          {active ? (
            <div
              className={cls.header_button}
              onClick={() => setActive(!active)}
            >
              <div className={cls.icon_button}>
                <img src={left_arrow} alt="" />
              </div>
              <p>Back</p>
            </div>
          ) : (
            <div className={cls.header_button}>
              <div className={cls.icon_button}>
                <img src={X} alt="" />
              </div>
              <p>Close</p>
            </div>
          )}

          <div className={cls.header_button}>
            <div className={cls.icon_button}>
              <img src={down_arrow} alt="" />
            </div>
            <div className={cls.icon_button}>
              <img src={points} alt="" />
            </div>
          </div>
        </div>

        {active ? (
          <div className={cls.header__bottom_active}>
            <p>{`${woman.name}, ${woman.age} `}</p>
          </div>
        ) : (
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
        )}
      </header>
      <main>
        <div className={cls.profile_card}>
          <div
            className={
              active ? cls.profile_card_img_active : cls.profile_card_img
            }
          >
            {/* <img
              src={victoria}
              alt=""
              className={
                active ? cls.background_image_active : cls.background_image
              }
            /> */}
          </div>
          <div className={cls.profile_card_slider}>
            <div className={cls.slider_active}></div>
            <div className={cls.slider}></div>
            <div className={cls.slider}></div>
          </div>

          <div
            className={
              active ? cls.header_profile_card_active : cls.header_profile_card
            }
          >
            <div className={cls.sity_profile_card}>
              <img src={sity} alt="" />
              <p>{woman.sity}</p>
            </div>

            {active ? (
              ''
            ) : (
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
            )}
          </div>

          {active ? (
            <div className={cls.bottom_card_profile_actibe}>
              <p
                className={cls.bottom_card_profile_name}
              >{`${woman.name}, ${woman.age} `}</p>
            </div>
          ) : (
            <div className={cls.bottom_card_profile}>
              <div
                className={cls.bottom_card_profile_text}
                onClick={() => setActive(!active)}
              >
                <p
                  className={cls.bottom_card_profile_name}
                >{`${woman.name}, ${woman.age} лет`}</p>

                <p className={cls.bottom_card_profile_info}>{woman.about_me}</p>
              </div>
              <div className={cls.bottom_card_profile_button}>
                <button>
                  <p>⬅️</p>
                  Назад
                </button>
                <button>❤️</button>
              </div>
            </div>
          )}
        </div>

        {active ? (
          <div className={cls.profile_details_block}>
            <div className={cls.profile_details_meetings}>
              <p className={cls.header_profile_details}>Хочу встретиться:</p>
              <div className={cls.district}>
                <p>📍 Адмиралтейский район</p>
              </div>
              <p className={cls.profile_details_text}>
                Очень хочу сходить в бар и съесть вкусный хотдог с бургером, а
                может и картошку фри.
              </p>
              <hr />
            <div className={cls.profile_details_preferences_block}>
          
              <p>🍸 Бар</p>
              <p>🌭 Стритфуд</p>

            </div>

              <p className={cls.profile_details_proposal}>Можем сходить в бар “Мотылёк”</p>
            </div>
            <div className={cls.profile_details_profile_info}>
              <p className={cls.bottom_card_profile_info}>{woman.about_me}</p>
            </div>
          </div>
        ) : (
          ''
        )}
      </main>
    </div>
  );
};

export default MainPage;
