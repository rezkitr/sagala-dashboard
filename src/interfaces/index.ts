import React from 'react';

export interface INavItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}

export interface IDevelopmentItem {
  id: string;
  name: string;
  tech: string[];
  date: Date;
  progress: number;
}
