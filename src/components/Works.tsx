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
              className="p-6 bg-card-bg rounded-lg border border-card-border"
            >
              <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
              <p className="text-secondary text-sm mb-4">{work.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
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
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm hover:underline"
                >
                  リンクを見る →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
