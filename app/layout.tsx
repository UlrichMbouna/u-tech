import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ulrich-TECH | Engineering Solutions Digitales",
  description:
    "Ulrich-TECH transforme vos idées en solutions numériques innovantes, performantes et centrées sur l'utilisateur. Expertise technique sans compromis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface font-body-md overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  );
}