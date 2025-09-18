import { Button } from "@/components/ui/button";
import PhoneMockup from "@/components/phone-mockup";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary" data-testid="section-features">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold text-white mb-8" data-testid="text-simple-title">Simple</h2>
            <PhoneMockup 
              className="mx-auto lg:mx-0"
              content={
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-[2rem] h-full p-6 text-white backdrop-blur-xl">
                  <div className="text-center space-y-6">
                    <div className="text-lg opacity-80 mt-16">Your request has been received.</div>
                    
                    <div className="bg-white/10 rounded-2xl p-6">
                      <div className="text-sm opacity-80 mb-2">Amount</div>
                      <div className="text-4xl font-bold">€600</div>
                    </div>
                    
                    <div className="space-y-3 text-left">
                      <div className="flex justify-between text-sm">
                        <span className="opacity-80">Transaction ID</span>
                        <span>(XXX/XXX)</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="opacity-80">Bank</span>
                        <span>Bank Transfer</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="opacity-80">Currency</span>
                        <span>Germany</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="opacity-80">Name</span>
                        <span>John Doe</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="opacity-80">Date</span>
                        <span>11 August 2023, 15:32</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-white text-primary py-4 rounded-2xl font-semibold mt-8 hover:bg-white/90">
                      Get Receipt
                    </Button>
                  </div>
                </div>
              }
            />
          </motion.div>
          
          <motion.div 
            className="text-center lg:text-right"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold text-white" data-testid="text-fast-safe-title">fast & safe</h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
