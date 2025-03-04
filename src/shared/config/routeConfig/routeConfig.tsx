import { RouteProps } from 'react-router-dom';
import App from 'app/App';
import React from 'react';
import { MainPage } from 'pages/MainPage';

export enum AppRoutes {
  MAIN = 'main',

}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
 
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage></MainPage>,
  }
};
