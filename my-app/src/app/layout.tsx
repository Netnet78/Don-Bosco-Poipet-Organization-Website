import "./globals.css";
import PageFooter from "../components/footer";

const RootLayout = ({children}: any) => {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans antialiased">
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
        </header>
        <main>{children}</main>
        <PageFooter></PageFooter>
      </body>
    </html>
  );
};

export default RootLayout;
