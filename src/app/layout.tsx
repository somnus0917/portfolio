// Server Component
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { CustomCursor } from "@/components/ui/custom-cursor";
import { ThemeProvider } from "@/components/ui/theme-provider";

import "./globals.css";

export const metadata: Metadata = {
  title: "陈磊 | 科研与机器人作品集",
  description: "陈磊的科研项目、机器人竞赛、交通态势感知与机器人视觉定位作品集。",
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
