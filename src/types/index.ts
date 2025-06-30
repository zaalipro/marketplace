import { PrismaClient } from '@prisma/client';
import { Listing as PrismaListing, User as PrismaUser } from '@prisma/client';

export type Listing = PrismaListing & {
  user: PrismaUser;
};

export type User = PrismaUser;

export type ListingFormData = {
  title: string;
  description: string;
  price: string;
  category: string;
  condition: string;
  images: string[];
};
