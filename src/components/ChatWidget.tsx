import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content:
        "Welcome to AI Explorers! I'm here to help with any questions you have about the 2025 Summer Camp in Oman. How can I assist you?",
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    const lowerInput = userMessage.toLowerCase();
    let botReply = '';

    // Specific Answers
    if (userMessage === 'When does the program start?') {
      botReply = 'The AI Explorers Summer Camp runs from June 28 to July 2, 2025. It is a 5-day in-person experience in Muscat, Oman.';
    } else if (userMessage === 'How do I apply?') {
      botReply = 'Admissions are currently closed for 2025. Check back later for updates or contact us through the website.';
    } else if (userMessage === 'What is AI Explorers?') {
      botReply = 'AI Explorers is a one-week summer program for undergraduates, designed to teach cutting-edge artificial intelligence topics through lectures, labs, and expert-led sessions.';
    } else if (userMessage === 'Is the program free?') {
      botReply = 'There may be associated costs for the in-person experience. Please refer to the Admissions or Tuition section for full details.';
    } else if (userMessage === 'What is the daily schedule like?') {
      botReply = 'Each day includes morning lectures and discussions on key AI topics, followed by afternoon labs and project-based learning. The week concludes with a capstone AI project presentation.';
    }

    // Greeting / Farewell
    else if (
      lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')
    ) {
      botReply = 'Hello! 👋 I’m here to help you with anything about the 2025 AI Summer Camp.';
    } else if (
      lowerInput.includes('bye') || lowerInput.includes('thank you') || lowerInput.includes('thanks')
    ) {
      botReply = 'You’re welcome! Have a great day!';
    }

    // Fallback keywords
    else if (
      lowerInput.includes('date') || lowerInput.includes('start') || lowerInput.includes('when')
    ) {
      botReply = 'The program will be held from June 28 to July 2, 2025.';
    } else if (
      lowerInput.includes('location') || lowerInput.includes('muscat') || lowerInput.includes('oman')
    ) {
      botReply = 'The program is hosted in Muscat, Oman—a city known for its stunning architecture, coastal beauty, and welcoming culture.';
    } else if (
      lowerInput.includes('cost') || lowerInput.includes('fee') || lowerInput.includes('tuition')
    ) {
      botReply = 'Please check the Tuition and Financial Aid section for the most accurate information on program costs.';
    } else if (
      lowerInput.includes('faculty') || lowerInput.includes('professor') || lowerInput.includes('speaker')
    ) {
      botReply = 'You’ll hear from international professors and researchers specializing in AI topics like Emotional Analytics, Visual Analytics, Deep Learning, and more.';
    } else if (
      lowerInput.includes('project') || lowerInput.includes('capstone') || lowerInput.includes('final')
    ) {
      botReply = 'You’ll work on a final AI project throughout the week and present it on the last day.';
    } else if (
      lowerInput.includes('contact') || lowerInput.includes('email')
    ) {
      botReply = 'Please visit the "Contact Us" link at the top of the site for questions or support.';
    } else {
      botReply = "I'm not sure how to answer that yet. Try checking the main website or asking something else!";
    }

    setMessages(prev => [
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
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.type === 'bot' ? 'bg-[#8C1515] text-white' : 'bg-gray-200 text-gray-800'
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
