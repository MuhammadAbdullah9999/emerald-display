import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Phone, MessageCircle, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dCutBags from '@/assets/d-cut-bags.jpg';
import loopHandleBags from '@/assets/loop-handle-bags.jpg';
import boxBags from '@/assets/box-bags.jpg';
import drawstringBags from '@/assets/drawstring-bags.jpg';

const ProductDetail = () => {
  const { slug } = useParams();

  const products = {
    "d-cut-shopping-bags": {
      title: "D-Cut Shopping Bags",
      image: dCutBags,
      description: "Perfect for retail stores and supermarkets. Our D-Cut shopping bags are designed for durability and convenience, making them ideal for everyday shopping needs.",
      longDescription: "These versatile D-Cut shopping bags are the perfect choice for retail stores, supermarkets, and grocery shops. Made from high-quality non-woven polypropylene material, they offer excellent strength and durability while maintaining an eco-friendly profile. The reinforced D-cut handles provide comfortable carrying experience for customers.",
      features: [
        "Reinforced D-cut handles for comfort",
        "Custom printing and branding options",
        "Available in 100-200 GSM range",
        "Water-resistant material",
        "Tear-resistant construction",
        "Eco-friendly and recyclable",
        "Multiple size options available",
        "Custom colors available"
      ],
      specifications: [
        { label: "Material", value: "Non-woven Polypropylene" },
        { label: "GSM Range", value: "100-200 GSM" },
        { label: "Handle Type", value: "D-Cut" },
        { label: "Printing", value: "Screen Print, Flexo Print" },
        { label: "Minimum Order", value: "1000 pieces" },
        { label: "Delivery Time", value: "7-10 working days" }
      ],
      applications: ["Retail Stores", "Supermarkets", "Grocery Shops", "Shopping Malls", "Pharmacies"]
    },
    "loop-handle-bags": {
      title: "Loop Handle Bags",
      image: loopHandleBags,
      description: "Elegant bags ideal for boutiques and premium stores. Soft fabric handles provide superior comfort and a premium feel.",
      longDescription: "Our Loop Handle bags are designed for businesses that want to provide their customers with a premium shopping experience. The soft fabric handles offer superior comfort, making them perfect for boutiques, fashion stores, and upscale retail outlets.",
      features: [
        "Soft fabric loop handles",
        "Premium finish and appearance",
        "Available in 80-120 GSM range",
        "Elegant design suitable for boutiques",
        "Custom branding options",
        "Durable construction",
        "Comfortable to carry",
        "Professional appearance"
      ],
      specifications: [
        { label: "Material", value: "Non-woven Polypropylene" },
        { label: "GSM Range", value: "80-120 GSM" },
        { label: "Handle Type", value: "Soft Loop Fabric" },
        { label: "Printing", value: "Screen Print, Flexo Print" },
        { label: "Minimum Order", value: "1000 pieces" },
        { label: "Delivery Time", value: "7-10 working days" }
      ],
      applications: ["Boutiques", "Fashion Stores", "Gift Shops", "Premium Retail", "Brand Stores"]
    },
    "box-type-bags": {
      title: "Box Type Bags",
      image: boxBags,
      description: "Structured bags perfect for gift shops and promotional events. The box-shaped design provides excellent structure and presentation.",
      longDescription: "Box Type bags offer a unique structured design that stands out from traditional shopping bags. Perfect for gift shops, promotional events, and businesses that want to make a lasting impression on their customers.",
      features: [
        "Structured box-shaped design",
        "Laminated finish for durability",
        "Available in 90-150 GSM range",
        "Excellent for gift presentation",
        "Strong bottom support",
        "Professional appearance",
        "Custom printing options",
        "Reusable design"
      ],
      specifications: [
        { label: "Material", value: "Non-woven Polypropylene" },
        { label: "GSM Range", value: "90-150 GSM" },
        { label: "Design", value: "Box-shaped structure" },
        { label: "Finish", value: "Laminated" },
        { label: "Minimum Order", value: "1000 pieces" },
        { label: "Delivery Time", value: "10-12 working days" }
      ],
      applications: ["Gift Shops", "Promotional Events", "Corporate Gifts", "Trade Shows", "Exhibitions"]
    },
    "drawstring-bags": {
      title: "Drawstring Bags",
      image: drawstringBags,
      description: "Versatile bags for bakeries and food outlets. Easy to close and carry with food-safe materials.",
      longDescription: "Our Drawstring bags are specially designed for food outlets, bakeries, and restaurants. The drawstring closure mechanism ensures easy opening and closing while maintaining food safety standards.",
      features: [
        "Drawstring closure mechanism",
        "Food-safe materials",
        "Available in 100-130 GSM range",
        "Easy to open and close",
        "Hygienic construction",
        "Custom printing available",
        "Multiple size options",
        "Cost-effective solution"
      ],
      specifications: [
        { label: "Material", value: "Food-safe Non-woven PP" },
        { label: "GSM Range", value: "100-130 GSM" },
        { label: "Closure", value: "Drawstring" },
        { label: "Food Safe", value: "Yes" },
        { label: "Minimum Order", value: "1000 pieces" },
        { label: "Delivery Time", value: "7-10 working days" }
      ],
      applications: ["Bakeries", "Food Outlets", "Restaurants", "Cafes", "Takeaway Services"]
    }
  };

  const product = products[slug as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const handleWhatsAppContact = () => {
    const message = `Hi! I'm interested in ${product.title}. Can you provide more details and pricing?`;
    const phoneNumber = "919876543210";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneCall = () => {
    window.open('tel:+919876543210', '_self');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/#products" className="text-muted-foreground hover:text-foreground">
            Products
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">{product.title}</span>
        </div>

        {/* Back Button */}
        <Link to="/#products" className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Products</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-eco">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-4">{product.title}</h1>
              <p className="text-lg text-muted-foreground">{product.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.slice(0, 6).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-3">
              <Button onClick={handleWhatsAppContact} className="w-full" size="lg">
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Quote on WhatsApp
              </Button>
              <Button onClick={handlePhoneCall} variant="outline" className="w-full" size="lg">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>

            {/* Applications Badge */}
            <div>
              <h3 className="text-sm font-medium mb-2">Perfect For:</h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app, index) => (
                  <Badge key={index} variant="secondary">{app}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="mt-16 space-y-12">
          {/* About Product */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">About This Product</h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.longDescription}
              </p>
            </CardContent>
          </Card>

          {/* Complete Features */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Complete Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Specifications */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                    <span className="font-medium text-foreground">{spec.label}:</span>
                    <span className="text-muted-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-eco rounded-2xl p-12">
          <h2 className="text-2xl font-bold text-primary-foreground mb-4">
            Ready to Order?
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get a custom quote for {product.title} tailored to your business needs. 
            Our team will help you choose the right specifications and quantities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleWhatsAppContact} size="lg" variant="secondary">
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Custom Quote
            </Button>
            <Button onClick={handlePhoneCall} size="lg" variant="outline" 
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Phone className="mr-2 h-5 w-5" />
              Call for Details
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;