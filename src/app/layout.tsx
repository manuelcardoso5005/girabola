import "./globals.css";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="overflow-x-hidden">
        <Header />
        <main className="pt-16 lg:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
