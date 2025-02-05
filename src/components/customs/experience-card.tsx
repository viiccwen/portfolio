'use client';

import Image from "next/image";
import { Card } from "../ui/card";
import { ChevronDown } from "lucide-react";
import { TempBlock } from "./temp-block";

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  period: string;
  logo: string;
}

export const ExperienceCard = ({
  title,
  subtitle,
  period,
  logo,
}: ExperienceCardProps) => {
  return (
    <Card className="flex items-center gap-4 p-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
        <TempBlock width="40" height="40" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>{period}</span>
        <ChevronDown className="h-4 w-4" />
      </div>
    </Card>
  );
};
