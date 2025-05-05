import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content:
        "Welcome to Stanford Pre-Collegiate Summer Institutes! I'm an AI assistant here to help answer your questions about our programs. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user's message to the chat
    setMessages([...messages, { type: 'user', content: input.trim() }]);
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 overflow-hidden">
          {/* Header */}
          <div className="bg-[#8C1515] text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">Stanford Assistant</h3>
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
