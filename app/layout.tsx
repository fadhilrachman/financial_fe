// import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.scss";
import "../styles/overide.css";

import React from "react";
import Provider from "@/lib/provider";
import { nunito, montserrat } from "@/lib/font";

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body className={`${nunito.variable} font-nunito ${montserrat.variable}`}>
      <Provider>
        <div className="bg-textColor min-h-[100vh]">
          <div className="text-textColor bg-background min-h-[100vh] max-w-[420px] px-4 py-4 mx-auto">
            {children}
          </div>
        </div>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
