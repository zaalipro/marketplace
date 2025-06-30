export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  image?: string;
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  condition: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  user: User;
}

export interface ListingFormData {
  title: string;
  description: string;
  price: string;
  category: string;
  condition: string;
  images: string[];
}
