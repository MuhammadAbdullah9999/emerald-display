import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { ArrowRight, Leaf, Recycle, Award } from 'lucide-react';
import carousel1 from '@/assets/carousel-1.jpg';
import carousel2 from '@/assets/carousel-2.jpg';
import carousel3 from '@/assets/carousel-3.jpg';
import { useEffect, useMemo, useState } from 'react';

const Hero = () => {
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const slides = useMemo(() => ([
    {
      badge: '100% Eco-Friendly',
      titleTop: 'Your Sustainable',
      titleHighlight: 'Packaging Partner',
      description: 'Eco-friendly non-woven bags for stores, shopping malls, and businesses. Customizable, durable, and designed for a greener tomorrow.',
      image: carousel1,
      alt: 'Eco-friendly non-woven bags collection',
      stats: { a: '1000+', aL: 'Happy Clients', b: '50+', bL: 'Bag Varieties', c: '100%', cL: 'Eco-Friendly' },
    },
    {
      badge: 'Premium Quality',
      titleTop: 'Crafted For',
      titleHighlight: 'Modern Retail',
      description: 'Elegant designs, strong materials, and customizable printing. Make your brand stand out with sustainable packaging.',
      image: carousel2,
      alt: 'Manufacturing process of eco-friendly bags',
      stats: { a: '25+', aL: 'Colors', b: '80-200', bL: 'GSM Range', c: '7-10', cL: 'Day Delivery' },
    },
    {
      badge: 'Biodegradable',
      titleTop: 'Better for',
      titleHighlight: 'Your Customers',
      description: 'Comfortable handles, reusable materials, and professional looks—great for malls, boutiques, and events.',
      image: carousel3,
      alt: 'Customers using sustainable packaging solutions',
      stats: { a: '4+', aL: 'Handle Types', b: '2', bL: 'Print Methods', c: '100%', cL: 'Reusable' },
    },
  ]), []);

  useEffect(() => {
    if (!api) return;

    let raf: number | null = null;
    let timeoutId: number | null = null;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    const setSizes = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    const tick = () => {
      api.scrollNext();
      schedule();
    };

    const schedule = () => {
      timeoutId = window.setTimeout(() => {
        raf = window.requestAnimationFrame(tick);
      }, 4000);
    };

    setSizes();
    api.on('select', onSelect);
    api.on('reInit', setSizes);

    schedule();

    return () => {
      api.off('select', onSelect);
      api.off('reInit', setSizes);
      if (timeoutId) window.clearTimeout(timeoutId);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [api]);

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
          <CarouselContent>
            {slides.map((s, idx) => (
              <CarouselItem key={idx}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Text */}
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="inline-flex items-center space-x-2 rounded-full bg-accent/50 px-4 py-2 text-sm font-medium text-accent-foreground">
                        <Leaf className="h-4 w-4" />
                        <span>{s.badge}</span>
                      </div>
                      <h1 className="text-4xl font-bold leading-tight text-primary-foreground lg:text-6xl">
                        {s.titleTop}
                        <br />
                        <span className="text-sage-green">{s.titleHighlight}</span>
                      </h1>
                      <p className="text-lg text-primary-foreground/90 lg:text-xl">
                        {s.description}
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
                      <Button size="lg" variant="outline" className="border-primary-foreground/20  hover:bg-primary-foreground/10">
                        Custom Quote
                      </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-8 border-t border-primary-foreground/20">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-foreground">{s.stats.a}</div>
                        <div className="text-sm text-primary-foreground/70">{s.stats.aL}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-foreground">{s.stats.b}</div>
                        <div className="text-sm text-primary-foreground/70">{s.stats.bL}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-foreground">{s.stats.c}</div>
                        <div className="text-sm text-primary-foreground/70">{s.stats.cL}</div>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-eco">
                      <img
                        src={s.image}
                        alt={s.alt}
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
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  current === i ? 'bg-sage-green' : 'bg-primary-foreground/30 hover:bg-primary-foreground/60'
                }`}
              />
            ))}
          </div>
        </Carousel>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-foreground/5 to-transparent opacity-20"></div>
    </section>
  );
};

export default Hero;