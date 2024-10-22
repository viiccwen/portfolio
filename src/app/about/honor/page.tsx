import { DisplayBlock } from "@/components/customs/display-block";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Metadata } from "next";

export default function HonorPage() {
  return (
    <>
      <DisplayBlock
        title="台灣科技大學 113學年度電資學院傑出青年"
        description=""
      >
        <div>
          <p></p>
        </div>
      </DisplayBlock>

      <DisplayBlock
        title="全國技職繁星計畫電機與電子群"
        description="榜首"
      >
        <div>
          <p></p>
        </div>
      </DisplayBlock>
      <DisplayBlock
        title="大專院校優秀資(通)訊人才獎學金"
        description="第一屆得主"
      >
        <div>
          <p></p>
        </div>
      </DisplayBlock>
      <DisplayBlock
        title="鴻海教育基金會鴻海獎學鯨"
        description="第七屆得主"
      >
        <div>
          <p></p>
        </div>
      </DisplayBlock>
      <DisplayBlock
        title="112學年書卷獎"
        description="GPA 4.3/4.3"
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
  title: "Honor",
  description: "Honor experience",
};
