
import { InvestmentPlan } from './types';

export const PLANS: InvestmentPlan[] = [
  { id: '1', name: 'Bronze', period: 10, returnRate: 25, minAmount: 10000, maxAmount: 50000, color: '#CD7F32' },
  { id: '2', name: 'Silver', period: 10, returnRate: 35, minAmount: 50000, maxAmount: 200000, color: '#C0C0C0' },
  { id: '3', name: 'Gold', period: 20, returnRate: 45, minAmount: 200000, maxAmount: 1000000, color: '#FFD700' },
  { id: '4', name: 'Platinum', period: 20, returnRate: 55, minAmount: 1000000, maxAmount: 5000000, color: '#E5E4E2' },
  { id: '5', name: 'Diamond', period: 20, returnRate: 65, minAmount: 5000000, maxAmount: 15000000, color: '#B9F2FF' },
  { id: '6', name: 'Elite', period: 20, returnRate: 75, minAmount: 15000000, maxAmount: 50000000, color: '#0A4D8C' },
];

export const FAQ_ITEMS = [
  {
    q_pt: 'Como faço para investir?',
    a_pt: 'Basta criar uma conta, escolher um plano e realizar o depósito via transferência bancária ou carteira digital suportada.',
    q_en: 'How do I invest?',
    a_en: 'Simply create an account, choose a plan, and make a deposit via bank transfer or supported digital wallet.'
  },
  {
    q_pt: 'Quanto tempo demora o saque?',
    a_pt: 'As solicitações de saque são processadas em até 24 horas úteis após o término do período de investimento.',
    q_en: 'How long does withdrawal take?',
    a_en: 'Withdrawal requests are processed within 24 business hours after the investment period ends.'
  },
  {
    q_pt: 'É seguro?',
    a_pt: 'Sim, utilizamos criptografia de ponta e sistemas auditados para garantir a segurança dos seus fundos.',
    q_en: 'Is it safe?',
    a_en: 'Yes, we use high-end encryption and audited systems to ensure the security of your funds.'
  }
];
