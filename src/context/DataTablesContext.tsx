/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import React, { createContext, useState } from 'react';

import { ICheckItem, IDevelopmentItem } from '@/interfaces';
import { techTypeData } from '@/utils/config';

interface DataTablesContextValues {
  openAddDevelopmentItemModal: boolean;
  setOpenAddDevelopmentItemModal: (v: boolean) => void;
  openAddCheckItemModal: boolean;
  setOpenAddCheckItemModal: (v: boolean) => void;
  developmentData: IDevelopmentItem[];
  filteredDevelopmentData: IDevelopmentItem[] | null;
  checkData: ICheckItem[];
  filteredCheckData: ICheckItem[] | null;
  addDevelopmentItem: (d: IDevelopmentItem) => void;
  deleteDevelopmentItem: (id: string) => void;
  addCheckItem: (d: ICheckItem) => void;
  deleteCheckItem: (id: string) => void;
  searchData: (k: string) => void;
}

// @ts-ignore
export const DataTablesContext = createContext<DataTablesContextValues>();

const DataTablesProvider = ({ children }: { children: React.ReactNode }) => {
  const [openAddDevelopmentItemModal, setOpenAddDevelopmentItemModal] = useState<boolean>(false);
  const [openAddCheckItemModal, setOpenAddCheckItemModal] = useState<boolean>(false);
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
  const [checkData, setCheckData] = useState<ICheckItem[]>([
    {
      id: 'check-1',
      name: 'Marketplace',
      progress: 32,
      qty: 12,
      date: new Date()
    }
  ]);
  const [filteredCheckData, setFilteredCheckData] = useState<ICheckItem[] | null>(null);

  const addDevelopmentItem = (item: IDevelopmentItem) => {
    const newData = [...developmentData, item];
    setDevelopmentData(newData);
  };

  const deleteDevelopmentItem = (id: string) => {
    const newData = developmentData.filter((item) => item.id !== id);
    setDevelopmentData(newData);
  };

  const addCheckItem = (item: ICheckItem) => {
    const newData = [...checkData, item];
    setCheckData(newData);
  };

  const deleteCheckItem = (id: string) => {
    const newData = checkData.filter((item) => item.id !== id);
    setCheckData(newData);
  };

  const searchData = (keyword: string) => {
    if (!keyword) {
      setFilteredDevelopmentData(null);
      setFilteredCheckData(null);
      return;
    }
    const newDevelopmentData = developmentData.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    );
    const newCheckData = checkData.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredDevelopmentData(newDevelopmentData);
    setFilteredCheckData(newCheckData);
  };

  return (
    <DataTablesContext.Provider
      value={{
        openAddDevelopmentItemModal,
        setOpenAddDevelopmentItemModal,
        openAddCheckItemModal,
        setOpenAddCheckItemModal,
        developmentData,
        filteredDevelopmentData,
        checkData,
        filteredCheckData,
        addDevelopmentItem,
        deleteDevelopmentItem,
        addCheckItem,
        deleteCheckItem,
        searchData
      }}
    >
      {children}
    </DataTablesContext.Provider>
  );
};

export default DataTablesProvider;
