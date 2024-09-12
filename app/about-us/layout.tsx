import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn More About TegaHeights Edu Limited",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
