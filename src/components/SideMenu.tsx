/* eslint-disable simple-import-sort/imports */
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

import { LayoutContext } from '@/context/LayoutContext';
import { navItems } from '@/utils/config';
import { cn } from '@/utils/utils';

const SideMenu = () => {
  const pathname = usePathname();

  const { openSideMenu, setOpenSideMenu } = useContext(LayoutContext);

  return (
    <>
      {openSideMenu && (
        <div
          className="absolute inset-0 z-20 bg-black/25 transition-all duration-300 ease-in-out xl:hidden"
          onClick={() => setOpenSideMenu(false)}
        />
      )}
      <div
        className={cn(
          'absolute bottom-0 top-0 z-20 min-h-screen w-72 flex-col items-center gap-y-8 bg-white px-6 py-12 shadow-sm transition-all duration-300 ease-in-out xl:static xl:flex 2xl:w-80',
          openSideMenu ? 'flex' : '-translate-x-full xl:translate-x-0'
        )}
      >
        <h1 className="text-2xl">
          <span className="font-bold">HORIZON</span> FREE
        </h1>
        <div className="w-full border border-gray-200" />
        <div className="flex w-full flex-col gap-y-6">
          {navItems.map((nav) => {
            const isActive = nav.path === pathname;
            return (
              <Link key={nav.title} href={nav.path}>
                <div
                  className={cn(
                    'flex w-full items-center gap-x-4 pl-0 text-sm font-semibold xl:pl-4 xl:text-base',
                    isActive ? 'border-r-4 border-blue-primary' : 'text-gray-400'
                  )}
                >
                  <span className={cn(isActive && 'text-blue-primary')}>{nav.icon}</span>
                  {nav.title}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideMenu;
