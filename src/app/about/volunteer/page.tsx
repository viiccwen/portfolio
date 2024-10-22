import { DisplayBlock } from "@/components/customs/display-block";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Metadata } from "next";

export default function VolunteerPage() {
  return (
    <>
      <DisplayBlock
        title="2024 AID Summer Camp"
        description="@RFJH"
      >
        <div>
          <p></p>
        </div>
      </DisplayBlock>

      <DisplayBlock
        title="翰林文教基金會"
        description="暑期課輔志工"
      >
        <div>
          <p></p>
        </div>
      </DisplayBlock>

      <DisplayBlock
        title="瑞芳扶少團x日本八代南扶少團"
        description="志工服務"
      >
        <div>
          <p></p>
        </div>
      </DisplayBlock>

      <div className="fixed right-7 bottom-10">
        <ModeToggle />
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "Volunteer",
  description: "Volunteer experience",
};
