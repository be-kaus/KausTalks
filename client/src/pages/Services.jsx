import React from "react";
import { motion } from "framer-motion";
import { 
  Code, Palette, Smartphone, Users, Rocket, Shield, Lightbulb, 
  PenTool, Laptop, PartyPopper, Quote 
} from "lucide-react";

// Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.25 },
  },
};

const ServicesPage = () => {
  const services = [
    { icon: <Code className="w-12 h-12 text-primary" />, title: "Web Development", desc: "Modern, scalable, and high-performance websites built with the latest technologies." },
    { icon: <Palette className="w-12 h-12 text-secondary" />, title: "UI/UX Design", desc: "Stunning, user-friendly designs that bring your ideas to life with style." },
    { icon: <Smartphone className="w-12 h-12 text-accent" />, title: "Mobile Apps", desc: "Responsive, smooth, and powerful apps for iOS & Android platforms." },
    { icon: <Users className="w-12 h-12 text-pink-500" />, title: "Team Collaboration", desc: "Streamlined tools and apps to improve team productivity and workflow." },
    { icon: <Rocket className="w-12 h-12 text-green-500" />, title: "Startup Launch", desc: "Helping startups launch fast with complete branding, websites, and apps." },
    { icon: <Shield className="w-12 h-12 text-yellow-500" />, title: "Cyber Security", desc: "Keep your business secure with advanced cybersecurity solutions." },
  ];

  const steps = [
    { icon: <Lightbulb className="w-10 h-10 text-yellow-500" />, title: "Idea 💡", desc: "We start by understanding your vision and brainstorming innovative solutions." },
    { icon: <PenTool className="w-10 h-10 text-secondary" />, title: "Design 🎨", desc: "Wireframes, prototypes, and beautiful UI/UX crafted for your audience." },
    { icon: <Laptop className="w-10 h-10 text-primary" />, title: "Development 💻", desc: "Robust coding, integrations, and scalable architecture are implemented." },
    { icon: <PartyPopper className="w-10 h-10 text-pink-500" />, title: "Launch 🚀", desc: "Your project goes live with full support, testing, and celebration." },
  ];

  const testimonials = [
    { name: "Aarav Sharma", feedback: "The team transformed our startup idea into a stunning product. Highly recommended!", avatar: "🧑‍💻" },
    { name: "Priya Verma", feedback: "Amazing UI/UX designs! Our customers love the smooth experience.", avatar: "👩‍🎨" },
    { name: "Rahul Mehta", feedback: "They delivered our project ahead of time with flawless execution!", avatar: "🚀" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 p-10 overflow-hidden">
      {/* Hero */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-20"
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-6xl font-extrabold text-primary drop-shadow mb-6"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          Our <span className="text-secondary">Services</span> 💼
        </motion.h1>
        <p className="text-lg text-gray-600">
          We provide a wide range of services to bring your vision into reality.
          Here’s what we can do for you 🚀
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            whileHover={{ scale: 1.07, rotate: [0, -2, 2, 0] }}
            whileTap={{ scale: 0.95 }}
            className="p-8 rounded-3xl bg-white/70 backdrop-blur-lg shadow-lg border text-center hover:shadow-2xl transition"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {service.icon}
            </motion.div>
            <h3 className="text-2xl font-bold mt-6 mb-3 text-primary">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* How We Work */}
      <motion.div
        className="max-w-5xl mx-auto mt-28 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-primary">How We Work ⚡</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="p-6 rounded-2xl bg-white/80 shadow-xl border flex flex-col items-center"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        className="max-w-6xl mx-auto mt-28 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-secondary">What Our Clients Say ❤️</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-3xl bg-white/70 shadow-xl border text-left"
            >
              <div className="flex items-center mb-4 gap-3">
                <span className="text-3xl">{t.avatar}</span>
                <h3 className="font-bold text-lg">{t.name}</h3>
              </div>
              <p className="text-gray-700 italic">“{t.feedback}”</p>
              <motion.div
                className="mt-4 text-secondary"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Quote />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call To Action */}
      <motion.div
        className="max-w-4xl mx-auto text-center p-12 mt-28 rounded-3xl shadow-2xl bg-gradient-to-r from-primary to-secondary text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project? 🚀</h2>
        <p className="mb-8 text-lg">Let’s build something innovative together. Get in touch with us today.</p>
        <motion.button
          className="btn bg-white text-primary rounded-xl font-bold shadow-lg px-8 py-3 text-lg"
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ServicesPage;
