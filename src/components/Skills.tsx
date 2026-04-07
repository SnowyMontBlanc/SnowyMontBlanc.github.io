import { skillsData, certificationsData } from "@/data/portfolio";

function TagList({ items }: { items: { name: string; level: number }[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          key={item.name}
          className="px-4 py-2 bg-background rounded-full border border-card-border text-sm"
        >
          {item.name}
        </span>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="p-6 bg-card-bg rounded-lg border border-card-border">
            <h3 className="text-xl font-semibold mb-6 text-primary">
              Languages & Frameworks
            </h3>
            <TagList items={skillsData.languages} />
          </div>

          <div className="p-6 bg-card-bg rounded-lg border border-card-border">
            <h3 className="text-xl font-semibold mb-6 text-primary">Mobile</h3>
            <TagList items={skillsData.mobile} />

            <h3 className="text-xl font-semibold mb-6 mt-8 text-primary">Database</h3>
            <TagList items={skillsData.databases} />
          </div>
        </div>

        <div className="p-6 bg-card-bg rounded-lg border border-card-border mb-8">
          <h3 className="text-xl font-semibold mb-6 text-primary">Infrastructure</h3>
          <TagList items={skillsData.infrastructure} />
        </div>

        <div className="p-6 bg-card-bg rounded-lg border border-card-border mb-12">
          <h3 className="text-xl font-semibold mb-6 text-primary">Tools</h3>
          <div className="flex flex-wrap gap-3">
            {skillsData.tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-background rounded-full border border-card-border text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {certificationsData.map((cert, index) => (
              <div
                key={index}
                className="p-6 bg-card-bg rounded-lg border border-card-border text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">{cert.name}</h4>
                <p className="text-sm text-secondary">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
