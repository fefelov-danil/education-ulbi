import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {RouteProps} from "react-router-dom";

// export const AppRoutes = {
//   main: '/',
//   about: '/about'
// } as const
//
// export const routerConfig = [
//   {path: AppRoutes.main, element: <MainPage />},
//   {path: AppRoutes.about, element: <AboutPage />}
// ] as const

export enum AppRoutes {
  MAIN= 'main',
  ABOUT = 'about'
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage />
  }
}