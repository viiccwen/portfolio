"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "../ui/card";
import { ChevronDown } from "lucide-react";
import i18n from "@/lib/i18n";
import { useTranslation } from "react-i18next";

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  text?: string;
  link?: string;
  period: string;
  logo: string;
}

export const ExperienceCard = ({
  title,
  subtitle,
  text,
  link,
  period,
  logo,
}: ExperienceCardProps) => {
  const { t } = useTranslation("translation", { i18n });

  return (
    <Card className="p-4">
      {/* 預設垂直排列，sm（小型以上）改為橫向排列 */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="flex gap-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white">
            <Image
              src={logo}
              alt={title}
              width={40}
              height={40}
              className="rounded-lg"
            />
          </div>

          <div className="flex-1 sm:text-left">
            <h3 className="font-semibold">{t(title)}</h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <p className="text-sm text-muted-foreground">{t(subtitle)}</p>
              {text && (
                <>
                  <p className="text-sm text-muted-foreground hidden sm:block">
                    |
                  </p>
                  <button className="text-sm text-start text-muted-foreground hover:underline">
                    <Link href={link ?? ""} target="_blank">
                      {text}
                    </Link>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end sm:items-center gap-2 text-sm text-muted-foreground">
          <span>{period}</span>
          <ChevronDown className="h-4 w-4 hidden sm:block" />
        </div>
      </div>
    </Card>
  );
};
