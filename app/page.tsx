import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Cards from "@/components/Cards";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Info from "@/components/Info";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  
     <main className="relative bg-black flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
         <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Info/> */}
        <Experience/>
        <Approach/>
        <Footer/>
        {/* <Cards/> */}
        </div>
      </main>
   
  
  );
}
