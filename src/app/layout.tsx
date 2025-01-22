
import Footer from "./Components/Footer/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Foodtuck</title>
        <meta name="description" content="Welcome to My Website, the best place for all your needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </head>
      <body className="bg-black text-white">
        {children}
        <Footer />
      </body>
    </html>
  );
}

