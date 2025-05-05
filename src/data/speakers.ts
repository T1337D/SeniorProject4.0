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
    image: 'https://cs.acadiau.ca/assets/images/5/eshakshuki2-38a7bf98.jpg' // Replace with real image
  },
  {
    id: '3',
    name: 'Dr. Haroon Malik',
    title: 'Associate Professor and Department Chair, Marshall University, USA',
    bio: 'Dr. Malik focuses on Emotional Analytics and Big Data, exploring how AI interprets emotional signals and manages large-scale data systems for smarter decisions.',
    image: 'https://www.marshall.edu/cecs/files/malik-p-1-681x1024.jpg' // Replace with real image
  },
  {
    id: '4',
    name: 'Prof. Stephane Galland',
    title: 'Professor, University of Technology Belfort-Montbéliard, France',
    bio: 'Professor Galland’s research involves intelligent agents and data visualization. He focuses on building adaptive systems and creating interpretable visual analytics.',
    image: 'https://i1.rgstatic.net/ii/profile.image/11431281166958364-1686503413647_Q512/Stephane-Galland.jpg' // Replace with real image
  },
  {
    id: '5',
    name: 'Dr. Ananya Jana',
    title: 'Assistant Professor, Marshall University, USA',
    bio: 'Dr. Jana specializes in Deep Learning and Medical Imaging. Her work enhances diagnostics and supports clinical decisions through AI-driven imaging analysis.',
    image: 'https://www.marshall.edu/cecs/files/Jana-p.jpg' // Replace with real image
  }
  // Add more speakers as needed
];
  
