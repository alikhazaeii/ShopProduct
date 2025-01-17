import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Search from "@/components/search";
import "./globals.css";
import CartIcon from "@/components/cartIcon";
import Image from "next/image";
import Footer from "@/components/footer";
import Link from "next/link";
import { raleway } from "@/font/font";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Product-shop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center bg-white ${raleway.className}`}
      >
        <main className=" w-full bg-white text-black flex flex-wrap justify-center">
        <nav className=" w-full h-[100px]  flex justify-center capitalize items-center text-black fixed bg-[#fafafc] z-20 *:py-5">
            <Link href="/">
            <figure className="w-[200px] flex justify-center items-center group ">
              <Image className="object-cover group-hover:scale-125 transition-all duration-300" src='/iphonelogo.png' width={40} height={40} alt='logo' />
            </figure>
            </Link>
            <ul className=" *:m-5 flex justify-end items-center">
            
              <div className="*:px-5 hidden xl:flex ">
              <li>store</li>  
              <li>mac</li>
              <li>ipad</li>
              <li>iphone</li>
              <li>watch</li>
              </div>
              <li className="w-[200px] md:w-[500px]">
                <Search />
              </li>
              <li><CartIcon /></li>

            </ul>
          </nav>
          
        {children}
        <Footer/>
        </main>
      </body>
    </html>
  );
}
