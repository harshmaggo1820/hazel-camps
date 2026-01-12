import { Camp } from './types';

export const mockCamps: Camp[] = [
  {
    id: 1,
    name: 'Adventure Summer Camp',
    description: 'Experience outdoor adventures including hiking, rock climbing, and team building activities.',
    ageGroup: '8-14',
    location: 'Atlanta',
    activities: ['Hiking', 'Archery', 'Rock Climbing', 'Team Building'],
    price: 899,
    startDate: '2024-06-15',
    endDate: '2024-06-22',
    capacity: 50,
    enrolled: 45,
    featured: true,
    ageRange: { min: 8, max: 14 },
    pricing: { basePrice: 899, currency: 'USD', discountedPrice: 799, paymentPlan: 'Weekly' },
    reviews: [
      { id: 1, userName: 'John D.', rating: 5, comment: 'Amazing experience for my son!', date: '2024-06-23' },
      { id: 2, userName: 'Sarah M.', rating: 4, comment: 'Great activities and good instructors.', date: '2024-06-24' }
    ]
  },
  {
    id: 2,
    name: 'Tech Camp Georgia',
    description: 'Learn coding, robotics, and app development with experienced instructors.',
    ageGroup: '10-17',
    location: 'Peachtree',
    activities: ['Coding', 'Robotics', 'App Development', 'Game Design'],
    price: 1299,
    startDate: '2024-07-01',
    endDate: '2024-07-15',
    capacity: 40,
    enrolled: 38,
    featured: true,
    ageRange: { min: 10, max: 17 },
    pricing: { basePrice: 1299, currency: 'USD', discountedPrice: 1099, paymentPlan: 'Bi-Weekly' },
    reviews: [
      { id: 1, userName: 'Mike T.', rating: 5, comment: 'Best tech camp ever!', date: '2024-07-16' },
      { id: 2, userName: 'Emma S.', rating: 5, comment: 'My daughter loved learning coding here.', date: '2024-07-16' }
    ]
  },
  {
    id: 3,
    name: 'Arts & Music Camp',
    description: 'Explore visual arts, music production, and creative expression.',
    ageGroup: '6-13',
    location: 'Downtown Atlanta',
    activities: ['Painting', 'Music', 'Sculpture', 'Digital Art'],
    price: 799,
    startDate: '2024-06-10',
    endDate: '2024-06-24',
    capacity: 35,
    enrolled: 32,
    featured: false,
    ageRange: { min: 6, max: 13 },
    pricing: { basePrice: 799, currency: 'USD', discountedPrice: 699, paymentPlan: 'Weekly' },
    reviews: [
      { id: 1, userName: 'Lisa A.', rating: 4, comment: 'Great art instructors and facilities.', date: '2024-06-25' }
    ]
  }
];

export const camps = mockCamps;

export const locations = ['Atlanta', 'Peachtree', 'Downtown Atlanta'];

export const ageGroups = ['6-13', '8-14', '10-17', '6-18'];
