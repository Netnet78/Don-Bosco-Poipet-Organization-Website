import "./globals.css";
import PageFooter from "../components/footer/footer";
import Navigation from "../components/header/header";
import { Header } from "../components/header/header";

const RootLayout = async ({children}: any) => {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans antialiased p-0 m-0 bg-blue-950">
        <Header />
        <Navigation />
        <main className="m-4">{children}</main>
        <PageFooter />
      </body>
    </html>
  );
};

export default RootLayout;
