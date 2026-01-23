import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Bryant Ejorh | Project Showcase",
    template: "%s | Bryant Ejorh",
  },
  description:
    "Bryant Ejorh's project showcase - High School student specializing in modern web applications, simulations, and games.",
  keywords: [
    "Bryant Ejorh",
    "web developer",
    "full-stack developer",
    "React",
    "TypeScript",
    "project showcase",
    "CodeByBryant",
    "web development",
    "software engineer",
  ],
  authors: [{ name: "Bryant Ejorh" }],
  creator: "Bryant Ejorh",
  metadataBase: new URL("https://codebybryant.github.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codebybryant.github.io/Portfolio/",
    title: "Bryant Ejorh | Project Showcase",
    description:
      "Bryant Ejorh's project showcase - High School student specializing in modern web applications, simulations, and games.",
    siteName: "Bryant Ejorh's Project Showcase",
    images: [
      {
        url: "/Portfolio/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Bryant Ejorh Project Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryant Ejorh | Project Showcase",
    description:
      "Bryant Ejorh's project showcase - High School student specializing in modern web applications, simulations, and games.",
    creator: "@CodeByBryant",
    images: ["/Portfolio/web-app-manifest-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/Portfolio/favicon.ico" },
      { url: "/Portfolio/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/Portfolio/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/Portfolio/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bryant Ejorh",
              url: "https://codebybryant.github.io/Portfolio/",
              jobTitle: "High School Student & Developer",
              description:
                "High School student specializing in modern web applications, simulations, and games",
              sameAs: ["https://github.com/CodeByBryant"],
              knowsAbout: [
                "Web Development",
                "React",
                "TypeScript",
                "Full-stack Development",
                "Software Engineering",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  );
}
