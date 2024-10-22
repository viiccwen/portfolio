import { DisplayBlock } from "@/components/customs/display-block";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Metadata } from "next";

export default function PresenterPage() {
  return (
    <>
      <DisplayBlock
        title="新北市教育局技藝競賽金手培訓營外聘講師"
        description=""
      >
        <div>
          <p></p>
        </div>
      </DisplayBlock>

      <DisplayBlock
        title="2024 COSCUP 開源人年會"
        description="學生x教育大亂鬥議程軌 講者"
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
  title: "Presenter",
  description: "Presenter experience",
};
