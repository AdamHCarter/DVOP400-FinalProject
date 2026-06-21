import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import { Navbar } from "@/components/navbar";
import { site } from "@/content/site";

import "./globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.title}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Personal website for Adam Carter, DevOps Engineer and Full-Stack Developer.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <Navbar />
        <main className="page-shell">{children}</main>
        <footer className="site-footer">
          <div className="container footer-grid">
            <p>
              Built as a static Next.js site for {site.name}. Front-end focused and ready for
              export.
            </p>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <span aria-hidden="true"> · </span>
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
