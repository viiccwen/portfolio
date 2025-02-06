"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Globe, Mail, Languages } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/customs/social-media-icon";
import { Dispatch, SetStateAction } from "react";

interface InfoBlockProps {
  lang: string;
  setLang: Dispatch<SetStateAction<string>>;
}

export const InfoBlock = ({ lang, setLang }: InfoBlockProps) => {
  return (
    <div className="space-y-6">
      <div className="sm:fixed">
        <div className="overflow-hidden rounded-lg flex justify-center">
          <Image
            src="/vicwen.jpg"
            alt="Vic Wen"
            width={400}
            height={400}
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">
            Hello 👋
            <br />
            I&apos;m Vic Wen
          </h1>
          <p className="text-lg text-muted-foreground">
            Software Engineer
            <br />
            Technology & Community Enthusiast
          </p>

          <div className="flex items-center gap-2">
            <Badge
              variant={"default"}
              className="bg-emerald-500 hover:bg-emerald-600"
            >
              Available for work
            </Badge>
            <Button variant="outline" size="icon" className="rounded-full" onClick={() => {
              
              setLang(lang === "zh-TW" ? "en" : "zh-TW");
            }}>
              <Languages />
            </Button>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" size="icon" className="rounded-full">
              <Link href="https://instagram.com/viiccwen" target="_blank">
                <InstagramIcon />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Link
                href="https://www.linkedin.com/in/guan-hua-wen-625bb0270/"
                target="_blank"
              >
                <LinkedInIcon />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Link href="https://github.com/viiccwen" target="_blank">
                <GitHubIcon />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>

          <div className="space-y-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Taipei, Taiwan</span>
            </div>
            <Link
              className="flex items-center gap-2"
              href="https://blog.vicwen.app"
              target="_blank"
            >
              <Globe className="h-4 w-4" />
              <span>blog.vicwen.app</span>
            </Link>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>viiccwen@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button variant="outline" className="w-full" disabled>
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
