import { INavItem } from '@/interfaces';
import {
  BarChartOutlined,
  HomeOutlined,
  LockOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  UserOutlined
} from '@ant-design/icons';

export const navItems: INavItem[] = [
  {
    title: 'Main Dashboard',
    path: '/',
    icon: <HomeOutlined />
  },
  {
    title: 'NFT Marketplace',
    path: '/nft-marketplace',
    icon: <ShoppingCartOutlined />
  },
  {
    title: 'Data Tables',
    path: '/data-tables',
    icon: <BarChartOutlined />
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <UserOutlined />
  },
  {
    title: 'Sign In',
    path: '/sign-in',
    icon: <LockOutlined />
  },
  {
    title: 'RTL Admin',
    path: '/rtl-admin',
    icon: <SettingOutlined />
  }
];
