"use client"

import {Poppins} from "next/font/google";
import "./globals.css";
import { SideBar } from "./components/core/SideBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","400","500"]
})

const queryClient = new QueryClient()


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body
          className={`${poppins.className} antialiased bg-primary`}
        >
          <div className="max-w-fulll min-h-screen flex justify-center items-center bg-primary overflow-hidden">
          <SideBar/>
          <main className="w-[90%] h-[90vh] overflow-scroll px-[32px]">
            {children}
          </main>
          </div>
        </body>
      </html>
    </QueryClientProvider>
  );
}
