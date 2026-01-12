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
