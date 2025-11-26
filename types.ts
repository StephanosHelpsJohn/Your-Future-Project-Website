import React from 'react';

export interface Message {
  role: 'user' | 'model';
  content: string;
  isError?: boolean;
}

export enum Page {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  APPROACH = 'APPROACH',
  SERVICES = 'SERVICES',
  SIGNUP = 'SIGNUP',
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}