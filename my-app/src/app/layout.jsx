import localFont from "next/font/local";
import "./globals.css";

const RootLayout = ({children}) => {
  return (
    <html>
      <head>
        <title>Don Bosco Organization Website</title>
      </head>
      <body>
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
