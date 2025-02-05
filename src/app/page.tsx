import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  MapPin,
  Globe,
  Phone,
  Mail,
  ChevronDown,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import Image from "next/image";
import { ExperienceCard } from "@/components/customs/experience-card";
import { ProjectCarousel } from "@/components/customs/project-carousel";
import { TempBlock } from "@/components/customs/temp-block";
import Link from "next/link";
import {
  experience_list,
  skill_list,
  honor_list,
  community_list,
  presentation_list,
} from "@/lib/lists";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/customs/social-media-icon";

export default function Page() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[400px_1fr]">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-lg">
              <TempBlock width="400" height="400" />
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-bold">
                Hello 👋
                <br />
                I'm Vic Wen
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
                  <InstagramIcon />
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <LinkedInIcon />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Link href="https://github.com/viiccwen">
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
                  of software development and community building.
                </p>
                <p>
                  I have been working in the tech industry for over 5 years and
                  have experience in various domains such as web development,
                  UI/UX design, and marketing.
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
              <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`tech-${i}`}
                    className="flex h-16 w-16 items-center justify-center rounded-lg bg-muted/30"
                  >
                    <div className="h-8 w-8 rounded-full bg-muted" />
                  </div>
                ))}
              </div>
            </section>

            <section>
              <ProjectCarousel />
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold">EDUCATION</h2>

              <div className="space-y-4">
                {experience_list.map((experience, index) => (
                  <ExperienceCard
                    key={`education-${index}`}
                    title={experience.title}
                    subtitle={experience.subtitle}
                    period={experience.period}
                    logo={experience.logo}
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
