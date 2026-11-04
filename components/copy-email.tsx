"use client";

import { useState } from "react";

export default function CopyEmail() {
  const [label, setLabel] = useState("Copy Email");

  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard
          .writeText("sam@samwave.io")
          .then(() => {
            setLabel("Copied!");
            setTimeout(() => setLabel("Copy Email"), 2000);
          })
          .catch(() => alert("Couldn't copy. Email: sam@samwave.io"));
      }}
      className="cursor-pointer"
    >
      {label}
    </button>
  );
}
