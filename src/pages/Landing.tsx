import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Brain, Rocket, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const Landing = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: <Brain className="h-12 w-12 text-primary" />,
      title: "AI-Powered Analysis",
      description: "Advanced AI algorithms analyze and align research proposals with ethical guidelines."
    },
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "Precise Alignment",
      description: "Ensure your AI research aligns with safety and ethical considerations."
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Collaborative Platform",
      description: "Connect with other researchers and receive valuable feedback."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <motion.div 
          className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-background to-primary/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Rocket className="h-20 w-20 text-primary mx-auto" />
          </motion.div>
          <motion.h1 
            className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
            {...fadeIn}
          >
            Welcome to AI-PGF
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            AI-PGF is a cutting-edge platform for managing and aligning AI research proposals. 
            Join us in shaping the future of artificial intelligence with safety and ethics at its core.
          </motion.p>
          <motion.div 
            className="space-x-4"
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" asChild>
              <Link to="/auth">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Choose AI-PGF?
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Landing;