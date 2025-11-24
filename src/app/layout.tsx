import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vladimir Vovk - Personal Page',
  description:
    'Hi! My name is Vladimir Vovk. I am passionate about web and mobile technologies, React Native, React, building beautiful user experiences, and making the world a better place.',
  metadataBase: new URL('https://vladimir.vovk.in'),
  keywords: ['Vladimir Vovk', 'personal page'],
  creator: 'Vladimir Vovk',
  openGraph: {
    type: 'website',
    url: 'https://vladimir.vovk.in',
    title: 'Vladimir Vovk - Personal Page',
    description:
      'Hi! My name is Vladimir Vovk. I am passionate about web and mobile technologies, React Native, React, building beautiful user experiences, and making the world a better place.',
    siteName: 'Vladimir Vovk - Personal Page',
    images: [
      {
        url: 'https://vladimir.vovk.in/icon.png'
      }
    ]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
