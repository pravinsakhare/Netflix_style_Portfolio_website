import { Inter, Oswald } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const display = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-display",
  display: "swap",
});

export default { inter, display };
