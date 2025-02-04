"use client";
import { usePathname } from "next/navigation";
import Footer from "./Components/Footer/Footer";
import "./globals.css";
import SideNavbar from "./Components/Dashboard/SideNavbar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathName = usePathname();
  const isDashboard = pathName === "/Dashboard" || pathName === "/users" || pathName === "/settings"  || pathName === "/orders";

  return (
    <html lang="en">
      <head>
        <title>Foodtuck</title>
        <meta
          name="description"
          content="Welcome to My Website, the best place for all your needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </head>
      <body className="bg-black text-white">
        <div className={`grid ${isDashboard ? "grid-cols-6" : "grid-cols-1"}`}>
          {/* Sidebar is shown only when on Dashboard */}
          {isDashboard && (
            <div className="col-span-1 bg-white text-black">
              <SideNavbar />
            </div>
          )}

          {/* Main Content takes full width when not on Dashboard */}
          <div className={`${isDashboard ? "col-span-5" : "col-span-1 w-full"}`}>
            {children}
            {pathName !== "/signup" && pathName !== "/login" && pathName !== "/Dashboard" && pathName !== "/users" && pathName !== "/settings"  && pathName !== "/orders"  && (
              <Footer />
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
