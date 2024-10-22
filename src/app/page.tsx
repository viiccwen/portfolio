import { ExperienceItem } from "@/components/customs/experience-item";
import { PortfolioCard } from "@/components/customs/portfolio-card";
import { SelfPhoto } from "@/components/customs/self-photo";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  competition_list,
  honor_list,
  intern_list,
  lead_list,
  presenter_list,
  project_list,
  volunteer_list,
} from "@/lib/experience";
import { AtSign, Github, Instagram } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="w-full min-h-screen flex justify-center mb-20">
        <PortfolioCard>
          <div className="flex flex-col items-center gap-10">
            <p className="text-2xl font-bold">温冠華 VicWen</p>
            <SelfPhoto src="/self-photo.jpg" />
            <p className="text-slate-500 dark:text-slate-400 font-bold">
              台灣科技大學資訊工程系 二年級
            </p>
            <div className="flex gap-5">
              <button className="rounded-full transition duration-300 shadow-lg border hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-900 p-2">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/viiccwen/"
                >
                  <Instagram />
                </Link>
              </button>
              <button className="rounded-full transition duration-300 shadow-lg border hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-900 p-2">
                <Link target="_blank" href="https://github.com/viiccwen/">
                  <Github />
                </Link>
              </button>
              <button className="rounded-full transition duration-300 shadow-lg border hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-900 p-2">
                <Link target="_blank" href="https://www.threads.net/@viiccwen">
                  <AtSign />
                </Link>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-10 mt-10">
            <ExperienceItem
              title="領導經歷"
              key_des="leader"
              description={lead_list}
            />
            <ExperienceItem
              title="專案經歷"
              key_des="project"
              description={project_list}
            />
            <ExperienceItem
              title="實習經歷"
              key_des="volunteer"
              description={intern_list}
            />
            <ExperienceItem
              title="榮譽獎項"
              key_des="honor"
              description={honor_list}
            />
            <ExperienceItem
              title="講師經歷"
              key_des="presenter"
              description={presenter_list}
            />
            <ExperienceItem
              title="競賽經歷"
              key_des="competition"
              description={competition_list}
            />
            <ExperienceItem
              title="志工服務"
              key_des="volunteer"
              description={volunteer_list}
            />
          </div>
        </PortfolioCard>
      </div>
      <div className="fixed right-7 bottom-10">
        <ModeToggle />
      </div>
    </div>
  );
}
