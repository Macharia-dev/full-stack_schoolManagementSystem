import Menu from "@/components/Menu";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className=" flex">
      {/*LEFT*/}
      <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  flex flex-col p-5 overflow-auto'>
      <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
      <Image src="/logo.png" alt="logo" width={32} height={32}/>
      <span className="hidden lg:block text-black-500">Kirinyaga University Portal</span>
      </Link>
      <Menu/>
      </div>
      {/*RIGHT*/}
      <div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fA] overflow-scroll'>
        <Navbar/>
        {children}
      </div>
    </div>

  );
}


