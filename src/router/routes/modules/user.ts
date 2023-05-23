import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const User: AppRouteRecordRaw = {
  path: '/user',
  name: 'User',
  component: DEFAULT_LAYOUT,
  redirect: '/user/setting',
  meta: {
    order: -1,
    locale: 'menu.user',
    requiresAuth: true,
    icon: 'icon-user',
  },
  children: [
    {
      path: '/user/setting',
      name: 'UserSetting',
      component: () => import('@/views/user/setting/index.vue'),
      meta: {
        icon: 'icon-settings',
        locale: 'menu.userSettings',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default User;
