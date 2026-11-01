import Link from "next/link";
import SocialMediaIcons from "./social-media-icons";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between text-xl">
      <Link href="/">samwave.io</Link>
      <div className="flex gap-5 items-center">
        <div className="flex gap-1 items-center text-gray-500">
          <Link
            href="/projects"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            Projects
          </Link>
          <ChevronDown className="size-4" />
        </div>
        <SocialMediaIcons />
      </div>
    </div>
  );
}
