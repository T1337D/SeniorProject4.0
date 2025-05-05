import React, { useState } from 'react';
import { Mail, BookOpen, Globe2, Award, Monitor, Facebook, Instagram, Youtube, AtSign, Menu, X } from 'lucide-react';
import { SpeakerTooltip } from './components/SpeakerTooltip';
import { StatsCard } from './components/StatsCard';
import { ProgramSchedule } from './components/ProgramSchedule';
import { ChatWidget } from './components/ChatWidget';
import { speakers } from './data/speakers';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation - Fixed */}
      <nav className="bg-[#8C1515] text-white py-2 px-4 fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-end space-x-6 text-sm">
          <a href="#" className="hover:text-gray-200">Explore Our Programs</a>
          <a href="#" className="hover:text-gray-200">Contact Us</a>
          <a href="#" className="hover:text-gray-200">Support Us</a>
          <button className="hover:text-gray-200 flex items-center">
            <span>Search</span>
          </button>
        </div>
      </nav>

      {/* Main Navigation - Responsive */}
      <nav className="bg-white border-b shadow-sm py-4 px-4 fixed top-[32px] w-full z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <a href="#" className="text-[#8C1515] font-serif text-2xl">AI Explorers</a>
            <div className="text-gray-700 text-sm">Summer School</div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-[#8C1515]">About</a>
            <a href="#" className="text-gray-700 hover:text-[#8C1515]">Courses</a>
            <a href="#" className="text-gray-700 hover:text-[#8C1515]">Student Life</a>
            <a href="#" className="text-gray-700 hover:text-[#8C1515]">Admissions</a>
            <a href="#" className="text-gray-700 hover:text-[#8C1515]">Tuition and Financial Aid</a>
            <a href="#" className="text-gray-700 hover:text-[#8C1515]">Questions?</a>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-[#8C1515]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 px-4 space-y-2">
            <a href="#" className="block text-gray-700 hover:text-[#8C1515]">About</a>
            <a href="#" className="block text-gray-700 hover:text-[#8C1515]">Courses</a>
            <a href="#" className="block text-gray-700 hover:text-[#8C1515]">Student Life</a>
            <a href="#" className="block text-gray-700 hover:text-[#8C1515]">Admissions</a>
            <a href="#" className="block text-gray-700 hover:text-[#8C1515]">Tuition and Financial Aid</a>
            <a href="#" className="block text-gray-700 hover:text-[#8C1515]">Questions?</a>
          </div>
        )}
      </nav>

      {/* Content wrapper with padding for fixed headers */}
      <div className="pt-[96px]">
        {/* Hero Section */}
        <div 
          className="relative h-[600px] bg-cover bg-center" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1598018553943-29ace5bf9867?auto=format&fit=crop&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 text-white">
              <h1 className="text-5xl font-bold mb-6">Expand Your Intellectual Horizons</h1>
              <p className="text-xl max-w-3xl">
                AI Explorers Summer School inspires academically motivated Pre-Collegiate and Collegiate students 
                on their journey to becoming leaders that will transform the future. In an inclusive classroom setting without the pressure of grades,
                 students explore advanced study and build bonds with peers from around the world."
              </p>
            </div>
          </div>
        </div>

        {/* Program Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Discover. Explore. Grow.</h2>
              <p className="text-gray-700 max-w-3xl">
                
                AI Explorers Summer School provides participants with an immersive experience and challenges
                 students with advanced content not typically found in many curricula.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="flex gap-6">
                <BookOpen className="w-12 h-12 text-[#8C1515] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-4">Single-Subject Study</h3>
                  <p className="text-gray-700">
                  
                    Participants will engage in interactive courses that explore fundamental and advanced concepts
                     in artificial intelligence. Topics include machine learning, natural language processing, computer vision, and the ethical implications of AI, with hands-on projects to apply their knowledge in real-world scenarios.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <Globe2 className="w-12 h-12 text-[#8C1515] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-4">Global Focus and Real Connections</h3>
                  <p className="text-gray-700">
                    Bright peers from around the world create a truly special and unforgettable 
                    experience. Study and discuss academic topics alongside peers who share similar 
                    talents, interests, and curiosity.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <Monitor className="w-12 h-12 text-[#8C1515] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-4">Live Online Classes</h3>
                  <p className="text-gray-700">
                  
                    If you can't make it in person, our live online meetings allow students to engage in
                     every aspect of a course through real-time discussions in which instructors and students see, hear, and interact with one another.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <Award className="w-12 h-12 text-[#8C1515] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-4">Learn from Scholarly Instructors</h3>
                  <p className="text-gray-700">
                    Attend courses designed, created, and taught by instructors who are knowledgeable 
                    in their fields and passionate about teaching.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-center mb-16">Highlights</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
              <div>
                <div className="text-[#8C1515] text-4xl font-bold mb-4">8-11</div>
                <div className="text-gray-700">Current Grade Level</div>
              </div>
              <div>
                <div className="text-[#8C1515] text-4xl font-bold mb-4">70</div>
                <div className="text-gray-700">Courses Offered Each Summer</div>
              </div>
              <div>
                <div className="text-[#8C1515] text-4xl font-bold mb-4">30</div>
                <div className="text-gray-700">Average Class Size</div>
              </div>
              <div>
                <div className="text-[#8C1515] text-4xl font-bold mb-4">50</div>
                <div className="text-gray-700">States Typically Represented</div>
              </div>
              <div>
                <div className="text-[#8C1515] text-4xl font-bold mb-4">50+</div>
                <div className="text-gray-700">Countries Typically Represented</div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="py-20 px-4 bg-[#8C1515]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              BUILDING CONFIDENCE, CONNECTIONS, AND COMMUNITY
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <StatsCard
                percentage={83}
                description="of students were more prepared to apply to AI internships as a result of this program"
                color="border-emerald-500"
              />
              <StatsCard
                percentage={80}
                description="of students were able to connect with AI industry professionals as a result of the program"
                color="border-orange-500"
              />
              <StatsCard
                percentage={73}
                description="of students felt like they belong to a community of peers in AI as a result of this program"
                color="border-red-500"
              />
            </div>
          </div>
        </section>

        {/* Program Schedule Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <ProgramSchedule />
          </div>
        </section>        

        {/* Speakers & Mentors Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-center mb-16">Meet the Speakers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
              {speakers.map((speaker) => (
                <SpeakerTooltip
                  key={speaker.id}
                  name={speaker.name}
                  title={speaker.title}
                  bio={speaker.bio}
                >
                  <div className="cursor-pointer">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full aspect-square object-cover rounded-lg mb-3"
                    />
                    <h3 className="font-semibold text-lg">{speaker.name}</h3>
                  </div>
                </SpeakerTooltip>
              ))}
            </div>
          </div>
        </section>


        {/* Application Status */}
        <section className="bg-[#00505C] py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white p-8 rounded-lg flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold mb-2">Application Now Closed</h2>
                <p className="text-gray-700">
                  Our application for the 2025 AI Explorers Summer School is now closed. 
                  
                </p>
              </div>
              {/* Aplication Button
              <button className="bg-[#8C1515] text-white px-6 py-3 rounded hover:bg-[#66100F]">
                Apply Now
              </button>
              */}
            </div>
          </div>
        </section>


        {/* Program Dates */}
        <section className="bg-[#2E2D29] text-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">2025 Program Dates</h2>
            <p className="mb-12 max-w-3xl">
            
              Intensive three-day courses will be offered for this summer. The sessions will run from June 28-30th and requires synchronous daily attendance.
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex gap-6">
                <div className="w-16 h-16 border-2 flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">June 28</h3>
                  <p>Basics</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-16 h-16 border-2 flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">June 29</h3>
                  <p>Deeper Understanding</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-16 h-16 border-2 flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">June 30</h3>
                  <p>Labs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

