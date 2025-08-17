"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
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
  open_source_list,
  about_content,
} from "@/lib/lists";
import { InfoBlock } from "@/components/customs/info-block";
import i18n from "@/lib/i18n";

export default function Page() {
  const [lang, setLang] = useState("en-US");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLang(navigator.language);
    }
  }, []);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const { t } = useTranslation("translation", { i18n });
  const techstacks = [...techstack_list, ...techstack_list];

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-[400px_1fr]">
          {/* Left Column */}
          <InfoBlock lang={lang} setLang={setLang} />

          {/* Right Column */}
          <div className="space-y-8">
            {/* about */}
            <section>
              <h2 className="mb-4 text-lg font-semibold">{t("ABOUT")}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t(about_content.introduction)}</p>
                <p>{t(about_content.conclusion)}</p>
              </div>
            </section>

            {/* skills */}
            <section>
              <h2 className="mb-4 text-lg font-semibold">{t("SKILLS")}</h2>
              <div className="flex flex-wrap gap-2">
                {skill_list.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </section>

            {/* open source */}
            <section>
              <h2 className="mb-4 text-lg font-semibold">{t("OPEN SOURCE")}</h2>
              <div className="space-y-4">
                {open_source_list.map((open_source, index) => (
                  <ExperienceCard
                    key={`open-source-${index}`}
                    title={open_source.title}
                    subtitle={open_source.subtitle}
                    period={open_source.period}
                    logo={open_source.logo}
                    description={open_source.description}
                  />
                ))}
              </div>
            </section>

            {/* experience */}
            <section>
              <h2 className="mb-4 text-lg font-semibold">{t("EXPERIENCE")}</h2>
              <div className="space-y-4">
                {experience_list.map((experience, index) => (
                  <ExperienceCard
                    key={`experience-${index}`}
                    title={experience.title}
                    subtitle={experience.subtitle}
                    period={experience.period}
                    logo={experience.logo}
                    description={experience.description}
                  />
                ))}
              </div>
            </section>

            {/* tech stack */}
            <section>
              <h2 className="mb-4 text-lg font-semibold">{t("TECH STACK")}</h2>
              <div className="overflow-hidden group [--scroll-speed:25s] group-hover:[--scroll-speed:40s]">
                <div className="flex items-center gap-4 animate-scroll whitespace-nowrap">
                  {techstacks.map((tech, i) => (
                    <Image
                      key={i}
                      src={tech.logo || ""}
                      alt={tech.name || "logo"}
                      width={48}
                      height={48}
                      className="transition-transform hover:scale-110"
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* project */}
            <section>
              <div>
                <h2 className="mb-4 text-lg font-semibold">{t("PROJECT")}</h2>
                <ProjectCarousel />
              </div>
            </section>

            {/* education */}
            <section>
              <h2 className="mb-4 text-lg font-semibold">{t("EDUCATION")}</h2>

              <div className="space-y-4">
                {education_list.map((education, index) => (
                  <ExperienceCard
                    key={`education-${index}`}
                    title={education.title}
                    subtitle={education.subtitle}
                    period={education.period}
                    logo={education.logo}
                    description={education.description}
                  />
                ))}
              </div>
            </section>

            {/* honor */}
            <section>
              <h2 className="mb-4 text-lg font-semibold">{t("HONOR")}</h2>

              <div className="space-y-4">
                {honor_list.map((honor, index) => (
                  <ExperienceCard
                    key={`honor-${index}`}
                    title={honor.title}
                    subtitle={honor.subtitle}
                    period={honor.period}
                    logo={honor.logo}
                    description={honor.description}
                  />
                ))}
              </div>
            </section>

            {/* community */}
            <section>
              <h2 className="mb-4 text-lg font-semibold">{t("COMMUNITY")}</h2>

              <div className="space-y-4">
                {community_list.map((community, index) => (
                  <ExperienceCard
                    key={`community-${index}`}
                    title={community.title}
                    subtitle={community.subtitle}
                    period={community.period}
                    logo={community.logo}
                    text={community.text}
                    link={community.link}
                    description={community.description}
                  />
                ))}
              </div>
            </section>

            {/* presentation */}
            <section>
              <h2 className="mb-4 text-lg font-semibold">
                {t("PRESENTATION")}
              </h2>

              <div className="space-y-4">
                {presentation_list.map((presentation, index) => (
                  <ExperienceCard
                    key={`presentation-${index}`}
                    title={presentation.title}
                    text={presentation.text}
                    link={presentation.link}
                    subtitle={presentation.subtitle}
                    period={presentation.period}
                    logo={presentation.logo}
                    description={presentation.description}
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
