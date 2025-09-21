import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Package, Store, Coffee } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      icon: ShoppingBag,
      title: "D-Cut Shopping Bags",
      description: "Perfect for retail stores and supermarkets. Available in various sizes and colors.",
      features: ["Reinforced handles", "Custom printing", "100-200 GSM"],
      price: "From ₹25",
      popular: true,
    },
    {
      icon: Package,
      title: "Loop Handle Bags",
      description: "Elegant bags ideal for boutiques and premium stores. Soft handles for comfort.",
      features: ["Soft fabric handles", "Premium finish", "80-120 GSM"],
      price: "From ₹35",
      popular: false,
    },
    {
      icon: Store,
      title: "Box Type Bags",
      description: "Structured bags perfect for gift shops and promotional events.",
      features: ["Box-shaped design", "Laminated finish", "90-150 GSM"],
      price: "From ₹40",
      popular: false,
    },
    {
      icon: Coffee,
      title: "Drawstring Bags",
      description: "Versatile bags for bakeries and food outlets. Easy to close and carry.",
      features: ["Drawstring closure", "Food safe", "100-130 GSM"],
      price: "From ₹30",
      popular: false,
    },
  ];

  const specifications = [
    { label: "Material", value: "100% Non-Woven Polypropylene" },
    { label: "GSM Range", value: "80-200 GSM" },
    { label: "Colors", value: "25+ Standard Colors" },
    { label: "Printing", value: "Screen Print, Flexo Print" },
    { label: "Handle Types", value: "D-Cut, Loop, Web, Drawstring" },
    { label: "Customization", value: "Size, Color, Logo, Design" },
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-primary border-primary">
            Our Products
          </Badge>
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            Eco-Friendly Bags for Every Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From retail stores to shopping malls, we have the perfect sustainable packaging solution for your business needs.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {productCategories.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card 
                key={index} 
                className={`relative group hover:shadow-eco transition-all duration-300 ${
                  product.popular ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                {product.popular && (
                  <Badge className="absolute -top-2 left-4 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-eco">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    {product.description}
                  </p>
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-border">
                    <div className="text-lg font-semibold text-primary mb-3">
                      {product.price}
                    </div>
                    <Button className="w-full" variant="outline">
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Specifications */}
        <div className="bg-card rounded-lg p-8 shadow-soft">
          <h3 className="text-2xl font-bold text-center mb-8">Product Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifications.map((spec, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                <span className="font-medium text-foreground">{spec.label}:</span>
                <span className="text-muted-foreground">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;