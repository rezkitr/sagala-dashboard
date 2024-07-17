import React from 'react';

export interface INavItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}

export interface IDevelopmentData {
  id: string;
  name: string;
  tech: string[];
  date: Date;
  progress: number;
}
