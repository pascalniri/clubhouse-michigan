import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Clubhouse Michigan",
  description:
    "Clubhouse Michigan is a community-based service dedicated to supporting and empowering people living with mental illness, known as Clubhouse members.",
  keywords: [
    "Clubhouse Michigan",
    "Clubhouse",
    "Michigan",
    "Mental Health",
    "Clubhouse Members",
    "Clubhouse Michigan",
    "Clubhouse Michigan",
    "Clubhouse Michigan",
    "Clubhouse Michigan",
    "Clubhouse Michigan",
  ],
  openGraph: {
    title: "Clubhouse Michigan",
    description:
      "Clubhouse Michigan is a community-based service dedicated to supporting and empowering people living with mental illness, known as Clubhouse members.",
    type: "website",
    url: "https://www.clubhousemichigan.org/",
    siteName: "Clubhouse Michigan",
    images: [
      {
        url: "https://www.clubhousemichigan.org/clubhouse_hero_image.webp",
        width: 1200,
        height: 630,
        alt: "Clubhouse Michigan",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased text-sm`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
