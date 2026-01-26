import { projectsData } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-card-bg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-background rounded-lg border border-card-border"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-semibold text-primary">
                  {project.title}
                </h3>
                <span className="text-sm text-secondary mt-1 sm:mt-0">
                  {project.period}
                </span>
              </div>

              <p className="text-accent text-sm mb-3">{project.client}</p>

              <p className="text-foreground/80 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-secondary sm:ml-auto">
                  Role: {project.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
