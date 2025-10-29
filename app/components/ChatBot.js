'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, User, Sparkles } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello! 👋 I'm Basudab's AI assistant. I'd be delighted to help you learn more about his expertise in AI/ML, Large Language Models, Computer Vision, and his professional journey. Feel free to ask me anything, or I can help you schedule a conversation with him!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [meetingData, setMeetingData] = useState({});
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Enhanced context with meeting detection
  const contextData = `
You are a polite, professional, and friendly AI assistant representing Basudab Chowdhury. Your responses should be:
- Warm, conversational, and helpful
- Concise but informative (2-4 sentences typically)
- Professional yet approachable
- Never robotic or overly formal
- Enthusiastic about Basudab's work without being pushy

IMPORTANT RESPONSE GUIDELINES:
- Answer questions naturally based on what's asked
- Don't list everything at once - respond to specific queries
- Use bullet points sparingly, only when comparing multiple items
- Keep responses conversational and human-like
- If asked about multiple things, focus on the most relevant 2-3 points
- Always offer to provide more details if they're interested

CONTACT INFORMATION:
- Email: basudab.chowdhory@gmail.com
- Phone: +88 01750 973483
- LinkedIn: linkedin.com/in/basudab007
- GitHub: github.com/basudabC
- Location: Dhaka, Bangladesh

CURRENT ROLE (Oct 2024 - Present):
Manager BI & AI Researcher at Aman Group Ltd
- Leading AI/ML implementation projects with LLMs and Computer Vision
- Achieved 15% reduction in processing time, 10% productivity increase
- Fine-tuned LLMs improving accuracy by 12%, reducing training time by 20%
- Built multimodal AI models with 95% accuracy
- Developed APIs reducing integration time by 30%
- ASR systems with 90%+ transcription accuracy

CORE EXPERTISE & SKILLS:
AI/ML Technologies:
- Large Language Models: LangGraph (95%), Autogen (90%), LangChain (85%), OpenAI APIs, Hugging Face
- Computer Vision: OpenCV, YOLO, Neural Networks, Real-time image processing
- Machine Learning: Scikit-learn, TensorFlow, PyTorch, Model fine-tuning
- RAG Systems: Vector databases (Weaviate, ChromaDB), embeddings, retrieval optimization

Programming & Development:
- Python (95%): FastAPI, Flask, Django, Pandas, NumPy
- JavaScript/TypeScript (85%): Node.js, React, Next.js
- SQL (90%): PostgreSQL, MySQL, query optimization
- API Development: RESTful APIs, GraphQL, API design patterns

MEETING SCHEDULING - VERY IMPORTANT:
When someone wants to schedule a meeting or says phrases like:
- "I'd like to schedule a meeting"
- "Can I talk to Basudab?"
- "I want to meet"
- "Schedule a call"
- "Book a meeting"
- "Let's connect"

You MUST respond with EXACTLY this format to trigger the meeting system:
"MEETING_REQUEST_DETECTED
I'd be happy to help you schedule a meeting with Basudab! To proceed, I'll need a few details:
- Your name
- Your email address
- What would you like to discuss?
- Preferred date/time (optional)"

After they provide the information, respond with EXACTLY:
"MEETING_CONFIRMED
Great! I've received your details:
- Name: [their name]
- Email: [their email]  
- Topic: [discussion topic]
- Preferred time: [time if provided]

I'm sending this to Basudab now, and he'll reach out to you within 24 hours!"

Remember: Be conversational, not encyclopedic. Answer what's asked, offer more if they want it.
`;

  // Function to detect meeting requests
  const detectMeetingRequest = (message) => {
    const meetingKeywords = [
      'schedule', 'meeting', 'meet', 'call', 'talk', 'discuss',
      'appointment', 'connect', 'consultation', 'chat with basudab'
    ];
    
    const lowerMessage = message.toLowerCase();
    return meetingKeywords.some(keyword => lowerMessage.includes(keyword));
  };

  // Function to extract meeting information
  const extractMeetingInfo = (userMessages) => {
    const allText = userMessages.join(' ').toLowerCase();
    
    // Extract email
    const emailMatch = allText.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/);
    
    // Extract name (look for "my name is" or "I'm")
    const namePatterns = [
      /(?:my name is|i'm|i am|this is)\s+([a-z]+(?:\s+[a-z]+)?)/i,
      /^([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)$/m
    ];
    let name = null;
    for (const pattern of namePatterns) {
      const match = allText.match(pattern);
      if (match) {
        name = match[1];
        break;
      }
    }
    
    return {
      email: emailMatch ? emailMatch[0] : null,
      name: name
    };
  };

  // Function to send meeting request email
  const sendMeetingRequest = async (data) => {
    console.log('📧 Sending meeting request with data:', data);
    
    try {
      const response = await fetch('/api/notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('Response status:', response.status);
      const result = await response.json();
      console.log('Response data:', result);

      return result;
    } catch (error) {
      console.error('❌ Failed to send meeting request:', error);
      throw error;
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Get chat response first
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          context: contextData
        }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      const assistantMessage = data.message;

      // Add assistant response
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: assistantMessage
      }]);

      // Check if meeting was confirmed
      if (assistantMessage.includes('MEETING_CONFIRMED')) {
        console.log('📅 Meeting request detected in response');
        
        // Extract meeting info from conversation
        const userMessages = messages
          .filter(m => m.role === 'user')
          .map(m => m.content);
        userMessages.push(input);
        
        const extractedInfo = extractMeetingInfo(userMessages);
        
        // Extract topic from the conversation
        let topic = 'General Discussion';
        const topicMatch = assistantMessage.match(/Topic:\s*([^\n]+)/i);
        if (topicMatch) {
          topic = topicMatch[1].trim();
        }

        // Extract preferred date if mentioned
        let preferredDate = '';
        const dateMatch = assistantMessage.match(/Preferred time:\s*([^\n]+)/i);
        if (dateMatch) {
          preferredDate = dateMatch[1].trim();
        }

        const meetingRequestData = {
          name: extractedInfo.name || 'Guest',
          email: extractedInfo.email || '',
          topic: topic,
          preferredDate: preferredDate,
          message: userMessages.join('\n')
        };

        console.log('📤 Attempting to send meeting request:', meetingRequestData);

        // Send the meeting request
        if (meetingRequestData.email) {
          try {
            const emailResult = await sendMeetingRequest(meetingRequestData);
            console.log('✅ Email sent successfully:', emailResult);
            
            // Add confirmation message
            setMessages(prev => [...prev, {
              role: 'assistant',
              content: '✅ Perfect! Your meeting request has been sent to Basudab. He will contact you at ' + meetingRequestData.email + ' within 24 hours. Looking forward to your conversation!'
            }]);
          } catch (emailError) {
            console.error('Failed to send email:', emailError);
            setMessages(prev => [...prev, {
              role: 'assistant',
              content: "I've noted your meeting request, but had trouble sending the notification. Please email Basudab directly at basudab.chowdhory@gmail.com to ensure he receives your request."
            }]);
          }
        } else {
          console.log('⚠️ No email found, cannot send meeting request');
        }
      }

    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I apologize for the inconvenience, but I'm having trouble connecting right now. Please feel free to reach out to Basudab directly at basudab.chowdhory@gmail.com or call him at +88 01750 973483. He'd be happy to help!"
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    "What's Basudab's expertise?",
    "Tell me about his projects",
    "What technologies does he use?",
    "I'd like to schedule a meeting"
  ];

  const handleQuickQuestion = (question) => {
    setInput(question);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full p-4 shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 z-50 group"
          aria-label="Open chat assistant"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
          </span>
          <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
            <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
              Chat with AI Assistant
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[420px] h-[650px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h3 className="font-bold text-lg">AI Assistant</h3>
                <p className="text-xs text-blue-100 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online - Here to help
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-br-md shadow-md'
                      : 'bg-white text-gray-800 shadow-md border border-gray-100 rounded-bl-md'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.content.replace('MEETING_REQUEST_DETECTED\n', '').replace('MEETING_CONFIRMED\n', '')}
                  </p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start animate-fadeIn">
                <div className="bg-white rounded-2xl px-4 py-3 shadow-md border border-gray-100 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                  <span className="text-sm text-gray-600">Thinking...</span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 2 && !isLoading && (
            <div className="px-4 py-3 border-t border-gray-200 bg-white">
              <p className="text-xs text-gray-500 mb-2 font-medium">Quick questions:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickQuestions.map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs px-3 py-2 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 text-gray-700 hover:text-blue-700 rounded-lg transition-all border border-gray-200 hover:border-blue-300 text-left font-medium"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about Basudab..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-gray-50 focus:bg-white transition-colors"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-xl hover:from-blue-700 hover:to-blue-800 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg disabled:shadow-none"
                aria-label="Send message"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3" />
              AI-Powered Assistant by Basudab
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default ChatBot;