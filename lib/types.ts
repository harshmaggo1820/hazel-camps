export interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface AgeRange {
  min: number;
  max: number;
}

export interface Pricing {
  basePrice: number;
  discountedPrice?: number;
  currency: string;
  paymentPlan?: string;
}

export interface Camp {
  id: number;
  name: string;
  description: string;
  ageGroup: string;
  location: string;
  activities: string[];
  price: number;
  startDate: string;
  endDate: string;
  capacity: number;
  enrolled: number;
  imageUrl?: string;
  featured: boolean;
  reviews?: Review[];
  ageRange: AgeRange;
  pricing: Pricing;
}

export interface FilterOptions {
  ageGroup?: string;
  location?: string;
  priceRange?: [number, number];
  activities?: string[];
}

export interface SearchResult {
  camps: Camp[];
  total: number;
  page: number;
  pageSize: number;
}
