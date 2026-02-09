import { Header } from "@/components/Header";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif tracking-widest mb-6 uppercase">
            Selected <span className="text-primary">Works</span>
          </h1>
          <div className="h-1 w-20 bg-primary/20 mx-auto mb-8" />
          <p className="text-muted-foreground max-w-lg mx-auto font-light tracking-wide">
            Explore my complete collection of photography work across various
            categories and styles.
          </p>
        </div>
      </section>

      {/* Full Gallery */}
      <Gallery showFilters={true} />

      <Footer />
    </div>
  );
};

export default Work;
