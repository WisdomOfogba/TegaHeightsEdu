import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schools | Universities",
  description: "Study Abroad made Easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
