import { RouteComponent, RouteLocationNormalized } from "vue-router";


declare global {
  interface ToRouteType extends RouteLocationNormalized{
    meta: CustomizeRouteMeta
  }

  interface CustomizeRouteMeta {
    title: string;
    icon?: string;
    showLink?: boolean;
    roles?: Array<string>;
    auths?: Array<string>;
    keepAlive?: boolean;
    frameSrc?: string;
    frameLoading?: boolean;
    transition?: {
      name?: string;
      enterTransition?: string;
      leaveTransition?: string;
    };
    hiddenTag?: boolean;
    activePath?: string;
  }

  interface RouteConfigsTable{
    path: string;
    name?: string;
    redirect?: string;
    component?: RouteComponent;
    meta?: CustomizeRouteMeta;
  }

}

// https://router.vuejs.org/zh/guide/advanced/meta.html#typescript
declare module "vue-router" {
  interface RouteMeta extends CustomizeRouteMeta {}
}