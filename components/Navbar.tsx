import Link from "next/link";
import SocialMediaIcons from "./social-media-icons";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between text-xl">
      <Link href="/" className="text-black">
        samwave.io
      </Link>
      <div className="flex gap-5 items-center">
        <div className="flex gap-1 items-center text-neutral-500">
          <p className="text-sm">Projects</p>
          <ChevronDown className="size-4" />
        </div>
        <SocialMediaIcons />
      </div>
    </div>
  );
}