{/*

        {/* Director Quote Section *
        <section className="bg-[#8C1515] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-3xl font-light leading-relaxed mb-8">
              "AI Explorers inspires academically motivated students 
              on their journey to becoming leaders that will transform the future. In an inclusive 
              classroom setting without the pressure of grades, students explore advanced study and 
              build bonds with peers from around the world."
            </blockquote>
            <p className="text-xl font-semibold">Sara Mumolo</p>
            <p className="text-lg">Director of Online Outreach Programs</p>
          </div>
        </section>

*/}        

{/*
        {/* Showcasing photo Section *
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?auto=format&fit=crop&q=80" 
              alt="Stanford Campus" 
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
            <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center">
              AI Explorers inspires students from around the world to explore 
              academically rigorous learning opportunities through online and residential enrichment 
              programs. Committed to our school's ideals of academic excellence, we foster 
              inclusive and accessible communities that enhance learning for the next generation of 
              global citizens.
            </p>
          </div>
        </section>

*/}


{/*       

        {/* Student Testimonials *
        <section className="bg-gray-100 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Hear from Our Students</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80" 
                  alt="Student studying" 
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center">
                <div>
                  <blockquote className="text-xl italic mb-6">
                    "My experience was both exciting and enriching. I got to interact with people 
                    from all over the world, and I found peers who shared common interests. It was an 
                    incredible opportunity to help me grow as a person and develop new skills to use in 
                    the future."
                  </blockquote>
                  <p className="text-gray-700">
                    - Participant, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

*/}     



