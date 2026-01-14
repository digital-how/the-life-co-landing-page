"use client"

import { useEffect } from 'react'

export function AnalyticsDebug() {
  useEffect(() => {
    // Only show debug in development or when explicitly enabled
    const isDebugEnabled =
      process.env.NODE_ENV !== 'production' ||
      process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === '1'

    if (!isDebugEnabled) return

    // Check if gtag is loaded
    const gtagExists = typeof window !== 'undefined' && typeof window.gtag === 'function'
    const dataLayerExists = typeof window !== 'undefined' && Array.isArray(window.dataLayer)

    // Find all Google Analytics/Tag Manager scripts
    const scripts = Array.from(document.querySelectorAll('script[src]'))
    const gaScripts = scripts.filter((script) => {
      const src = script.getAttribute('src') || ''
      return (
        src.includes('googletagmanager.com') ||
        src.includes('google-analytics.com')
      )
    })

    console.group('🔍 Analytics Debug')
    console.log('window.gtag exists:', gtagExists)
    console.log('window.dataLayer exists:', dataLayerExists)
    console.log('Google Analytics/Tag Manager scripts found:', gaScripts.length)
    gaScripts.forEach((script, index) => {
      console.log(`  Script ${index + 1}:`, script.getAttribute('src'))
    })
    if (dataLayerExists && window.dataLayer) {
      console.log('dataLayer contents:', window.dataLayer)
    }
    console.groupEnd()
  }, [])

  return null
}

