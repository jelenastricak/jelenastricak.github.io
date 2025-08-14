import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/components/providers/ReduxProvider";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jelena Stricak - AI Consultant & Developer",
  description: "AI consultant and developer who founded Herodot to apply modern AI and secure delivery to research-driven European heritage experiences",
  keywords: ["AI", "Consultant", "Developer", "Herodot", "Heritage", "Education"],
  authors: [{ name: "Jelena Stricak" }],
  openGraph: {
    title: "Jelena Stricak",
    description: "AI Consultant & Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <ReduxProvider>
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
            <Navigation />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
