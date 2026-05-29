// app/fonts.ts
import localFont from "next/font/local";

export const display = localFont({
  src: [
  { path: "../fonts/local/Reckless-Regular.ttf", weight: "400", style: "normal" }
],
  variable: "--font-numa-display", // ➜ los títulos serif del diseño
  display: "swap",
});

export const body = localFont({
  src: "../fonts/local/ABC-Diatype-Regular.ttf",
  variable: "--font-numa-body",    // ➜ el texto de los párrafos
  display: "swap",
});