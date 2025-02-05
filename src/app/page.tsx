import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Globe, Mail } from "lucide-react";
import { ExperienceCard } from "@/components/customs/experience-card";
import { ProjectCarousel } from "@/components/customs/project-carousel";
import Link from "next/link";
import {
  experience_list,
  skill_list,
  honor_list,
  community_list,
  presentation_list,
  education_list,
  techstack_list,
} from "@/lib/lists";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/customs/social-media-icon";
import Image from "next/image";

export default function Page() {
  const techstacks = [...techstack_list, ...techstack_list];

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[400px_1fr]">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-lg flex justify-center">
              <Image
                src="/vicwen.jpg"
                alt="Vic Wen"
                width={400}
                height={400}
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-bold">
                Hello 👋
                <br />
                I&apos;m Vic Wen
              </h1>
              <p className="text-lg text-muted-foreground">
                Software Engineer
                <br />
                Technology & Community Enthusiast
              </p>

              <div className="flex items-center gap-2">
                <Badge
                  variant={"default"}
                  className="bg-emerald-500 hover:bg-emerald-600"
                >
                  Available for work
                </Badge>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Link href="https://instagram.com/viiccwen" target="_blank">
                    <InstagramIcon />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Link
                    href="https://www.linkedin.com/in/guan-hua-wen-625bb0270/"
                    target="_blank"
                  >
                    <LinkedInIcon />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Link href="https://github.com/viiccwen" target="_blank">
                    <GitHubIcon />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
              </div>

              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Taipei, Taiwan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span>vicwen.app</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>viiccwen@gmail.com</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button variant="outline" className="w-full">
                  Download CV
                </Button>
              </div>
            </div>
          </div>

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
