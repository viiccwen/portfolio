import Link from "next/link";
import { Separator } from "../ui/separator";
import { list_type } from "@/lib/experience";
import { CircleArrowRight } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  url: string;
  key_des: string;
  link?: string;
  description: list_type[];
}
export const ExperienceItem = (props: ExperienceItemProps) => {
  return (
    <div className="flex flex-col gap-2 font-bold text-sm md:text-xl">
      <div className=" text-slate-600 dark:text-slate-200 text-2xl">
        <div className="flex gap-3 items-center">
          {props.title}
        <Link href={`/about/${props.url}`}>
          <CircleArrowRight />
        </Link>
        </div>
      </div>
      <Separator className="my-3 dark:bg-slate-500" />
      {props.description.map((d, index) =>
        d.link ? (
          <Link
            target="_blank"
            className=" text-blue-400 hover:text-blue-500 transition"
            href={d.link}
            key={`${props.key_des}-${index}`}
          >
            {d.des}
          </Link>
        ) : (
          <p key={`${props.key_des}-${index}`}>{d.des}</p>
        )
      )}
    </div>
  );
};
