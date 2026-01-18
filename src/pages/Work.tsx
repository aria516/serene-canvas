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
          <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-4">
            My <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
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
