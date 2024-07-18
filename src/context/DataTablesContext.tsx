/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import React, { createContext, useState } from 'react';

import { IDevelopmentItem } from '@/interfaces';
import { techTypeData } from '@/utils/config';

interface DataTablesContextValues {
  openAddDevelopmentItemModal: boolean;
  setOpenAddDevelopmentItemModal: (v: boolean) => void;
  developmentData: IDevelopmentItem[];
  filteredDevelopmentData: IDevelopmentItem[] | null;
  addDevelopmentItem: (d: IDevelopmentItem) => void;
  deleteDevelopmentItem: (id: string) => void;
  searchData: (k: string) => void;
}

// @ts-ignore
export const DataTablesContext = createContext<DataTablesContextValues>();

const DataTablesProvider = ({ children }: { children: React.ReactNode }) => {
  const [openAddDevelopmentItemModal, setOpenAddDevelopmentItemModal] = useState<boolean>(false);
  const [developmentData, setDevelopmentData] = useState<IDevelopmentItem[]>([
    {
      id: 'dev-1',
      name: 'Marketplace',
      tech: [techTypeData.ios.key, techTypeData.android.key, techTypeData.windows.key],
      progress: 70,
      date: new Date()
    },
    {
      id: 'dev-2',
      name: 'Venus DB PRO',
      tech: [techTypeData.ios.key, techTypeData.windows.key],
      progress: 25,
      date: new Date()
    }
  ]);
  const [filteredDevelopmentData, setFilteredDevelopmentData] = useState<IDevelopmentItem[] | null>(
    null
  );

  const addDevelopmentItem = (item: IDevelopmentItem) => {
    const newData = [...developmentData, item];
    setDevelopmentData(newData);
  };

  const deleteDevelopmentItem = (id: string) => {
    const newData = developmentData.filter((item) => item.id !== id);
    setDevelopmentData(newData);
  };

  const searchData = (keyword: string) => {
    if (!keyword) {
      setFilteredDevelopmentData(null);
      return;
    }
    const filteredData = developmentData.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredDevelopmentData(filteredData);
  };

  return (
    <DataTablesContext.Provider
      value={{
        openAddDevelopmentItemModal,
        setOpenAddDevelopmentItemModal,
        developmentData,
        filteredDevelopmentData,
        addDevelopmentItem,
        deleteDevelopmentItem,
        searchData
      }}
    >
      {children}
    </DataTablesContext.Provider>
  );
};

export default DataTablesProvider;
