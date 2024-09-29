import Link from "next/link";
function Home(){
  return  <div className="bg-black h-28">
    <div className="text-yellow-400 flex justify-between items-center">
    <h1 className="text-xl m-4">Navbar</h1>
    <ul className="flex gap-4 mr-8 p-14">
     <li><Link href='/'>Home</Link></li>
     <li><Link href='/About'>About</Link></li>
     <li><Link href='/Gallery'>Gallery</Link></li>
     <li><Link href='/Contact'>Contact</Link></li>
    </ul>
    </div>
  </div>
}
export default Home;
