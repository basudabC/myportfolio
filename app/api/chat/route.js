import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request) {
  try {
    const { messages, context } = await request.json();

    // Create the system message with enhanced instructions
    const systemMessage = {
      role: 'system',
      content: `${context}

CRITICAL RESPONSE GUIDELINES:
1. Be conversational and natural - speak like a helpful human assistant
2. Keep responses concise (2-4 sentences typically) unless asked for details
3. Don't dump all information at once - answer what's specifically asked
4. Use a warm, professional, and friendly tone
5. Avoid listing everything - be selective and relevant
6. If the question is broad, focus on 2-3 key points and offer to elaborate
7. Never be robotic or repetitive
8. Show enthusiasm for Basudab's work naturally, not forcefully
9. Always end with a gentle offer to help further or schedule a meeting

RESPONSE STYLE EXAMPLES:

Bad Response (too robotic/lengthy):
"Basudab Chowdhury has the following skills: Python 95%, JavaScript 85%, SQL 90%, AWS 90%, Azure 85%, Docker 95%, Kubernetes 80%... [long list]"

Good Response (conversational):
"Basudab has strong expertise in Python and cloud platforms like AWS and Azure. He's particularly skilled with AI frameworks like LangGraph and LangChain, and builds production systems with Docker and Kubernetes. Is there a specific technology stack you're interested in learning more about?"

Bad Response (too formal):
"Mr. Chowdhury is currently employed at Aman Group Ltd in the capacity of Manager BI & AI Researcher."

Good Response (natural):
"Basudab is currently working as Manager BI & AI Researcher at Aman Group Ltd, where he's leading exciting AI/ML projects involving LLMs and Computer Vision. His work has already achieved some impressive results - like 95% accuracy in multimodal AI tasks! Would you like to hear more about his current projects?"

Remember: You're a helpful, knowledgeable assistant who speaks naturally and focuses on being useful, not comprehensive.`
    };

    // Combine system message with conversation history
    const allMessages = [systemMessage, ...messages];

    const chatCompletion = await groq.chat.completions.create({
      messages: allMessages,
      model: 'llama-3.3-70b-versatile', // Using a more capable model for better responses
      temperature: 0.7,
      max_tokens: 512, // Limiting tokens to encourage conciseness
      top_p: 0.9,
      stream: false,
    });

    const assistantMessage = chatCompletion.choices[0]?.message?.content || 
      "I apologize, but I'm having a moment of difficulty. Could you please rephrase your question?";

    // Detect if this is a meeting/contact request
    const userMessage = messages[messages.length - 1].content.toLowerCase();
    const isMeetingRequest = 
      userMessage.includes('schedule') ||
      userMessage.includes('meeting') ||
      userMessage.includes('contact') ||
      userMessage.includes('talk to') ||
      userMessage.includes('speak with') ||
      userMessage.includes('connect') ||
      assistantMessage.toLowerCase().includes('schedule') ||
      assistantMessage.toLowerCase().includes('reach out');

    if (isMeetingRequest) {
      // Log meeting requests for tracking
      console.log('📅 Meeting request detected');
      console.log('User message:', messages[messages.length - 1].content);
      console.log('Timestamp:', new Date().toISOString());
      
      // Here you can add email notification logic
      // await sendEmailNotification(...)
    }

    return NextResponse.json({
      message: assistantMessage,
      isMeetingRequest,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Groq API Error:', error);
    
    // More specific error handling
    let errorMessage = "I'm having trouble connecting right now. Please contact Basudab directly at basudab.chowdhory@gmail.com or +88 01750 973483.";
    
    if (error.message?.includes('rate limit')) {
      errorMessage = "I'm receiving a lot of questions right now! Please try again in a moment, or reach out to Basudab directly at basudab.chowdhory@gmail.com.";
    } else if (error.message?.includes('timeout')) {
      errorMessage = "The connection timed out. Please try your question again, or contact Basudab at basudab.chowdhory@gmail.com.";
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to process request',
        message: errorMessage
      },
      { status: 500 }
    );
  }
}

export const runtime = 'edge';