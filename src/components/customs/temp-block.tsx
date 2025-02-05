"use client";

import { cn } from "@/lib/utils";

interface TempBlockProps {
  width: string;
  height: string;
}

export const TempBlock = ({ width, height }: TempBlockProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg bg-muted/30 border",
        `h-[${height}px]`,
        `w-[${width}px]`
      )}
    >
      <div className="h-8 w-8 rounded-full bg-muted" />
    </div>
  );
};
