import { Poppins } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";

// Select a weight from the available options
const poppins = Poppins({
  weight: ["400", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--poppins-font",
});

export const metadata = {
  title: "RifqiAnimeList",
  description: "Website List Anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-color-dark`}
        suppressContentEditableWarning={true}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
