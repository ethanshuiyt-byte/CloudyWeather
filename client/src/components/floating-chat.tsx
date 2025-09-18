import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingChat() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button 
        className="w-14 h-14 bg-primary rounded-full shadow-lg text-white hover:bg-primary/90"
        data-testid="button-floating-chat"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </motion.div>
  );
}
