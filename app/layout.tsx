import type { Metadata } from "next";
import { Shadows_Into_Light } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const shadowsIntoLight = Shadows_Into_Light({
  variable: "--font-shadows-into-light",
  weight: "400",
  subsets: ["latin"],
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
      <body
        className={`${shadowsIntoLight.variable} antialiased text-sm font-sans`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
