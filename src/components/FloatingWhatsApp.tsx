import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "1234567890"; // Replace with actual number
    const message = encodeURIComponent("Hello! I'd like to inquire about your legal services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-8 right-8 z-50 h-16 w-16 rounded-full bg-gradient-primary hover:bg-primary-light shadow-lg glow transition-all duration-300 hover:scale-110 group p-0"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-primary-foreground group-hover:scale-110 transition-transform" />
    </Button>
  );
};

export default FloatingWhatsApp;
