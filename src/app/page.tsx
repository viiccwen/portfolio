import { Badge } from "@/components/ui/badge";
import { ExperienceCard } from "@/components/customs/experience-card";
import { ProjectCarousel } from "@/components/customs/project-carousel";
import {
  experience_list,
  skill_list,
  honor_list,
  community_list,
  presentation_list,
  education_list,
  techstack_list,
} from "@/lib/lists";
import Image from "next/image";
import { InfoBlock } from "@/components/customs/info-block";

export default function Page() {
  const techstacks = [...techstack_list, ...techstack_list];

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[400px_1fr]">
          {/* Left Column */}
          <InfoBlock />

          {/* Right Column */}
          <div className="space-y-8">
            <section>
              <h2 className="mb-4 text-lg font-semibold">ABOUT</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I am Vic Wen, a passionate Software Engineer residing in the
                  city of Taipei, Taiwan. My expertise lies at the intersection
                  of software development and community building. I am currently
                  expanding my skills in Machine Learning /Deep Learning.
                </p>
                <p>
                  I am always open to new opportunities and collaborations. Feel
                  free to reach out—let’s connect and grow together! 🚀
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold">SKILLS</h2>
              <div className="flex flex-wrap gap-2">
                {skill_list.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold">EXPERIENCE</h2>
              <div className="space-y-4">
                {experience_list.map((experience, index) => (
                  <ExperienceCard
                    key={`experience-${index}`}
                    title={experience.title}
                    subtitle={experience.subtitle}
                    period={experience.period}
                    logo={experience.logo}
                  />
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold">TECH STACK</h2>
              <div className="overflow-hidden">
                <div className="flex items-center gap-4 animate-scroll whitespace-nowrap">
                  {techstacks.map((tech, i) => (
                    <Image
                      key={i}
                      src={tech.logo || ""}
                      alt={tech.name || "logo"}
                      width={48}
                      height={48}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section>
              <div>
                <h2 className="mb-4 text-lg font-semibold">PROJECT</h2>
                <ProjectCarousel />
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold">EDUCATION</h2>

              <div className="space-y-4">
                {education_list.map((education, index) => (
                  <ExperienceCard
                    key={`education-${index}`}
                    title={education.title}
                    subtitle={education.subtitle}
                    period={education.period}
                    logo={education.logo}
                  />
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold">HONOR</h2>

              <div className="space-y-4">
                {honor_list.map((honor, index) => (
                  <ExperienceCard
                    key={`honor-${index}`}
                    title={honor.title}
                    subtitle={honor.subtitle}
                    period={honor.period}
                    logo={honor.logo}
                  />
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold">COMMUNITY</h2>

              <div className="space-y-4">
                {community_list.map((community, index) => (
                  <ExperienceCard
                    key={`community-${index}`}
                    title={community.title}
                    subtitle={community.subtitle}
                    period={community.period}
                    logo={community.logo}
                  />
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold">PRESENTATION</h2>

              <div className="space-y-4">
                {presentation_list.map((presentation, index) => (
                  <ExperienceCard
                    key={`presentation-${index}`}
                    title={presentation.title}
                    subtitle={presentation.subtitle}
                    period={presentation.period}
                    logo={presentation.logo}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
