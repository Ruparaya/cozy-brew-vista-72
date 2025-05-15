
import { Separator } from '@/components/ui/separator';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-cafe-cream">
      <div className="cafe-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="section-title">Our Story</h2>
              <Separator className="w-16 h-1 bg-cafe-green mb-6" />
            </div>
            <p className="text-lg">
              Cozy Coffee began as a dream between two friends who shared a passion for exceptional coffee and creating spaces where people feel at home. In 2015, we transformed an old bookstore into what is now your favorite neighborhood café.
            </p>
            <p className="text-lg">
              Our philosophy is simple: we believe in quality ingredients, careful preparation, and creating a warm atmosphere where everyone is welcome. From selecting the finest coffee beans from sustainable sources to baking our pastries in-house every morning, we put our heart into every detail.
            </p>
            <p className="text-lg">
              What makes us special is our community. Over the years, we've grown from a small coffee shop to a gathering place where friendships are formed, ideas are shared, and memories are made. We're not just serving coffee; we're creating experiences, one cup at a time.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Barista making coffee" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Latte art" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Coffee shop interior" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Coffee beans" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
