
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-cafe-cream">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-cafe-brown">404</h1>
          <p className="text-xl md:text-2xl text-cafe-brown-light mb-8">
            Oops! Looks like you've wandered off the menu.
          </p>
          <Button 
            className="bg-cafe-brown text-white hover:bg-cafe-brown-light"
            size="lg"
            asChild
          >
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
