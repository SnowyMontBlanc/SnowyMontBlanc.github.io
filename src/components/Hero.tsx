import { profileData } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-medium mb-4">{profileData.title}</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          {profileData.name}
        </h1>
        <p className="text-secondary text-lg mb-2">{profileData.nameEn}</p>
        <p className="text-xl sm:text-2xl text-accent font-medium mb-8">
          {profileData.catchphrase}
        </p>
        <p className="text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          {profileData.introduction}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-medium transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-white rounded-full font-medium transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
