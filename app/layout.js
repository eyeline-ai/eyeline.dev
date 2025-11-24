import './globals.css'

export const metadata = {
  title: 'Eyeline - Computer Vision Infrastructure',
  description: 'Building open-source tools and cloud infrastructure for the next generation of vision AI applications.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}