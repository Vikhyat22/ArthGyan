import React, { useState } from 'react'; // Import useState

const AnnouncementModal = ({ isOpen, onClose, announcement }) => {
  // STEP 1: Create state to manage the text in the input field.
  const [inputValue, setInputValue] = useState('');

  // STEP 2: Create state to hold the list of chat messages.
  // We'll start it with a default AI message.
  const [chatHistory, setChatHistory] = useState([
    { sender: 'ai', text: 'Hello! How can I help you with this report?' }
  ]);

  if (!isOpen || !announcement) {
    return null;
  }

  // STEP 3: Create a function to handle sending a message.
  const handleSendMessage = () => {
    const userMessage = inputValue.trim();
    if (userMessage === '') return; // Don't send empty messages

    // Add the user's message to the chat history
    const newUserMessage = { sender: 'user', text: userMessage };

    // Simulate an AI response
    const aiResponse = { sender: 'ai', text: "Thanks for your question. I'm processing the document..." };

    // Update the chat history state with both new messages
    setChatHistory(prevHistory => [...prevHistory, newUserMessage, aiResponse]);

    // Clear the input field
    setInputValue('');
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#161b22] border border-[#30363d] rounded-lg shadow-xl w-full max-w-2xl flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-[#30363d]">
          <h3 className="text-xl font-bold text-white">{announcement.name} - Q2 Results</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <h4 className="font-bold text-white mb-2">AI Summary</h4>
            <p className="text-sm text-gray-300 leading-relaxed">{announcement.summary}</p>
          </div>

          <div className="border-t border-[#30363d] pt-6 flex flex-col">
            <h4 className="font-bold text-white mb-2">Ask AI</h4>

            {/* STEP 4: Render the chat history */}
            <div className="flex-grow space-y-4 text-sm mb-4 p-4 bg-[#0d1117] rounded-md h-48 overflow-y-auto">
              {chatHistory.map((message, index) => (
                <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`rounded-lg px-3 py-2 max-w-xs lg:max-w-md ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-200'
                  }`}>
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* STEP 5: Connect the input and button to our state and function */}
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Ask about this report..."
                className="flex-grow bg-[#0d1117] border border-[#30363d] rounded-md p-2 text-white focus:outline-none"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white font-semibold rounded-md px-4 py-2"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementModal;
