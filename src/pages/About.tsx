import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Camera, Award, Users, Calendar } from "lucide-react";

const stats = [
  { icon: Camera, value: "500+", label: "Projects Completed" },
  { icon: Award, value: "25+", label: "Awards Won" },
  { icon: Users, value: "200+", label: "Happy Clients" },
  { icon: Calendar, value: "10+", label: "Years Experience" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552168324-d612d77725e3?w=800&q=80"
                  alt="Photographer at work"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/20 -z-10" />
            </div>

            {/* Content */}
            <div>
              <p className="text-primary font-serif tracking-widest mb-2 uppercase text-xs">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-serif tracking-tight mb-8">
                Alex <span className="text-primary">Mitchell</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A passionate photographer based in New York City, specializing in
                portrait, landscape, and event photography. My journey began over
                a decade ago when I picked up my first camera, and since then,
                photography has become not just a profession but a way of seeing
                the world.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I believe that every moment holds a story waiting to be told, and
                my mission is to capture those fleeting instances of beauty,
                emotion, and authenticity. Whether it's the quiet intimacy of a
                portrait or the grandeur of a sweeping landscape, I approach each
                project with the same dedication to craft and attention to detail.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 bg-muted/50 rounded-xl"
                  >
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-3xl font-serif text-foreground">{stat.value}</p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-muted/30 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
              My <span className="text-primary">Philosophy</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              "Photography is the art of frozen time... the ability to store
              emotion and feelings within a frame."
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I strive to create images that resonate on an emotional level,
              going beyond mere documentation to capture the essence of a moment.
              Natural light, authentic expressions, and thoughtful composition
              are the cornerstones of my work. I believe the best photographs are
              those that feel both timeless and immediate.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4">
              What I <span className="text-primary">Offer</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Professional photography services tailored to your unique vision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Portrait Photography",
                description:
                  "From headshots to creative portraits, I capture your unique personality and essence.",
                image:
                  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
              },
              {
                title: "Event Coverage",
                description:
                  "Weddings, corporate events, and celebrations documented with an artistic eye.",
                image:
                  "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80",
              },
              {
                title: "Landscape & Travel",
                description:
                  "Stunning imagery of places and spaces that inspire wanderlust and wonder.",
                image:
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group bg-card border border-border transition-all duration-500 hover:border-primary/50"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
