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