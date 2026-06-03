import localFont from "next/font/local";

export const display = localFont({
  src: "./fonts/reckless.ttf",
  variable: "--font-numa-display",
  display: "swap",
});

export const body = localFont({
  src: "./fonts/ABCDiatype.ttf",
  variable: "--font-numa-body",
  display: "swap",
});

export const displayBold = localFont({

    src: "./fonts/Reckless-Regular.ttf",
    variable: "--font-numa-displayBold",
    display: "swap",


});