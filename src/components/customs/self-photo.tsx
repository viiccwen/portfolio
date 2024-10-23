import Image from "next/image";

interface SelfPhotoProps {
  src: string;
}

export const SelfPhoto = (props: SelfPhotoProps) => {
  return (
    <>
      <Image
        className="rounded-3xl shadow-2xl animate-in mb-5"
        src={props.src}
        width={300}
        height={300}
        alt="vic's photo"
      />
    </>
  );
};
