import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: "vk",
      name: "Vamsi K.",
      avatar: "VK",
      avatarColor: "bg-green-500",
      rating: 5,
      text: "Very happy with the app. Does what it says, simple payments and transactions. Quick account verification and withdrawals. 24/7 support available."
    },
    {
      id: "la",
      name: "Leonie A.",
      avatar: "LA",
      avatarColor: "bg-blue-500",
      rating: 5,
      text: "Awesome app very user friendly. Would highly recommend AirFly to my friends."
    },
    {
      id: "kr",
      name: "Karl R.",
      avatar: "KR",
      avatarColor: "bg-orange-500",
      rating: 5,
      text: "The best payment solution for German customers. I've been an AirFly user for a few years! The support was always great and I'm always able to make my payments to the websites I want with no problem."
    },
    {
      id: "dp",
      name: "Dennis P.",
      avatar: "DP",
      avatarColor: "bg-purple-500",
      rating: 5,
      text: "Easy and Fast. Great app for fast and easy transfers. I have been using AirFly for a while now without any problem. I have recently started using their AirFly Card for my everyday purchases too."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 relative" data-testid="section-testimonials">
      {/* Modern living space background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className="testimonial-card rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                data-testid={`testimonial-${testimonial.id}`}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 ${testimonial.avatarColor} rounded-full flex items-center justify-center text-white font-bold`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground" data-testid={`name-${testimonial.id}`}>{testimonial.name}</div>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground" data-testid={`text-${testimonial.id}`}>
                  {testimonial.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="lg:pl-16"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Professional person placeholder */}
            <div className="rounded-2xl shadow-2xl w-full h-96 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-500">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-slate-400 rounded-full flex items-center justify-center text-white text-2xl">👤</div>
                <p className="text-lg font-medium">Professional workspace</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
