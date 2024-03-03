import Link from "next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div id="menu">menu
            <ul>
              <li><Link href={"/"}>Trang chủ</Link></li>
              <li><Link href={"/admin/list_product"}>Xem sản phẩm</Link></li>
              <li><Link href={"/admin/add_product"}>Thêm sản phẩm</Link></li>
            </ul>
          </div>
        </header>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
