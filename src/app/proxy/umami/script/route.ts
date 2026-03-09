// app/_proxy/umami/script/route.ts
//
// Proxies the Umami script through the client's own domain.
// Ad blockers see clientsite.com/_proxy/umami/script — not umami.yourdomain.com
//
// Usage in .env.local:
//   NEXT_PUBLIC_UMAMI_SCRIPT_URL=/api/_proxy/umami/script  ← relative, no domain needed

import { NextResponse } from "next/server";
import { env } from "@/src/lib/env";

const UMAMI_URL = env.UMAMI_URL; // e.g. https://umami.yourdomain.com

export async function GET() {
  if (!UMAMI_URL) {
    return new NextResponse("UMAMI_URL not configured", { status: 500 });
  }

  const res = await fetch(`${UMAMI_URL}/script.js`, {
    next: { revalidate: 3600 }, // Cache the script for 1 hour
  });

  const script = await res.text();

  return new NextResponse(script, {
    headers: {
      "Content-Type": "application/javascript",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
