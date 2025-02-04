/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import React, { createContext, useState } from 'react';

import { ICheckItem, IComplexItem, IDevelopmentItem, IFourColumnItem } from '@/interfaces';
import { statusTypeData, techTypeData } from '@/utils/config';

interface DataTablesContextValues {
  openAddDevelopmentItemModal: boolean;
  setOpenAddDevelopmentItemModal: (v: boolean) => void;
  openAddCheckItemModal: boolean;
  setOpenAddCheckItemModal: (v: boolean) => void;
  openAddFourColumnItemModal: boolean;
  setOpenAddFourColumnItemModal: (v: boolean) => void;
  openAddComplexItemModal: boolean;
  setOpenAddComplexItemModal: (v: boolean) => void;
  developmentData: IDevelopmentItem[];
  filteredDevelopmentData: IDevelopmentItem[] | null;
  checkData: ICheckItem[];
  filteredCheckData: ICheckItem[] | null;
  fourColumnData: IFourColumnItem[];
  filteredFourColumnData: IFourColumnItem[] | null;
  complexData: IComplexItem[];
  filteredComplexData: IComplexItem[] | null;
  addDevelopmentItem: (d: IDevelopmentItem) => void;
  deleteDevelopmentItem: (id: string) => void;
  addCheckItem: (d: ICheckItem) => void;
  deleteCheckItem: (id: string) => void;
  addFourColumnItem: (d: IFourColumnItem) => void;
  deleteFourColumnItem: (id: string) => void;
  addComplexItem: (d: IComplexItem) => void;
  deleteComplexItem: (id: string) => void;
  searchData: (k: string) => void;
}

// @ts-ignore
export const DataTablesContext = createContext<DataTablesContextValues>();

const DataTablesProvider = ({ children }: { children: React.ReactNode }) => {
  const [openAddDevelopmentItemModal, setOpenAddDevelopmentItemModal] = useState<boolean>(false);
  const [openAddCheckItemModal, setOpenAddCheckItemModal] = useState<boolean>(false);
  const [openAddFourColumnItemModal, setOpenAddFourColumnItemModal] = useState<boolean>(false);
  const [openAddComplexItemModal, setOpenAddComplexItemModal] = useState<boolean>(false);
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
  const [fourColumnData, setFourColumnData] = useState<IFourColumnItem[]>([
    {
      id: 'column-1',
      name: 'Marketplace',
      progress: 28,
      qty: 19,
      date: new Date()
    }
  ]);
  const [filteredFourColumnData, setFilteredFourColumnData] = useState<IFourColumnItem[] | null>(
    null
  );
  const [complexData, setComplexData] = useState<IComplexItem[]>([
    {
      id: 'complex-1',
      name: 'Marketplace',
      progress: 76,
      status: statusTypeData.success.key,
      date: new Date()
    }
  ]);
  const [filteredComplexData, setFilteredComplexData] = useState<IComplexItem[] | null>(null);

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

  const addFourColumnItem = (item: IFourColumnItem) => {
    const newData = [...fourColumnData, item];
    setFourColumnData(newData);
  };

  const deleteFourColumnItem = (id: string) => {
    const newData = fourColumnData.filter((item) => item.id !== id);
    setFourColumnData(newData);
  };

  const addComplexItem = (item: IComplexItem) => {
    const newData = [...complexData, item];
    setComplexData(newData);
  };

  const deleteComplexItem = (id: string) => {
    const newData = complexData.filter((item) => item.id !== id);
    setComplexData(newData);
  };

  const searchData = (keyword: string) => {
    if (!keyword) {
      setFilteredDevelopmentData(null);
      setFilteredCheckData(null);
      setFilteredFourColumnData(null);
      setFilteredComplexData(null);
      return;
    }
    const newDevelopmentData = developmentData.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    );
    const newCheckData = checkData.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    );
    const newFourColumnData = fourColumnData.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    );
    const newComplexData = complexData.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredDevelopmentData(newDevelopmentData);
    setFilteredCheckData(newCheckData);
    setFilteredFourColumnData(newFourColumnData);
    setFilteredComplexData(newComplexData);
  };

  return (
    <DataTablesContext.Provider
      value={{
        openAddDevelopmentItemModal,
        setOpenAddDevelopmentItemModal,
        openAddCheckItemModal,
        setOpenAddCheckItemModal,
        openAddFourColumnItemModal,
        setOpenAddFourColumnItemModal,
        openAddComplexItemModal,
        setOpenAddComplexItemModal,
        developmentData,
        filteredDevelopmentData,
        checkData,
        filteredCheckData,
        fourColumnData,
        filteredFourColumnData,
        complexData,
        filteredComplexData,
        addDevelopmentItem,
        deleteDevelopmentItem,
        addCheckItem,
        deleteCheckItem,
        addFourColumnItem,
        deleteFourColumnItem,
        addComplexItem,
        deleteComplexItem,
        searchData
      }}
    >
      {children}
    </DataTablesContext.Provider>
  );
};

export default DataTablesProvider;
