import Link from 'next/link';

import { navItems } from '@/utils/config';

const SideMenu = () => {
  return (
    <div className="flex min-h-screen w-80 flex-col items-center gap-y-8 bg-white px-6 py-12">
      <h1 className="text-2xl">
        <span className="font-bold">HORIZON</span> FREE
      </h1>
      <div className="w-full border border-gray-200" />
      <div className="flex w-full flex-col gap-y-6">
        {navItems.map((nav) => {
          return (
            <Link key={nav.title} href={nav.path}>
              <div className="text-blue-primary border-blue-primary flex w-full items-center gap-x-4 border-r-4 text-base font-semibold">
                {nav.icon}
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
