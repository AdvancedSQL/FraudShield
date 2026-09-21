import React from 'react';
import ChatPanel from '../../components/ChatPanel';

const CustomerChatbot = () => {
  const suggested = [
    "I saw a suspicious transaction",
    "How do I block my card?",
    "What are your security limits?",
    "Update my phone number"
  ];

  const initialMsgs = [
    { id: '1', sender: 'ai' as const, text: 'Hello! I am the FraudShield Support Assistant. I can help you secure your account, review transactions, or answer general security questions. What do you need help with?' }
  ];

  return (
    <div className="max-w-3xl mx-auto mt-4">
      <ChatPanel title="Customer Support" initialMessages={initialMsgs} suggestedQuestions={suggested} />
    </div>
  );
};
export default CustomerChatbot;
