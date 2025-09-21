import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowRight, Leaf, Recycle, Award } from 'lucide-react';
import carousel1 from '@/assets/carousel-1.jpg';
import carousel2 from '@/assets/carousel-2.jpg';
import carousel3 from '@/assets/carousel-3.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 rounded-full bg-accent/50 px-4 py-2 text-sm font-medium text-accent-foreground">
                <Leaf className="h-4 w-4" />
                <span>100% Eco-Friendly</span>
              </div>
              <h1 className="text-4xl font-bold leading-tight text-primary-foreground lg:text-6xl">
                Your Sustainable
                <br />
                <span className="text-sage-green">Packaging Partner</span>
              </h1>
              <p className="text-lg text-primary-foreground/90 lg:text-xl">
                Eco-friendly non-woven bags for stores, shopping malls, and businesses. 
                Customizable, durable, and designed for a greener tomorrow.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Recycle className="h-5 w-5 text-sage-green" />
                <span className="text-sm font-medium">100% Recyclable</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Award className="h-5 w-5 text-sage-green" />
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Leaf className="h-5 w-5 text-sage-green" />
                <span className="text-sm font-medium">Biodegradable</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="group">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Custom Quote
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">1000+</div>
                <div className="text-sm text-primary-foreground/70">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">50+</div>
                <div className="text-sm text-primary-foreground/70">Bag Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">100%</div>
                <div className="text-sm text-primary-foreground/70">Eco-Friendly</div>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative">
            <Carousel className="w-full max-w-lg mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-eco">
                    <img
                      src={carousel1}
                      alt="Eco-friendly non-woven bags collection"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-eco">
                    <img
                      src={carousel2}
                      alt="Manufacturing process of eco-friendly bags"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-eco">
                    <img
                      src={carousel3}
                      alt="Customers using sustainable packaging solutions"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent rounded-full p-4 shadow-soft">
              <Leaf className="h-8 w-8 text-accent-foreground" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary rounded-full p-4 shadow-soft">
              <Recycle className="h-8 w-8 text-secondary-foreground" />
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-foreground/5 to-transparent opacity-20"></div>
    </section>
  );
};

export default Hero;