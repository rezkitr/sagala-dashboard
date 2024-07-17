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
    path: '/',
    icon: <ShoppingCartOutlined />
  },
  {
    title: 'Data Tables',
    path: '/',
    icon: <BarChartOutlined />
  },
  {
    title: 'Profile',
    path: '/',
    icon: <UserOutlined />
  },
  {
    title: 'Sign In',
    path: '/',
    icon: <LockOutlined />
  },
  {
    title: 'RTL Admin',
    path: '/',
    icon: <SettingOutlined />
  }
];
