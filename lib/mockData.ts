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
  },
  {
    id: 3,
    name: 'Arts & Music Camp',
    description: 'Explore visual arts, music production, and creative expression.',
    ageGroup: '6-13',
    location: 'Downtown Atlanta',
    activities: ['Painting', 'Music', 'Sculpture', 'Digital Art'],
    price: 799,
    startDate: '2024-06-24',
    endDate: '2024-07-08',
    capacity: 35,
    enrolled: 32,
    featured: false,
  },
];

export const locations = ['Atlanta', 'Peachtree', 'Downtown Atlanta', 'Marietta', 'Sandy Springs'];
export const ageGroups = ['6-8', '8-10', '10-13', '13-17'];
export const activities = ['Hiking', 'Coding', 'Music', 'Art', 'Sports', 'Drama', 'Science', 'Robotics'];
