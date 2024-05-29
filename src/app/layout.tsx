import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Providers } from "./providers";
import FooterPage from "./layout/Footer";
import NavBarPage from "./layout/Navbar";

export const metadata = {
  title: "EventWorld",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  console.log("i do run")

  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Providers>
          <div className="grid h-dvh w-dvw grid-rows-[max-content,minmax(0,1fr),max-content] overflow-hidden">
            <NavBarPage />
            <div className="relative w-dvw h-[calc(100dvh-var(--nav-height)-var(--footer-height))] overflow-auto p-[10px]">
              {children}
            </div>
            <FooterPage />
          </div>
        </Providers>
      </body>
    </html>
  );
}
