'use client'
// components/analytics/umami.tsx
//
// Drop this into your Next.js layout.tsx once per client site.
// Set NEXT_PUBLIC_UMAMI_WEBSITE_ID in .env.local for each client.
//
// The script and events are proxied through the client's own domain
// so ad blockers never see umami.yourdomain.com.

import Script from 'next/script'
import { env } from '@/src/lib/env'


export function UmamiAnalytics() {
  const websiteId = env.NEXT_PUBLIC_UMAMI_WEBSITE_ID

  if (!websiteId) return


  return (
    <Script
      src="/proxy/umami/script"
      data-website-id={websiteId}
      data-host-url="/proxy/umami"
      strategy="afterInteractive"
    />
  )
}