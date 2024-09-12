import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: " %s | TegaHeights Edu Limited",
    default: "Study Abroad | TegaHeights Edu Limited",
  },
  keywords: "study abroad platform, study abroad agency, study abroad services, study abroad consultancy, study abroad consultants, study abroad programs, study abroad scholarships, international education, overseas education, study abroad advisors, study abroad assistance, study abroad opportunities, study abroad application, study abroad visa, study abroad guides, study abroad planning, study abroad destinations, study abroad support, study abroad tips, study abroad experience, study abroad planning services, study abroad advice, study abroad guidance, study abroad reviews, study abroad consultation, study abroad cost, study abroad requirements, study abroad with scholarship, study abroad agents, study abroad consultants near me, study abroad programs for students, study abroad opportunities 2024, study abroad application help, study abroad financial aid, study abroad without IELTS, study abroad agents online, best study abroad programs, study abroad for high school students, study abroad for undergraduates, study abroad for graduates, study abroad for postgraduates, study abroad education, study abroad travel, study abroad and work, study abroad in USA, study abroad in UK, study abroad in Canada, study abroad in Australia, study abroad in Europe, study abroad in Asia, study abroad in New Zealand, study abroad in Germany, study abroad in France, study abroad in Japan, study abroad in South Korea, study abroad programs with internships, study abroad visa services, study abroad application process, study abroad agents consultation, study abroad destinations 2024, study abroad planning guide, study abroad funding options, study abroad success stories, study abroad service providers, study abroad agent reviews, study abroad event planning, study abroad preparation, study abroad student services, study abroad language requirements, study abroad cultural exchange, study abroad program reviews, study abroad agent assistance, study abroad consultancy services, study abroad program selection, study abroad career benefits, study abroad for professionals, study abroad visa assistance, study abroad documentation, study abroad student visa, study abroad program costs, study abroad orientation, study abroad information sessions, study abroad agency reviews, study abroad student experiences, study abroad application deadlines, study abroad scholarship opportunities, study abroad consultation services, study abroad program comparison, study abroad resources, study abroad agent testimonials, study abroad university partnerships, study abroad language courses, study abroad program eligibility, study abroad student support, study abroad planning checklist, study abroad financial planning, study abroad admission requirements, study abroad program costs, study abroad agent directory, study abroad services near me ",
  description: "Study abroad agents in Nigeria. Study in Canada, the US, the UK, Germany, Spain, and more, with the help of professional education counsellors.",
  creator: "Wisdom Ofogba",
  openGraph: {
    title: 'Study Abroad | TegaHeights Edu Limited',
    type: 'website',
    locale: 'en_US',
    description: 'Study abroad agents in Nigeria. Study in Canada, the US, the UK, Germany, Spain, and more, with the help of professional education counsellors.',
    url: '/',
    siteName: 'TegaHeights Edu',
    images: [
      {
        url: '/logo-black.svg',
        width: 800,
        height: 600,
        alt: 'TegaHeights Edu Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study Abroad | TegaHeights Edu Limited',
    description: 'Study abroad agents in Nigeria. Study in Canada, the US, the UK, Germany, Spain, and more, with the help of professional education counsellors.',
    images: ['logo-black.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
