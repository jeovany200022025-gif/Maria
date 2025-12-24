
export type Language = 'pt' | 'en';

export interface InvestmentPlan {
  id: string;
  name: string;
  period: number;
  returnRate: number;
  minAmount: number;
  maxAmount: number;
  color: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  balance: number;
  invested: number;
  earnings: number;
}

export interface Translation {
  [key: string]: {
    pt: string;
    en: string;
  };
}
