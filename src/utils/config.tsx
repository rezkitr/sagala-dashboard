import { INavItem } from '@/interfaces';
import {
  AndroidOutlined,
  AppleOutlined,
  BarChartOutlined,
  HomeOutlined,
  LockOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  WindowsOutlined
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

export const techTypeData = {
  android: {
    label: 'Android',
    key: 'android',
    icon: <AndroidOutlined />
  },
  ios: {
    label: 'iOS',
    key: 'ios',
    icon: <AppleOutlined />
  },
  windows: {
    label: 'Windows',
    key: 'windows',
    icon: <WindowsOutlined />
  }
};

export const dateFormats = {
  shortDate: 'DD.MMM.YYYY'
};

export const statusTypeData = {
  success: {
    label: 'Approved',
    key: 'success'
  },
  error: {
    label: 'Error',
    key: 'error'
  },
  disable: {
    label: 'Disable',
    key: 'warning'
  }
};
