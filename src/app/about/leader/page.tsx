import { DisplayBlock } from "@/components/customs/display-block";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Metadata } from "next";

export default function LeaderPage() {
  return (
    <>
      <DisplayBlock
        title="GDG on Campus NTUST Lead"
        description="Google學生開發者社群 @臺科"
        title_photo="/NTUST_GDGC.png"
        photo_width={200}
        photo_height={200}
      >
        <div>
          <p>擔任2024、2025年 GDG on Campus NTUST Lead</p>
        </div>
      </DisplayBlock>

      <DisplayBlock
        title="台灣科技大學資訊工程系系學會 會長"
        description=""
        title_photo="/NTUST_CSIE.png"
        photo_width={80}
        photo_height={80}
      >
        <div>
          <p>擔任2024、2025年台灣科技大學資訊工程系系學會會長</p>
        </div>
      </DisplayBlock>

      <DisplayBlock
        title="3490地區新北瑞芳扶少團 團長"
        description=""
        title_photo="/Rotary.png"
        photo_width={150}
        photo_height={150}
      >
        <div>
          <p>擔任3490地區新北瑞芳扶少團 創團團長</p>
        </div>
      </DisplayBlock>




      <div className="fixed right-7 bottom-10">
        <ModeToggle />
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "Leader",
  description: "Leader experience",
};
