import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mohit Mahajan - Data Scientist & ML Engineer',
  description: 'Portfolio showcasing data science, machine learning, and analytics projects',
  keywords: ['Data Science', 'Machine Learning', 'Python', 'SQL', 'Portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}