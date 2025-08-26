import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tia Crown – Portfolio",
  description: "Physics • Data • Problem-Solving",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-900">
        {/* Navbar */}
        <header className="border-b border-gray-200 bg-gray-50">
          <nav className="max-w-4xl mx-auto flex justify-between items-center p-4">
            <Link href="/" className="font-bold text-lg">Tia Crown</Link>
            <div className="flex gap-6 text-sm">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
            </div>
          </nav>
        </header>

        {/* Main content */}
        <main className="max-w-4xl mx-auto p-6">{children}</main>

        {/* Footer */}
        <footer className="border-t text-center text-sm text-gray-500 p-4">
          © {new Date().getFullYear()} Tia Crown. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
