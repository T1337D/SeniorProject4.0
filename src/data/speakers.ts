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
    name: 'Dr. Nafaa Jabeur',
    title: 'Associate Professor, GUtech University Oman',
    bio: 'Dr. Nafaa brings expertise in AI for Intelligent Transportation Systems. His research covers smart mobility, autonomous vehicles, and optimizing transportation using AI.',
    image: 'https://media.licdn.com/dms/image/v2/C5103AQElSQEku6LLAw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516872573531?e=2147483647&v=beta&t=eOl0tPwtlD1GeU7nR3XMhpklGagOw9Mki90zPW1CBQs' // Replace with real image
  },
  {
    id: '2',
    name: 'Dr. Elhadi Shakshuki',
    title: 'Professor & Graduate Chair, Acadia University, Canada',
    bio: 'Dr. Elhadi specializes in ubiquitous and pervasive computing, focusing on AI-enhanced environments, context-aware systems, and intelligent human-computer interaction.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&h=200' // Replace with real image
  },
  {
    id: '3',
    name: 'Dr. Haroon Malik',
    title: 'Associate Professor and Department Chair, Marshall University, USA',
    bio: 'Dr. Malik focuses on Emotional Analytics and Big Data, exploring how AI interprets emotional signals and manages large-scale data systems for smarter decisions.',
    image: 'https://images.unsplash.com/photo-1581090700227-1e8f48b1fbd4?auto=format&fit=crop&w=200&h=200' // Replace with real image
  },
  {
    id: '4',
    name: 'Prof. Stephane Galland',
    title: 'Professor, University of Technology Belfort-Montbéliard, France',
    bio: 'Professor Galland’s research involves intelligent agents and data visualization. He focuses on building adaptive systems and creating interpretable visual analytics.',
    image: 'https://images.unsplash.com/photo-1589831455371-7c58c3e6c204?auto=format&fit=crop&w=200&h=200' // Replace with real image
  },
  {
    id: '5',
    name: 'Dr. Ananya Jana',
    title: 'Assistant Professor, Marshall University, USA',
    bio: 'Dr. Jana specializes in Deep Learning and Medical Imaging. Her work enhances diagnostics and supports clinical decisions through AI-driven imaging analysis.',
    image: 'https://images.unsplash.com/photo-1551836022-cf6e2cdd4a9f?auto=format&fit=crop&w=200&h=200' // Replace with real image
  }
  // Add more speakers as needed
];
  
