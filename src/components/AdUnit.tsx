import { useEffect, useRef } from 'react'

// Google AdSense publisher account for Filanwaa.
export const ADSENSE_CLIENT = 'ca-pub-8273218830552772'

// Ad slot IDs. Create display ad units in your AdSense dashboard
// (Ads → By ad unit → Display ads) and paste the numeric slot ID here.
// Until a real slot ID is set, AdSense simply renders nothing — the page stays clean.
export const AD_SLOTS = {
  inContent: '', // e.g. '1234567890'
  footer: '',
}

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[]
  }
}

interface AdUnitProps {
  slot?: string
  format?: string
  layout?: string
  style?: React.CSSProperties
}

/**
 * Responsive AdSense display unit. Renders an <ins class="adsbygoogle"> and
 * registers it with the AdSense script on mount (client-side only).
 * If no slot is configured it renders nothing, so empty placeholders never ship.
 */
export function AdUnit({ slot, format = 'auto', layout, style }: AdUnitProps) {
  const pushed = useRef(false)

  useEffect(() => {
    if (pushed.current || !slot) return
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      pushed.current = true
    } catch {
      // AdSense not loaded yet (e.g. blocked) — fail silently.
    }
  }, [slot])

  if (!slot) return null

  return (
    <div style={{ maxWidth: 900, margin: '2rem auto', textAlign: 'center', ...style }} aria-hidden="true">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-ad-layout={layout}
        data-full-width-responsive="true"
      />
    </div>
  )
}
