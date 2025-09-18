import { Button } from "@/components/ui/button";
import PhoneMockup from "@/components/phone-mockup";
import { motion } from "framer-motion";

export default function AllInOneSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-primary" data-testid="section-all-in-one">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight" data-testid="text-all-finances-title">
              All your finances,<br />
              in one app.
            </h2>
            <p className="text-xl text-white/90" data-testid="text-join-users">
              Join 1M+ happy users today.
            </p>
            <Button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90" data-testid="button-get-started">
              Get Started
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <PhoneMockup 
              content={
                <div className="bg-gradient-to-br from-primary to-secondary rounded-[2rem] h-full p-6 text-white relative overflow-hidden">
                  {/* Abstract background shapes */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-32 h-32 bg-white/20 rounded-full absolute top-10 right-0 transform translate-x-8"></div>
                    <div className="w-24 h-24 bg-white/15 rounded-full absolute bottom-20 left-0 transform -translate-x-6"></div>
                  </div>
                  
                  <div className="relative z-10 space-y-6">
                    <div className="text-center pt-16">
                      <h3 className="text-2xl font-bold mb-4">One wallet for all</h3>
                      <p className="text-white/80 mb-8">Move your money, spend and save money.</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                        <div className="text-sm opacity-80 mb-1">Current Balance</div>
                        <div className="text-3xl font-bold">€2,450.50</div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/5 rounded-xl p-3 text-center">
                          <div className="text-green-300 text-lg mb-2">↑</div>
                          <div className="text-xs opacity-80">Send Money</div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-3 text-center">
                          <div className="text-blue-300 text-lg mb-2">↓</div>
                          <div className="text-xs opacity-80">Receive</div>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-white text-primary py-4 rounded-2xl font-semibold hover:bg-white/90">
                      Create account
                    </Button>
                    
                    <div className="text-center">
                      <p className="text-xs text-white/60">Already have an account? <span className="underline cursor-pointer">Log In</span></p>
                    </div>
                  </div>
                </div>
              }
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
