"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "../ui/card";
import { ChevronDown } from "lucide-react";
import i18n from "@/lib/i18n";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Separator } from "../ui/separator";

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  text?: string;
  link?: string;
  period: string;
  logo: string;
  description?: (string | { text: string; link?: string })[];
}

export const ExperienceCard = ({
  title,
  subtitle,
  text,
  link,
  period,
  logo,
  description,
}: ExperienceCardProps) => {
  const { t } = useTranslation("translation", { i18n });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="p-4">
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

        <div
          className="flex justify-end sm:items-center gap-2 text-sm text-muted-foreground cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>{period}</span>
        </div>

        {description && <Separator className="w-full sm:hidden " />}
      </div>

      <AnimatePresence>
        {description && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-4 text-sm text-muted-foreground space-y-2">
              {description.map((item, index) => {
                const { text, link } =
                  typeof item === "string"
                    ? { text: item, link: undefined }
                    : { text: item.text, link: item.link };

                return (
                  <p key={index} className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    {link ? (
                      <Link
                        href={link}
                        target="_blank"
                        className="hover:underline"
                      >
                        {t(text)}
                      </Link>
                    ) : (
                      t(text)
                    )}
                  </p>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};
