import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content:
        "Welcome to AI Explorers! I'm an assistant here to help answer your questions about our programs. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    const lowerInput = userMessage.toLowerCase();
    let botReply = '';

    // Friendly greetings and farewells
    if (
      lowerInput.includes('hello') ||
      lowerInput.includes('hi') ||
      lowerInput.includes('hey') ||
      lowerInput.includes('good morning') ||
      lowerInput.includes('good afternoon') ||
      lowerInput.includes('greetings')
    ) {
      botReply =
        'Hello! 👋 I’m here to help you with anything related to the AI Explorers program!';
    } else if (
      lowerInput.includes('bye') ||
      lowerInput.includes('goodbye') ||
      lowerInput.includes('see you') ||
      lowerInput.includes('farewell') ||
      lowerInput.includes('thanks') ||
      lowerInput.includes('thank you')
    ) {
      botReply =
        'Goodbye! 😊 Feel free to come back if you have more questions. Have a great day!';
    }
    // Static Q&A responses
    else if (
      lowerInput.includes('date') ||
      lowerInput.includes('when') ||
      lowerInput.includes('start') ||
      lowerInput.includes('begin')
    ) {
      botReply =
        'The AI Explorers Summer School runs from June 28 to June 30.';
    } else if (
      lowerInput.includes('location') ||
      lowerInput.includes('where') ||
      lowerInput.includes('held') ||
      lowerInput.includes('hosted')
    ) {
      botReply =
        'The program is hosted online, allowing students to participate from anywhere.';
    } else if (
      lowerInput.includes('apply') ||
      lowerInput.includes('application') ||
      lowerInput.includes('admission')
    ) {
      botReply =
        'You can apply through our website on the Admissions page. Ensure to submit your application before the deadline.';
    } else if (
      lowerInput.includes('cost') ||
      lowerInput.includes('price') ||
      lowerInput.includes('fee') ||
      lowerInput.includes('tuition')
    ) {
      botReply = 'The program is free for all admitted students.';
    } else if (
      lowerInput.includes('ai explorers') ||
      lowerInput.includes('what is') ||
      lowerInput.includes('program about')
    ) {
      botReply =
        'AI Explorers is a 3-day summer program where students learn about artificial intelligence, coding, and real-world tech skills.';
    } else if (
      lowerInput.includes('age') ||
      lowerInput.includes('grade') ||
      lowerInput.includes('who can join') ||
      lowerInput.includes('eligibility')
    ) {
      botReply =
        'The program is open to high school juniors, seniors, and early college students interested in technology.';
    } else if (
      lowerInput.includes('schedule') ||
      lowerInput.includes('daily') ||
      lowerInput.includes('routine') ||
      lowerInput.includes('agenda')
    ) {
      botReply =
        'Each day includes lectures, hands-on coding sessions, guest speakers, and project work.';
    } else if (
      lowerInput.includes('speaker') ||
      lowerInput.includes('guest') ||
      lowerInput.includes('talk') ||
      lowerInput.includes('lecturer')
    ) {
      botReply =
        'Our guest speakers include industry professionals and professors specializing in AI, computer science, and robotics.';
    } else if (
      lowerInput.includes('project') ||
      lowerInput.includes('final') ||
      lowerInput.includes('teamwork') ||
      lowerInput.includes('collaboration')
    ) {
      botReply =
        'You’ll work on a group project to apply AI concepts in a real-world challenge, presented on the last day of the program.';
    } else if (
      lowerInput.includes('contact') ||
      lowerInput.includes('question') ||
      lowerInput.includes('email') ||
      lowerInput.includes('reach out')
    ) {
      botReply =
        'For questions, please visit the "Contact Us" section at the top of the site. We’d love to help!';
    } else {
      botReply =
        "I'm not sure how to answer that yet, but feel free to explore the website for more information!";
    }

    setMessages((prev) => [
      ...prev,
      { type: 'user', content: userMessage },
      { type: 'bot', content: botReply },
    ]);

    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 overflow-hidden">
          {/* Header */}
          <div className="bg-[#8C1515] text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">AI Explorers Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.type === 'bot'
                    ? 'bg-[#8C1515] text-white'
                    : 'bg-gray-200 text-gray-800'
                } p-3 rounded-lg max-w-[80%] ${
                  message.type === 'bot' ? 'mr-auto' : 'ml-auto'
                }`}
              >
                {message.content}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          <div className="p-2 px-4 border-t bg-white text-sm text-gray-700">
            <div className="mb-2 font-semibold">Try asking:</div>
            <div className="flex flex-wrap gap-2">
              {[
                'When does the program start?',
                'How do I apply?',
                'What is AI Explorers?',
                'Is the program free?',
                'What is the daily schedule like?',
              ].map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setInput(suggestion);
                    setTimeout(() => handleSend(), 100);
                  }}
                  className="bg-gray-100 hover:bg-gray-200 text-sm px-3 py-1 rounded-full transition"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8C1515]"
              />
              <button
                onClick={handleSend}
                className="bg-[#8C1515] text-white px-4 py-2 rounded-lg hover:bg-[#66100F]"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#8C1515] text-white p-3 rounded-full shadow-lg hover:bg-[#66100F] transition-colors"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
}
