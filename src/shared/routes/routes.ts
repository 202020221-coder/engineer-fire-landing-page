import { lazy, type JSX } from "react";

type JSXComponent = () => JSX.Element;

export interface ILink {
    to:string;
    name:string;
}

export interface IRoute {
    path:string;
    Component:React.LazyExoticComponent<JSXComponent> | JSXComponent;
}

export interface IPrivateRoute extends IRoute { roles?: string[]; }

const HomeNavigation = lazy(() => import(/* webpackChunkName: HomeNavigation */ '@/home/routes/HomeNavigation' ));

export const routes:IRoute[] = [
    {
        path: '/',
        Component: HomeNavigation,
    }
];