import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

/* The Quicksand font import has been moved to globals.css */

export const metadata: Metadata = {
  title: "Tia Crown – Portfolio",
  description: "Physics • Data • Problem-Solving",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Set background to light pink and update font */}
      <body className="font-sans bg-pink-50 text-gray-900 min-h-screen flex flex-col">
        {/* Navbar with rosy pink accent and centered name */}
        <header className="border-b border-pink-200 bg-pink-100 shadow-sm">
          <nav className="max-w-4xl mx-auto flex flex-col items-center p-4">
            {/* Centered name with playful font and rosy pink color */}
            <Link
              href="/"
              className="font-bold text-2xl"
              style={{
                color: "#e75480", // Rosy pink hex
                fontFamily: "'', sans-serif",
                letterSpacing: "2px",
              }}
            >
              Tia Crown
            </Link>
            <div className="flex gap-6 text-sm mt-2">
              <Link href="/" className="hover:text-pink-500">Home</Link>
              <Link href="/about" className="hover:text-pink-500">About</Link>
              <Link href="/projects" className="hover:text-pink-500">Projects</Link>
            </div>
          </nav>
        </header>

        {/* Main content area */}
        <main className="max-w-4xl mx-auto p-6 flex-1">{children}</main>

        {/* Footer with pink border */}
        <footer className="border-t border-pink-200 text-center text-sm text-pink-700 bg-pink-50 p-4">
          © {new Date().getFullYear()} Tia Crown. Coded with VS code.
        </footer>
      </body>
    </html>
  );
}

// Notes:
// - Uses Quicksand font for a playful look.
// - Centers your name and uses a rosy pink (#e75480).
// - You can swap Quicksand for another Google Font if you prefer!

