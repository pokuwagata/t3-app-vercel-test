"use client";

import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();

  return (
    <button
      onClick={async () => {
        await fetch("/api/examples", { method: "put" });
        router.refresh();
      }}
    >
      +
    </button>
  );
}
