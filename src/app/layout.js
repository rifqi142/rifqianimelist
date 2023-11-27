import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RifqiAnimeList",
  description: "Website List Anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressContentEditableWarning={true}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
