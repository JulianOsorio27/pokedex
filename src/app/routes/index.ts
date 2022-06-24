interface IRouteItem {
  title: string;
  path: string;
  to: string;
}

export interface IRoutes {
  kanto: IRouteItem;
  johto: IRouteItem;
  hoenn: IRouteItem;
  sinnoh: IRouteItem;
}

export const routes: IRoutes = {
  kanto: {
    title: 'Kanto',
    path: 'kanto',
    to: '/kanto'
  },
  johto: {
    title: 'Johto',
    path: 'johto',
    to: '/johto'
  },
  hoenn: {
    title: 'Hoenn',
    path: 'hoenn',
    to: '/hoenn'
  },
  sinnoh: {
    title: 'Sinnoh',
    path: 'sinnoh',
    to: '/sinnoh'
  }
};