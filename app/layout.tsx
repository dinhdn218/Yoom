import type { Metadata } from "next";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Yoom App",
  description: "Zoom clone app, a video conference app with Next.js",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          logoImageUrl: "/icons/logo.svg",
          socialButtonsVariant: "iconButton",
        },
        variables: {
          // colorText: "#FFF",
          // colorPrimary: "#0E78F9",
          // colorBackground: "#1C1F2E",
          // colorInputBackground: "#252A41",
          // colorInputText: "#FFF",
        },
      }}
    >
      <html lang="en">
        <body className={`${jetbrainsMono.variable} bg-dark-2 antialiased`}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
