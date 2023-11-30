import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "COD Network",
  description: "Track all your camo's in MW3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-800`}>
        {/* Start Navbar */}
        <nav className="p-4 text-white">
          <div className="container mx-auto flex items-center justify-between">
            <a href="#" className="text-xl font-bold">
              COD Network
            </a>

            <div className="space-x-4">
              <a href="#">Multiplayer</a>
              <a href="#">Zombies</a>
            </div>

            <div className="text-transparent select-none">
              kanker aap paling
            </div>
          </div>
        </nav>

        {children}

        {/* Start Footer */}
        <footer className="text-white p-4 mt-auto">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 COD Network. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
