"use client";

import { useState } from "react";
import Link from "next/link";
import SocialMediaIcons from "./social-media-icons";
import { ChevronDown } from "lucide-react";

import * as Dropdown from "@radix-ui/react-dropdown-menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between text-xl">
      <Link href="/" className="no-underline text-foreground">
        samwave.io
      </Link>
      <div className="flex gap-5 items-center">
        <Dropdown.Root modal={false} open={open} onOpenChange={setOpen}>
          <Dropdown.Trigger asChild>
            <button
              type="button"
              className="inline-flex gap-1 items-center text-sm text-muted outline-none cursor-pointer"
            >
              Menu
              <ChevronDown className="size-4" />
            </button>
          </Dropdown.Trigger>

          <Dropdown.Portal>
            <Dropdown.Content
              className="px-5 py-3 grid gap-2 bg-gray-200 dark:bg-gray-800 cursor-pointer"
              align="start"
              sideOffset={10}
            >
              <Dropdown.Item asChild>
                <Link
                  href="/experience"
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted hover:outline-none no-underline hover:underline"
                >
                  Experience
                </Link>
              </Dropdown.Item>
              <Dropdown.Item asChild>
                <Link
                  href="/projects"
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted hover:outline-none no-underline hover:underline"
                >
                  Projects
                </Link>
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Portal>
        </Dropdown.Root>
        <SocialMediaIcons />
      </div>
    </div>
  );
}
