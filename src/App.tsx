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
      <nav className="bg-white border-b shadow-sm py-5 px-4 fixed top-[40px] w-full z-40">
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
              Are you ready to dive into the fascinating world of Artificial Intelligence? Our one-week Summer
              Camp is designed for undergraduate students eager to explore cutting-edge AI concepts and gain 
              valuable hands-on experience. Throughout the week, you will learn the fundamentals of AI,
              machine learning, and deep learning, and apply your knowledge to real-world projects. Engage in
              exciting topics such as Emotional Analytics, Fake News Detection, Deep Learning, and Visual
              Analytics, all while working with peers who share your passion for innovation.
              </p>
              <p className="text-xl max-w-3xl">
                Whether you are just starting your journey in AI or looking to deepen your understanding, this
                camp will provide you with the tools, knowledge, and inspiration to take your skills to the next
                level. Don’t miss this opportunity to build your expertise, strengthen your resume, and be part of
                the future of technology.
              </p>
            </div>
          </div>
        </div>

                {/* Showcasing photo Section */}
                <section className="pt-12 pb-16 px-4 bg-white">
                  <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-10">Location</h2>
                    <img 
                      src="https://keystoneacademic-res.cloudinary.com/image/upload/element/17/174625_174449_SQUpic.jpg" 
                      alt="Muscat, Oman" 
                      className="w-full h-[320px] object-cover rounded-lg mb-6"
                    />
                    <div className="text-center space-y-6 text-gray-700 text-base leading-relaxed">
                      <p>
                        The AI Explorers Summer School will take place in <strong>Muscat</strong>, the vibrant capital of Oman, celebrated for its rich cultural heritage, stunning architecture, and breathtaking coastal scenery. Nestled between the Arabian Sea and majestic mountains, Muscat offers a captivating blend of tradition and modernity—an ideal backdrop for academic and professional exploration.
                      </p>
                      <p>
                        Attendees will experience the city’s historic forts, lively souqs, and world-renowned hospitality. Participants will also visit two of Oman’s premier academic institutions: <strong>GUtech</strong> (German University of Technology in Oman), known for innovation and international collaboration, and <strong>Sultan Qaboos University</strong>, the nation’s leading research university. These visits will highlight Oman’s dynamic academic landscape and foster meaningful global partnerships.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Program Highlights */}
                <section className="py-20 px-4 bg-gray-50">
                  <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-center mb-16">Program Highlights</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                      <div>
                        <div className="text-[#8C1515] text-4xl font-bold mb-4">5</div>
                        <div className="text-gray-700">Days of Intensive AI Exploration</div>
                      </div>
                      <div>
                        <div className="text-[#8C1515] text-4xl font-bold mb-4">6+</div>
                        <div className="text-gray-700">Expert Lecturers & Mentors</div>
                      </div>
                      <div>
                        <div className="text-[#8C1515] text-4xl font-bold mb-4">4</div>
                        <div className="text-gray-700">Real-World AI Projects</div>
                      </div>
                      <div>
                        <div className="text-[#8C1515] text-4xl font-bold mb-4">2</div>
                        <div className="text-gray-700">Campus Visits</div>
                      </div>
                    </div>
                  </div>
                </section>

        {/* Impactful Stats Section */}
        <section className="py-20 px-4 bg-[#8C1515]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Experience. Empowerment. Exploration.
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <StatsCard
                percentage={90}
                description="of participants felt more confident in their AI skills after attending."
                color="border-emerald-500"
              />
              <StatsCard
                percentage={85}
                description="of attendees formed valuable academic and professional connections."
                color="border-orange-500"
              />
              <StatsCard
                percentage={95}
                description="of students would recommend the program to peers worldwide."
                color="border-red-500"
              />
            </div>
          </div>
        </section>

        {/* Porgram Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Schedule</h2>
              <p className="text-gray-700 max-w-3xl">
                AI Explorers Summer School offers a dynamic blend of foundational learning, hands-on application, and professional growth—designed to prepare students for real-world success in the field of artificial intelligence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="flex gap-6">
                <BookOpen className="w-12 h-12 text-[#8C1515] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-4">Foundations to Frontiers</h3>
                  <p className="text-gray-700">
                    Start each day exploring a new area of artificial intelligence—from core principles to advanced topics like Deep Learning, Emotional Analytics, Fake News Detection, and Visual Analytics. Students gain a broad and solid understanding of how AI is shaping the world.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <Globe2 className="w-12 h-12 text-[#8C1515] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-4">Hands-On Labs & Projects</h3>
                  <p className="text-gray-700">
                    Afternoons are dedicated to building. Students apply concepts learned in the morning through guided labs and real-world projects—culminating in a custom AI project they can showcase with pride.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <Monitor className="w-12 h-12 text-[#8C1515] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-4">Career Prep & Professional Insights</h3>
                  <p className="text-gray-700">
                    Throughout the week, students attend career talks, receive resume advice tailored for AI internships, and learn how to navigate the growing tech landscape through insider tips and resources.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <Award className="w-12 h-12 text-[#8C1515] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-4">Networking & Community</h3>
                  <p className="text-gray-700">
                    From day one, students interact with faculty and industry professionals, gaining valuable connections and insight. The program fosters a collaborative environment where curiosity is celebrated and lasting bonds are formed.
                  </p>
                </div>
              </div>
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
                  <div className="cursor-pointer text-center">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-[200px] h-[200px] object-cover rounded-lg mb-3"
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


 
        {/* Program Dates Section */}
        <section className="bg-[#2E2D29] text-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">2025 Program Dates</h2>
            <p className="mb-12 max-w-3xl">
              Join us for five transformative days from June 28th to July 2nd. Each day brings unique topics, labs, and mentorship experiences that build on the last—preparing you for real-world innovation in AI.
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex gap-6">
                <div className="w-16 h-16 border-2 flex items-center justify-center text-2xl font-bold">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">June 28</h3>
                  <p>Introduction to AI + Team Formation</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-16 h-16 border-2 flex items-center justify-center text-2xl font-bold">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">June 29</h3>
                  <p>Deep Learning + Visual Analytics Labs</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-16 h-16 border-2 flex items-center justify-center text-2xl font-bold">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">June 30</h3>
                  <p>Emotional Analytics + Ethics in AI</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-16 h-16 border-2 flex items-center justify-center text-2xl font-bold">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">July 1</h3>
                  <p>Fake News Detection Project + Career Prep</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-16 h-16 border-2 flex items-center justify-center text-2xl font-bold">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">July 2</h3>
                  <p>Final Presentations + Campus Visit to GUtech</p>
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