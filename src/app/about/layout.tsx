import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { PortfolioCard } from "@/components/customs/portfolio-card";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | VicWen",
    default: "VicWen",
  },
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div className="w-full min-h-screen flex justify-center mb-20">
            <PortfolioCard>{children}</PortfolioCard>
          </div>
        </div>
      </body>
    </html>
  );
}
