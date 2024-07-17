'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navItems } from '@/utils/config';
import { cn } from '@/utils/utils';

const SideMenu = () => {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen w-80 flex-col items-center gap-y-8 bg-white px-6 py-12">
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
                  'flex w-full items-center gap-x-4 pl-4 text-base font-semibold',
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
  );
};

export default SideMenu;
