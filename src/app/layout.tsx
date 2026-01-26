import "./globals.css";
import Header from "@/src/components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
