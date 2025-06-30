export const LISTING_CATEGORIES = {
  ELECTRONICS: 'electronics',
  FASHION: 'fashion',
  HOME: 'home',
} as const;

export const SORT_OPTIONS = {
  PRICE_LOW: 'price-low',
  PRICE_HIGH: 'price-high',
  NEWEST: 'newest',
} as const;

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3003/api';
