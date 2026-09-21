import React from 'react';
import ChatPanel from '../../components/ChatPanel';

const AiAssistant = () => {
  const suggested = [
    "Summarize ALT-1001",
    "Find similar patterns to Rahul Sharma's transactions",
    "What are the top fraud vectors this week?",
    "Explain rule RUL-02"
  ];

  const initialMsgs = [
    { id: '1', sender: 'ai' as const, text: 'Hello! I am your FraudShield AI Assistant. I can analyze alerts, query transaction patterns, or explain detection rules. How can I help you today?' }
  ];

  return (
    <div className="max-w-4xl mx-auto mt-4">
      <ChatPanel title="Investigation AI Assistant" initialMessages={initialMsgs} suggestedQuestions={suggested} />
    </div>
  );
};
export default AiAssistant;
