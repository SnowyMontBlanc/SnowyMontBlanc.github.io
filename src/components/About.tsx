import { profileData, aboutData } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-card-bg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Profile
            </h3>
            <div className="space-y-3 text-foreground/80">
              <p>
                <span className="font-medium">Name:</span> {profileData.name}
              </p>
              <p>
                <span className="font-medium">Education:</span>{" "}
                {profileData.education}
              </p>
              <p>
                <span className="font-medium">Current:</span>{" "}
                {profileData.currentPosition}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Summary</h3>
            <p className="text-foreground/80 leading-relaxed">
              {aboutData.summary}
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-primary text-center">
            Strengths
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {aboutData.strengths.map((strength, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-background rounded-lg border border-card-border"
              >
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{strength}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
