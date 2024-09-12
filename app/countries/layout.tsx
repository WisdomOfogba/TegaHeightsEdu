import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Countries",
  description: "Countries in TegaHeights Edu Limited",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
