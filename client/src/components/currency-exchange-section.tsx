import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CurrencyExchangeSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden" data-testid="section-currency-exchange">
      {/* International flags decoration */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-muted to-transparent">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="flex space-x-4 opacity-60">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl">🇪🇺</div>
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl">🇬🇧</div>
            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white text-xl">🇺🇸</div>
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white text-xl">🇨🇦</div>
            <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xl">🇦🇺</div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pt-16">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl font-bold text-foreground mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="text-hear-from-clients"
          >
            Hear it from our clients
          </motion.h2>
          
          {/* Currency Converter Widget */}
          <motion.div 
            className="max-w-md mx-auto bg-card rounded-2xl p-6 shadow-lg border"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            data-testid="widget-currency-converter"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm">🇪🇺</div>
                  <span className="font-medium">EUR</span>
                </div>
                <div className="text-2xl font-bold" data-testid="amount-eur">€10</div>
              </div>
              
              <div className="flex justify-center">
                <div className="text-primary text-xl">⇄</div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-white text-sm">🇬🇧</div>
                  <span className="font-medium">GBP</span>
                </div>
                <div className="text-2xl font-bold" data-testid="amount-gbp">£8.68</div>
              </div>
              
              <Button className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/90" data-testid="button-convert-currency">
                Convert Currency
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
