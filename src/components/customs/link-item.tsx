import Link from "next/link";

interface LinkItemProps {
  text: string;
  url: string;
}
export const LinkItem = (props: LinkItemProps) => {
  return (
    <Link
      target="_blank"
      className=" text-blue-400 hover:text-blue-500 transition"
      href={props.url}
    >
      {props.text}
    </Link>
  );
};