{/*
        {/* Photo Section *
        <section className="bg-gray-100 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Photos</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80" 
                  alt="Student studying" 
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80" 
                  alt="Student studying" 
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

*/}

        {/* Map Section */}
        <section className="bg-[#8C1515] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light leading-relaxed mb-8">Visitor Map</h2>
            <div className="flex justify-center">
            <img 
              src="https://mapmyvisitors.com/map.png?cl=080808&w=753&t=n&d=BkyeK9AhJPLWBwhLczb3lZI3hIMIVxz3xtvjM0-S5Xk&co=ffffff&ct=808080" 
              alt="Visitor Map" 
            />
            </div>
          </div>
        </section>   
      
        {/* Find Yourself at AI Explorers */}
        <section 
          className="relative h-[500px] bg-cover bg-center" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="text-white">
              <h2 className="text-5xl font-bold mb-12">Explore the Future</h2>
              <div className="flex gap-8">
                <a href="#" className="text-xl border-2 border-white px-8 py-3 hover:bg-white hover:text-[#8C1515] transition-colors">
                  View Our Course Catalog
                </a>
                <a href="#" className="text-xl border-2 border-white px-8 py-3 hover:bg-white hover:text-[#8C1515] transition-colors">
                  Plan Your Summer
                </a>
              </div>
            </div>
          </div>
        </section>

{/* 
        {/* Mailing List Section }
        <section id="mailinglist" className="bg-[#8C1515] py-20 px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Mail className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Join Our Mailing List</h2>
            <p className="text-xl mb-8">Stay updated with program announcements and deadlines</p>
            <form className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full text-gray-900 w-full md:w-96"
              />
              <button className="bg-white text-[#8C1515] px-8 py-3 rounded-full font-semibold hover:bg-gray-100">
                Subscribe
              </button>
            </form>
          </div>
        </section>        

*/}


        {/* Footer */}
        <footer className="bg-[#2E2D29] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <h3 className="text-lg font-bold mb-4">WHO WE ARE</h3>
                <div className="mb-6">
                  <div className="text-xl font-serif">AI Explorers</div>
                  <div className="text-sm">Summer School</div>
                </div>
                <p className="text-sm mb-6">
                  AI Explorers advances the education of academically motivated, 
                  intellectually curious, students. We offer a variety of programs designed 
                  to meet the needs of students everywhere.
                </p>
                <a href="#" className="text-sm hover:underline">Explore Our Programs</a>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">CONNECT WITH US</h3>
                <div className="mb-4">
                  <p>AI Explorers Summer School</p>
                  <p>Academy Hall</p>
                  <p>415 Broadway</p>
                  <p>Redwood City, CA 94063</p>
                </div>
                <p className="text-sm mb-6">
                  Please note that we are unable to welcome drop-in visitors to our Redwood City office.
                </p>
                <h4 className="font-bold mb-2">Contact Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-gray-300"><Facebook size={24} /></a>
                  <a href="#" className="hover:text-gray-300"><Instagram size={24} /></a>
                  <a href="#" className="hover:text-gray-300"><Youtube size={24} /></a>
                  <a href="#" className="hover:text-gray-300"><AtSign size={24} /></a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">NAVIGATE</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">About</a></li>
                  <li><a href="#" className="hover:underline">Courses</a></li>
                  <li><a href="#" className="hover:underline">Student Life</a></li>
                  <li><a href="#" className="hover:underline">Admissions</a></li>
                  <li><a href="#" className="hover:underline">Tuition and Financial Aid</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">SUPPORT US</h3>
                <p className="mb-6">
                  Your gift to AI Explorers benefits instructional and outreach activities.
                </p>
                <button className="bg-[#FDB515] text-black px-6 py-2 font-bold hover:bg-[#FDC545]">
                  MAKE A GIFT
                </button>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm mb-4">
                <a href="#" className="hover:underline">AI Explorers Home</a>
                <a href="#" className="hover:underline">Maps & Directions</a>
                <a href="#" className="hover:underline">Search</a>
                <a href="#" className="hover:underline">Emergency Info</a>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-400">
                <a href="#" className="hover:underline">Terms of Use</a>
                <a href="#" className="hover:underline">Privacy</a>
                <a href="#" className="hover:underline">Copyright</a>
                <a href="#" className="hover:underline">Trademarks</a>
                <a href="#" className="hover:underline">Non-Discrimination</a>
                <a href="#" className="hover:underline">Accessibility</a>
              </div>
              <div className="text-sm text-gray-400 mt-4">
                Website by Triniti Dungey
              </div>
            </div>
          </div>
        </footer>

        {/* Chat Widget */}
        <ChatWidget />
      </div>
    </div>
  );
}

export default App;