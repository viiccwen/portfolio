import { DisplayBlock } from "@/components/customs/display-block";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Metadata } from "next";

export default function CompetitionPage() {
  return (
    <>
      <DisplayBlock
        title="2023 ITSA 極客挑戰賽"
        description="全國第五"
      >
        <div>
          <p></p>
        </div>
      </DisplayBlock>

      <DisplayBlock
        title="全國工業類科技藝競賽電腦修護職種"
        description="冠軍"
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
  title: "Competition",
  description: "Competition experience",
};
