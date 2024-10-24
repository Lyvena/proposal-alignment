import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Landing = () => {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold mb-6">Welcome to AI-PGF</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          AI-PGF is a platform for managing and aligning AI research proposals. Join us in shaping the future of artificial intelligence.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link to="/auth">Get Started</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Landing;