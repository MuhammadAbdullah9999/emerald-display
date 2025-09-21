import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { ArrowRight, Leaf, Recycle, Award } from 'lucide-react';
import carousel1 from '@/assets/carousel-1.jpg';
import carousel2 from '@/assets/carousel-2.jpg';
import carousel3 from '@/assets/carousel-3.jpg';
import { useEffect, useState } from 'react';

const slides = [
  {
    badgeIcon: Leaf,
    badgeText: '100% Eco-Friendly',
    titleLine1: 'Your Sustainable',
    titleAccent: 'Packaging Partner',
    description:
      'Eco-friendly non-woven bags for stores, shopping malls, and businesses. Customizable, durable, and designed for a greener tomorrow.',
    image: carousel1,
  },
  {
    badgeIcon: Award,
    badgeText: 'Premium Quality',
    titleLine1: 'Premium Non-Woven',
    titleAccent: 'Bags for Brands',
    description:
      'Durable, reusable, and brandable bags that elevate your customer experience and reduce environmental impact.',
    image: carousel2,
  },
  {
    badgeIcon: Recycle,
    badgeText: 'Biodegradable',
    titleLine1: 'Sustainable Choices',
    titleAccent: 'For Every Business',
    description:
      'From retail to events, choose eco-friendly packaging that looks great and performs even better.',
    image: carousel3,
  },
];

const Hero = () => {
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(slides.length);

  useEffect(() => {
    if (!api) return;

    const update = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    update();
    api.on('reInit', update);
    api.on('select', update);

    return () => {
      api.off('reInit', update);
      api.off('select', update);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    let raf: number | null = null;
    let timeoutId: number | null = null;

    const tick = () => {
      api.scrollNext();
      schedule();
    };

    const schedule = () => {
      timeoutId = window.setTimeout(() => {
        raf = window.requestAnimationFrame(tick);
      }, 3000);
    };

    schedule();

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [api]);

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="relative">
          <Carousel className="w-full mx-auto" opts={{ loop: true }} setApi={setApi}>
            <CarouselContent>
              {slides.map((slide, index) => {
                const BadgeIcon = slide.badgeIcon;
                return (
                  <CarouselItem key={index}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      {/* Text Content */}
                      <div className="space-y-8">
                        <div className="space-y-4">
                          <div className="inline-flex items-center space-x-2 rounded-full bg-accent/50 px-4 py-2 text-sm font-medium text-accent-foreground">
                            <BadgeIcon className="h-4 w-4" />
                            <span>{slide.badgeText}</span>
                          </div>
                          <h1 className="text-4xl font-bold leading-tight text-primary-foreground lg:text-6xl">
                            {slide.titleLine1}
                            <br />
                            <span className="text-sage-green">{slide.titleAccent}</span>
                          </h1>
                          <p className="text-lg text-primary-foreground/90 lg:text-xl">
                            {slide.description}
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

                      {/* Image */}
                      <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-eco">
                          <img
                            src={slide.image}
                            alt="Sustainable eco-friendly bags"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 bg-accent rounded-full p-4 shadow-soft">
                          <Leaf className="h-8 w-8 text-accent-foreground" />
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-secondary rounded-full p-4 shadow-soft">
                          <Recycle className="h-8 w-8 text-secondary-foreground" />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {/* Pagination Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  current === i ? 'bg-primary-foreground scale-100' : 'bg-primary-foreground/40 scale-90 hover:bg-primary-foreground/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-foreground/5 to-transparent opacity-20"></div>
    </section>
  );
};

export default Hero;