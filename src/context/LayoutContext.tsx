/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import React, { createContext, useState } from 'react';

interface LayoutContextValues {
  openSideMenu: boolean;
  setOpenSideMenu: (v: boolean) => void;
}

// @ts-ignore
export const LayoutContext = createContext<LayoutContextValues>();

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);

  return (
    <LayoutContext.Provider
      value={{
        openSideMenu,
        setOpenSideMenu
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
