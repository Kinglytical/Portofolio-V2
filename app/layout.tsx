import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import Link from "next/link";
import Script from "next/script"; // ✅ ADD

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saddam Rafiansyach Azhari P D",
  description: "Business Analyst & Automation Specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HWQ2DMCQLH"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HWQ2DMCQLH');
          `}
        </Script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="sticky top-0 z-50 w-full border-b bg-white">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            {/* LEFT */}
            <Link href="/" className="font-semibold text-lg">
              Saddam Rafiansyach
            </Link>

            {/* CENTER (DESKTOP NAV) */}
             <div className="hidden md:flex flex-1 justify-center">
              <Navbar />
            </div>
            

            {/* RIGHT */}
            <div className="hidden md:flex">
              <Button className="rounded-full px-6">Contact</Button>
            </div>

            {/* MOBILE */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>

                <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                  <SheetHeader>
                    <SheetTitle>Saddam Rafiansyach</SheetTitle>
                    <SheetDescription>Navigation Menu</SheetDescription>
                  </SheetHeader>

                  <nav className="flex flex-col gap-2 mt-6">
                    <MobileLink href="/">Home</MobileLink>
                    <MobileLink href="/Introduction">Introduction</MobileLink>
                    <MobileLink href="/projects">Projects</MobileLink>
                    <MobileLink href="/Timeline">Experience</MobileLink>
                    <MobileLink href="/about">About</MobileLink>
                  </nav>

                  <div className="mt-auto pt-6">
                    <Button className="w-full rounded-full">Contact Me</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}

function MobileLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        px-3 py-2 rounded-lg text-sm font-medium
        transition-colors
        hover:bg-muted
        active:scale-[0.98]
      "
    >
      {children}
    </Link>
  );
}
