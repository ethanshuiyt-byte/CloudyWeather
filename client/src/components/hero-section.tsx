import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import videoBackground from "@assets/20250914_2027_Futuristic Gradient Sunglasses_remix_01k55pk8s2fdssndh4n5jd45er_1758159213597.mov";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20" data-testid="section-hero">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        data-testid="hero-video-background"
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f97316;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ea580c;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grad)' /%3E%3C/svg%3E"
      >
        <source src={videoBackground} type="video/quicktime" />
        <source src={videoBackground} type="video/mp4" />
      </video>
      
      {/* Fallback gradient background if video fails */}
      <div className="absolute inset-0 hero-gradient z-0" style={{display: 'var(--video-fallback, none)'}}></div>
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/50 to-primary/70 z-10 pointer-events-none"></div>
      {/* 3D Geometric Shapes */}
      <div className="geometric-shape w-52 h-52 bg-gradient-to-br from-white/30 to-white/10 top-[20%] right-[10%] animate-float" />
      <div className="geometric-shape w-32 h-32 bg-gradient-to-br from-white/20 to-white/5 top-[60%] right-[20%] animate-float-delayed" />
      <div className="geometric-shape w-20 h-20 bg-gradient-to-br from-white/25 to-white/8 top-[40%] right-[40%] animate-float-delayed-2" />
      
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <motion.div 
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight" data-testid="text-hero-title">
              Beyond<br />
              the Limit
            </h1>
            <p className="text-xl text-white/90 max-w-md" data-testid="text-hero-subtitle">
              Experience an amazing feeling as if you are wearing nothing on your face. Our ultimate sports sunglasses are engineered for peak performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-white text-primary hover:bg-white/90 py-6 px-8 rounded-xl font-semibold"
                data-testid="button-virtual-try-on"
              >
                Virtual Try-On
              </Button>
              <Button 
                variant="ghost" 
                className="glass-morphism text-white hover:bg-white/20 border-0 py-6 px-8 rounded-xl"
                data-testid="button-shop-now"
              >
                Shop Now
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-96 h-96 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-xl border border-white/20 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🕶️</div>
                <div className="text-2xl font-bold mb-2">AirFly</div>
                <div className="text-white/80">Ultimate Sports Sunglasses</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
