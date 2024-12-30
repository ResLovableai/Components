import { CardType } from '../types';

const CARD_TYPES: CardType[] = [
  {
    name: 'visa',
    pattern: /^4/,
    format: /(\d{1,4})/g
  },
  {
    name: 'mastercard',
    pattern: /^(5[1-5]|2[2-7])/,
    format: /(\d{1,4})/g
  },
  // Add more card types as needed
];

export const detectCardType = (number: string): string => {
  const cleanNumber = number.replace(/\D/g, '');
  const foundType = CARD_TYPES.find(card => card.pattern.test(cleanNumber));
  return foundType?.name || '';
};

export const formatCreditCard = (value: string, mask: boolean): string => {
  const cleanValue = value.replace(/\D/g, '');
  
  if (mask) {
    if (cleanValue.length < 4) return cleanValue;
    return `${cleanValue.slice(0, 2)}${'•'.repeat(cleanValue.length - 6)}${cleanValue.slice(-4)}`;
  }

  const cardType = CARD_TYPES.find(card => card.pattern.test(cleanValue));
  if (!cardType) return cleanValue;

  const matches = cleanValue.match(cardType.format) || [];
  return matches.join(' ').trim();
};