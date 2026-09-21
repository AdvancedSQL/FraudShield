import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
}

export const ChatPanel: React.FC<{ title?: string; initialMessages?: Message[]; suggestedQuestions?: string[] }> = ({ title = 'AI Assistant', initialMessages = [], suggestedQuestions = [] }) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    setMessages([...messages, { id: Date.now().toString(), sender: 'user', text }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'ai', text: 'I am analyzing the situation based on our fraud detection models. Let me know if you need specific details.' }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[600px] glass-card overflow-hidden">
      <div className="p-4 border-b border-slate-700/50 bg-slate-800/30 font-semibold text-white">
        {title}
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(m => (
          <div key={m.id} className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : ''}`}>
            {m.sender === 'ai' && <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0"><Bot className="w-5 h-5 text-white"/></div>}
            <div className={`p-3 rounded-lg max-w-[80%] text-sm ${m.sender === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-slate-800 text-slate-300 rounded-tl-none border border-slate-700/50'}`}>
              {m.text}
            </div>
            {m.sender === 'user' && <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center shrink-0"><User className="w-5 h-5 text-white"/></div>}
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-slate-700/50 bg-slate-800/30">
        {suggestedQuestions.length > 0 && (
          <div className="flex gap-2 overflow-x-auto pb-3 no-scrollbar">
            {suggestedQuestions.map((q, i) => (
              <button key={i} onClick={() => handleSend(q)} className="px-3 py-1.5 text-xs bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-full whitespace-nowrap transition-colors">
                {q}
              </button>
            ))}
          </div>
        )}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend(input)}
            placeholder="Type your message..."
            className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
          />
          <button onClick={() => handleSend(input)} className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatPanel;
