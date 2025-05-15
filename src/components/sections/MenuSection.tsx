
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

type MenuItem = {
  name: string;
  description: string;
  price: number;
  image?: string;
  isSpecial?: boolean;
};

type MenuCategory = {
  name: string;
  items: MenuItem[];
};

const coffeeItems: MenuItem[] = [
  {
    name: 'Classic Espresso',
    description: 'Rich and bold, the foundation of coffee excellence',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Creamy Cappuccino',
    description: 'Perfect balance of espresso, steamed milk, and foam',
    price: 4.50,
    isSpecial: true,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Smooth Latte',
    description: 'Espresso embraced by velvety steamed milk',
    price: 4.75,
    image: 'https://images.unsplash.com/photo-1585494156145-1c60a0b0b973?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Robust Americano',
    description: 'Espresso diluted with hot water for a lighter flavor',
    price: 3.75
  },
  {
    name: 'Caramel Macchiato',
    description: 'Vanilla-infused milk topped with espresso and caramel drizzle',
    price: 5.25,
    isSpecial: true
  },
  {
    name: 'Cold Brew',
    description: 'Steeped for 12 hours for a smooth, less acidic flavor',
    price: 4.95,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  }
];

const foodItems: MenuItem[] = [
  {
    name: 'Butter Croissant',
    description: 'Flaky, buttery layers of perfection',
    price: 3.25,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Avocado Toast',
    description: 'Artisan bread topped with fresh avocado, cherry tomatoes, and microgreens',
    price: 8.95,
    isSpecial: true,
    image: 'https://images.unsplash.com/photo-1603046891744-1f76be95ea4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Blueberry Muffin',
    description: 'Tender, moist muffin bursting with blueberries',
    price: 3.75
  },
  {
    name: 'Chocolate Chip Cookie',
    description: 'Gooey chocolate chunks in a soft cookie',
    price: 2.95,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Quiche Lorraine',
    description: 'Savory bacon and Swiss cheese quiche with a flaky crust',
    price: 7.50,
    isSpecial: true
  },
  {
    name: 'House Salad',
    description: 'Fresh greens with cherry tomatoes, cucumber, and balsamic vinaigrette',
    price: 8.25
  }
];

const dessertItems: MenuItem[] = [
  {
    name: 'Tiramisu',
    description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone',
    price: 6.50,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    isSpecial: true
  },
  {
    name: 'Cheesecake',
    description: 'Creamy New York style cheesecake with seasonal fruit topping',
    price: 5.95
  },
  {
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
    price: 7.25,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Apple Pie',
    description: 'Homemade pie with cinnamon-spiced apples in a flaky crust',
    price: 5.75
  }
];

const menuCategories: MenuCategory[] = [
  { name: 'Coffee', items: coffeeItems },
  { name: 'Food', items: foodItems },
  { name: 'Desserts', items: dessertItems }
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('Coffee');

  return (
    <section id="menu" className="section-padding bg-white">
      <div className="cafe-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Menu</h2>
          <Separator className="w-16 h-1 bg-cafe-green mx-auto mb-4" />
          <p className="section-subtitle">Savor the flavors of quality ingredients</p>
        </div>
        
        <Tabs defaultValue="Coffee" className="w-full" onValueChange={setActiveCategory}>
          <TabsList className="w-full flex justify-center mb-8">
            {menuCategories.map((category) => (
              <TabsTrigger 
                key={category.name} 
                value={category.name}
                className="text-lg px-8"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {menuCategories.map((category) => (
            <TabsContent 
              key={category.name} 
              value={category.name}
              className="mt-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item) => (
                  <div 
                    key={item.name} 
                    className={`flex bg-cafe-cream/30 rounded-lg overflow-hidden ${
                      item.isSpecial ? 'border-2 border-cafe-green' : ''
                    }`}
                  >
                    {item.image && (
                      <div className="w-1/3 h-auto min-h-[140px]">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className={`${item.image ? 'w-2/3' : 'w-full'} p-4`}>
                      <div className="flex justify-between items-start">
                        <h3 className="font-playfair text-xl font-semibold text-cafe-brown">
                          {item.name}
                          {item.isSpecial && (
                            <span className="ml-2 text-xs font-normal text-cafe-green bg-cafe-green/10 px-2 py-1 rounded">
                              POPULAR
                            </span>
                          )}
                        </h3>
                        <span className="text-lg font-medium text-cafe-brown">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-cafe-brown-light mt-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default MenuSection;
