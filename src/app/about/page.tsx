import { ExperienceItem } from "@/components/customs/experience-item";
import { ScrollToTopButton } from "@/components/customs/scroll-to-top";
import { SelfPhoto } from "@/components/customs/self-photo";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  ThreadsIcon,
} from "@/components/customs/social-media-link";
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
import { Metadata } from "next";

export default function AboutPage() {
  return (
    <div>
      <div className="flex flex-col items-center gap-10">
        <p className="text-2xl font-bold">温冠華 VicWen</p>
        <SelfPhoto src="/self-photo.jpg" />
        <div className="flex flex-col items-center">
          <p className="text-slate-500 dark:text-slate-400 font-bold">
            台灣科技大學資訊工程系 二年級
          </p>
          <p className="text-slate-500 dark:text-slate-400 font-sans">
          &quot;Be curious. Be passionate. Be creative.&quot;
          </p>
        </div>
        <div className="flex gap-5">
          <LinkedInIcon />
          <GitHubIcon />
          <InstagramIcon />
          <ThreadsIcon />
        </div>
      </div>

      <div className="flex flex-col gap-10 mt-10">
        <ExperienceItem
          title="領導經歷"
          url="leader"
          key_des="leader"
          description={lead_list}
        />
        <ExperienceItem
          title="專案經歷"
          url="project"
          key_des="project"
          description={project_list}
        />
        <ExperienceItem
          title="實習經歷"
          url="intern"
          key_des="intern"
          description={intern_list}
        />
        <ExperienceItem
          title="榮譽獎項"
          url="honor"
          key_des="honor"
          description={honor_list}
        />
        <ExperienceItem
          title="講師經歷"
          url="presenter"
          key_des="presenter"
          description={presenter_list}
        />
        <ExperienceItem
          title="競賽經歷"
          url="competition"
          key_des="competition"
          description={competition_list}
        />
        <ExperienceItem
          title="志工服務"
          url="volunteer"
          key_des="volunteer"
          description={volunteer_list}
        />
      </div>
      <div className="fixed right-7 bottom-10">
        <ModeToggle />
      </div>
      <div className="fixed right-7 bottom-32">
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "About",
  description: "About Me",
};
