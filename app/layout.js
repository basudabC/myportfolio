import './globals.css'

export const metadata = {
  title: 'Basudab Chowdhury - AI & Data Engineer',
  description: 'AI & BI Solutions Specialist with expertise in LLMs, Computer Vision, and MLOps',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}