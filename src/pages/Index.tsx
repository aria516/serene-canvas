import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Gallery Preview */}
      <Gallery showFilters={true} limit={6} />
      
      {/* View All CTA */}
      <div className="text-center pb-20">
        <Button asChild variant="outline" size="lg" className="group">
          <Link to="/work">
            View All Work
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>

      {/* Brief About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
              About the <span className="text-primary">Artist</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              With over a decade of experience, I specialize in capturing authentic
              moments that tell compelling stories. From intimate portraits to
              grand landscapes, every photograph is crafted with passion and
              precision.
            </p>
            <Button asChild variant="ghost" className="group">
              <Link to="/about">
                Learn More About Me
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4">
            Let's Create <span className="text-primary">Together</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Have a project in mind? I'd love to hear about it.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
