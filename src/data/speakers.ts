export interface Speaker {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
}

export const speakers: Speaker[] = [
  {
    id: '1',
    name: 'Laurie Novak',
    title: 'Professor of Computer Science',
    bio: 'Dr. Novak specializes in artificial intelligence and machine learning, with over 15 years of experience in the field.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: '2',
    name: 'Jesse Spencer-Smith',
    title: 'Data Science Director',
    bio: 'Dr. Spencer-Smith leads cutting-edge research in data science and its applications in various industries.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200'
  },
  // Add more speakers as needed
];