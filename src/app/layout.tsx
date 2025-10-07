import type { Metadata } from "next";
import "./globals.css";
import Providers from "../components/Providers";

export const metadata: Metadata = {
  title: "TruPick - Compare Smarter, Shop Confident",
  description: "Compare products instantly. Get AI-powered smart recommendations. Shop smarter, faster, and confidently.",
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "TruPick - Compare Smarter, Shop Confident",
    description: "Compare products instantly. Get AI-powered smart recommendations. Shop smarter, faster, and confidently.",
    type: "website",
    images: [
      {
        url: "https://lovable.dev/opengraph-image-p98pqg.png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@trupick",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
