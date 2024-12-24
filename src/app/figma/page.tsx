
import Image from "next/image";
import sofa from "../../../image/sofa.jpeg";
import table from "../../../image/sidetable.jpg";
export default function Navbar(){
    return(
  <div>
    <header className="text-black-400  body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <a className="mr-5 hover:text-blue-900">Home</a>
      <a className="mr-5 hover:text-blue-900">Page</a>
      <a className="mr-5 hover:text-blue-900">Contact</a>
      <a className="hover:text-blue-900">About</a>
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-pink-900 lg:items-center lg:justify-center mb-4 md:mb-0">
    
      <span className="ml-3 text-xl xl:block lg:hidden">InterWood Sofa Sets</span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button className=" text-black inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-white rounded text-base mt-4 md:mt-0">
        
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
     </div>
     <section className="text-black-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-mediumtext-pink-700">
        We care for your
        <br className="hidden lg:inline-block" />
        comfort
      </h1>
      <p className="mb-8 leading-relaxed">
      "Style, Comfort, and Quality – All in One Place."

      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-black bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-white rounded text-lg">
          Shop Now
        </button>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
     <Image src = {sofa} alt ="sofa" className="w-400px "/> 
    </div>
  </div>
</section>


</div>
</header>
</div>




    )
}