import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Factory, Globe } from 'lucide-react';
import manufacturingImage from '@/assets/manufacturing.jpg';

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Quality Excellence",
      description: "Premium materials and rigorous quality control ensure every bag meets our high standards."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Tailored solutions and dedicated support for businesses of all sizes."
    },
    {
      icon: Factory,
      title: "Manufacturing Excellence",
      description: "State-of-the-art facilities with advanced machinery and skilled craftsmen."
    },
    {
      icon: Globe,
      title: "Environmental Responsibility",
      description: "Leading the transition to sustainable packaging for a greener future."
    }
  ];

  const achievements = [
    { number: "15+", label: "Years Experience" },
    { number: "1000+", label: "Happy Clients" },
    { number: "50M+", label: "Bags Produced" },
    { number: "25+", label: "Colors Available" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-primary border-primary">
            About Bags Hub
          </Badge>
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            Leading the Way in Sustainable Packaging
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are committed to promoting sustainable living through innovative, eco-friendly non-woven bags 
            that help businesses reduce their environmental impact while maintaining quality and style.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Your Trusted Partner for Eco-Friendly Solutions
              </h3>
              <p className="text-muted-foreground">
                As a leading manufacturer of non-woven bags and packaging materials, we understand that 
                each business is unique. That's why we offer a wide variety of bag styles, colors, and sizes, 
                working closely with our clients to develop customized designs that meet their specific needs.
              </p>
              <p className="text-muted-foreground">
                Our bags are designed to be strong, durable, and long-lasting, ensuring they can be used 
                multiple times and are less likely to end up in landfills. We take great pride in offering 
                premium products and first-rate customer support.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </div>

            <Button className="w-fit" variant="default">
              Learn More About Us
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-eco">
              <img
                src={manufacturingImage}
                alt="Bags Hub manufacturing facility"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary rounded-lg p-4 shadow-soft">
              <div className="text-primary-foreground">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Eco-Friendly</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="group hover:shadow-eco transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-eco">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;