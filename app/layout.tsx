import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Re: Puro Coffee",
  description: "We bring the purest coffee to your life",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}