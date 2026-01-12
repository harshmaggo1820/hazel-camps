// Utility functions for the MSQ RC application

export const formatPrice = (price: number): string => {
  return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
};

export const formatDate = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const calculateAge = (dateOfBirth: Date | string): number => {
  const today = new Date();
  const birthDate = typeof dateOfBirth === 'string' ? new Date(dateOfBirth) : dateOfBirth;
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

export const searchCamps = (
  camps: any[],
  query: string,
  filters?: any
): any[] => {
  return camps.filter((camp) => {
    // Search by name or location
    const matchesQuery = query.toLowerCase() === '' ||
      camp.name.toLowerCase().includes(query.toLowerCase()) ||
      camp.location.toLowerCase().includes(query.toLowerCase());

    if (!matchesQuery) return false;

    // Apply filters if provided
    if (filters) {
      if (filters.ageMin !== undefined && camp.ageRange.min < filters.ageMin) return false;
      if (filters.ageMax !== undefined && camp.ageRange.max > filters.ageMax) return false;
      if (filters.priceMin !== undefined && camp.pricing.basePrice < filters.priceMin) return false;
      if (filters.priceMax !== undefined && camp.pricing.basePrice > filters.priceMax) return false;
      if (filters.activities?.length > 0) {
        const hasActivity = filters.activities.some((activity: string) =>
          camp.activities.includes(activity)
        );
        if (!hasActivity) return false;
      }
      if (filters.location && !camp.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }
    }

    return true;
  });
};

export const groupBy = <T, K extends keyof any>(
  array: T[],
  getKey: (item: T) => K
): Record<K, T[]> => {
  return array.reduce(
    (result, item) => {
      const key = getKey(item);
      (result[key] ||= []).push(item);
      return result;
    },
    {} as Record<K, T[]>
  );
};

export const sortBy = <T>(
  array: T[],
  getKey: (item: T) => any,
  order: 'asc' | 'desc' = 'asc'
): T[] => {
  return [...array].sort((a, b) => {
    const keyA = getKey(a);
    const keyB = getKey(b);
    if (keyA < keyB) return order === 'asc' ? -1 : 1;
    if (keyA > keyB) return order === 'asc' ? 1 : -1;
    return 0;
  });
};

export const removeDuplicates = <T>(
  array: T[],
  getKey?: (item: T) => any
): T[] => {
  if (!getKey) {
    return Array.from(new Set(array));
  }
  const seen = new Set();
  return array.filter((item) => {
    const key = getKey(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};
