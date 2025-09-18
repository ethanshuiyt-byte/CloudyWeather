import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function JetonCardSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-muted to-white" data-testid="section-jeton-card">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="badge-jeton-card"
        >
          Jeton Card
        </motion.div>
        
        <motion.h2 
          className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          data-testid="text-card-features"
        >
          Jeton Card: Your Go-<br />
          To for Every Purchase
        </motion.h2>
        
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* 3D Card visualization with CSS */}
          <div className="relative h-96 perspective-1000" data-testid="card-3d-visualization">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl transform rotate-3 opacity-80"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-secondary via-primary to-secondary rounded-3xl transform -rotate-1 opacity-60"></div>
            <div className="absolute inset-8 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-3xl font-bold mb-4">Jeton Card</div>
                <div className="text-white/80">Your Go-To for Every Purchase</div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90" data-testid="button-learn-more">
            Learn more
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
