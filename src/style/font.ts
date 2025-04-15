import localFont from "next/font/local";
export const kiaFont = localFont({
  src: [
    { path: "../asset/fonts/KiaSignatureFixRegular.woff2", weight: "400", style: "normal" },
    { path: "../asset/fonts/KiaSignatureFixBold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-kia",
  display: "swap",
});
