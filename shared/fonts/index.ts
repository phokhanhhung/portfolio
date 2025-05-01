import { Pacifico, Caveat, Dancing_Script } from "next/font/google";

export const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});

export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing-script",
});

import { Great_Vibes } from "next/font/google";

export const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});
