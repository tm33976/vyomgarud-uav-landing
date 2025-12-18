import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  X, 
  Send, 
  Phone, 
  Mail, 
  FileText, 
  HelpCircle,
  MessageSquare,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickActions = [
  { icon: Phone, label: "Request Demo", description: "Schedule a live demonstration" },
  { icon: Mail, label: "Contact Sales", description: "Get in touch with our team" },
  { icon: FileText, label: "Product Specs", description: "Download technical specifications" },
  { icon: HelpCircle, label: "FAQ", description: "Frequently asked questions" },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeView, setActiveView] = useState<"menu" | "chat">("menu");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "bot"; content: string }[]>([
    { role: "bot", content: "Hello! I'm VyomGarud's virtual assistant. How can I help you today?" }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setMessages(prev => [...prev, { role: "user", content: message }]);
    setMessage("");
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "bot", 
        content: "Thank you for your message. Our team will get back to you shortly. In the meantime, feel free to explore our capabilities or contact us directly at contact@vyomgarud.com" 
      }]);
    }, 1000);
  };

  const handleQuickAction = (action: string) => {
    if (action === "Request Demo") {
      setActiveView("chat");
      setMessages(prev => [...prev, { 
        role: "bot", 
        content: "I'd be happy to arrange a demo for you! Please share your name, organization, and preferred date/time, and our team will reach out to confirm." 
      }]);
    } else if (action === "Contact Sales") {
      window.location.href = "#contact";
      setIsOpen(false);
    } else if (action === "Product Specs") {
      setActiveView("chat");
      setMessages(prev => [...prev, { 
        role: "bot", 
        content: "Our product specifications include:\n\n• Flight Time: 12+ hours\n• Range: 500km+\n• Payload: Up to 50kg\n• Operating Altitude: 15,000ft\n\nWould you like more detailed specifications for a specific system?" 
      }]);
    } else if (action === "FAQ") {
      setActiveView("chat");
      setMessages(prev => [...prev, { 
        role: "bot", 
        content: "Here are some common questions:\n\n1. What industries do you serve?\n2. What is the typical delivery timeline?\n3. Do you offer training programs?\n4. What support options are available?\n\nWhich topic interests you?" 
      }]);
    }
  };
   return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center ${isOpen ? 'hidden' : ''}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <Bot size={28} />
        </motion.div>
        
        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Bot size={22} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground">VyomGarud Assistant</h3>
                  <p className="text-xs text-primary-foreground/70">Online • Ready to help</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <X size={18} className="text-primary-foreground" />
              </button>
            </div>
             {/* Content */}
            <div className="h-[400px] flex flex-col">
              {activeView === "menu" ? (
                <div className="p-4 flex-1 overflow-y-auto">
                  <p className="text-sm text-muted-foreground mb-4">
                    Welcome! How can I assist you today?
                  </p>
                  
                  {/* Quick Actions */}
                  <div className="space-y-3">
                    {quickActions.map((action, index) => (
                      <motion.button
                        key={action.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleQuickAction(action.label)}
                        className="w-full p-3 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300 flex items-center gap-3 group text-left"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <action.icon size={20} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">{action.label}</p>
                          <p className="text-xs text-muted-foreground">{action.description}</p>
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  {/* Chat Option */}
                  <button
                    onClick={() => setActiveView("chat")}
                    className="mt-4 w-full p-3 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors flex items-center justify-center gap-2 text-primary font-medium text-sm"
                  >
                    <MessageSquare size={18} />
                    Start a conversation
                  </button>
                </div>
              ) : (
                <>
                  {/* Chat Messages */}
                  <div className="flex-1 p-4 overflow-y-auto space-y-4">
                    {messages.map((msg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-xl text-sm whitespace-pre-wrap ${
                            msg.role === "user"
                              ? "bg-primary text-primary-foreground rounded-br-none"
                              : "bg-secondary text-foreground rounded-bl-none"
                          }`}
                        >
                          {msg.content}
                        </div>
                      </motion.div>
                    ))}
                  </div>