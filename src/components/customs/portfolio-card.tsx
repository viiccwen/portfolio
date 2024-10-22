import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  children: React.ReactNode;
}

export const PortfolioCard = (props: PortfolioCardProps) => {
  return (
    <div
      className={cn(
        "mt-5 p-5 border-x-2 shadow-xl rounded-xl flex flex-col",
        "w-[350px] md:w-[700px] h-fit",
        "bg-slate-100 border-slate-200 dark:bg-slate-800 dark:border-slate-600"
      )}
    >
      {props.children}
    </div>
  );
};
