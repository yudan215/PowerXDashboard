import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const User: AppRouteRecordRaw = {
  path: '/user',
  name: 'User',
  component: DEFAULT_LAYOUT,
  redirect: '/user/setting',
  meta: {
    locale: 'menu.user',
    requiresAuth: true,
    icon: 'icon-user',
    hideInMenu: true,
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: '/user/setting',
      name: 'UserSetting',
      component: () => import('@/views/user/setting/index.vue'),
      meta: {
        icon: 'icon-settings',
        locale: 'menu.user.userSettings',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: '/user/setting/oauth2/:type/redirect',
      name: 'Oauth2Redirect',
      component: () => import('@/views/user/setting/oauth2/index.vue'),
      meta: {
        locale: 'menu.user.oauth2Redirect',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default User;
