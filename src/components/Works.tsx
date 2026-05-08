import Image from "next/image";
import { worksData } from "@/data/portfolio";

export default function Works() {
  if (worksData.length === 0) return null;

  return (
    <section id="works" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Works</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {worksData.map((work, index) => (
            <div
              key={index}
              className="flex flex-col bg-card-bg rounded-lg border border-card-border overflow-hidden"
            >
              {work.category && (
                <div className="px-6 pt-4">
                  <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-medium">
                    {work.category}
                  </span>
                </div>
              )}

              {work.image && (
                <div className="relative h-48 mx-6 mt-3 rounded-md overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                <p className="text-secondary text-sm mb-4">{work.description}</p>

                {work.highlights && work.highlights.length > 0 && (
                  <ul className="mb-4 space-y-1">
                    {work.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-foreground/70 flex gap-1.5">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                  {work.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-background rounded-full border border-card-border text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {work.url && (
                  <div className="flex justify-end">
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm hover:underline"
                    >
                      GitHub →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
