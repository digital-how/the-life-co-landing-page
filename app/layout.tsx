import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter, Montserrat } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import { MenuProvider } from "@/lib/menu-context"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Weight Loss Program | TheLifeCo",
  description:
    "A personalised weight loss program guided by TheLifeCo's six-layer Healing Journey, designed to support sustainable change for body and mind.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3DKEBB7FJD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3DKEBB7FJD');
          `}
        </Script>
        {/* HubSpot Embed Code */}
        <Script
          id="hs-script-loader"
          src="//js.hs-scripts.com/2208163.js"
          strategy="afterInteractive"
          async
          defer
        />
        <LanguageProvider>
          <MenuProvider>{children}</MenuProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
