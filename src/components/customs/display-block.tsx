import Image from "next/image";

interface DisplayBlockProps {
  title: string;
  title_photo?: string;
  photo_width?: number;
  photo_height?: number;
  description: string;
  children: React.ReactNode;
}
export const DisplayBlock = (props: DisplayBlockProps) => {
  return (
    <div className="flex flex-col gap-5 mb-16">
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
        {props.title_photo && (
          <div className="md:w-[200px] flex justify-center">
            <Image
              className="dark:bg-slate-200 dark:rounded-2xl"
              src={props.title_photo}
              width={props.photo_width}
              height={props.photo_height}
              alt="title logo"
            />
          </div>
        )}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-base md:text-2xl font-bold text-slate-500 dark:text-slate-400">
            {props.title}
          </h1>
          <p className="text-xs md:text-base font-bold text-slate-500 dark:text-slate-400">
            {props.description}
          </p>
        </div>
      </div>

      {props.children}
    </div>
  );
};
