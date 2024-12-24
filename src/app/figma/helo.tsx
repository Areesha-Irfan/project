import  Image from "next/image" ;
import Imageone from "../../../image/Imageone.jpeg"
import Imagetwo from "../../../image/Imagetwo.jpeg"
import Imagethree from "../../../image/Imagethree.jpeg"
import Imagefour from "../../../image/Imagefour.jpeg"
import Imagefive from "../../../image/Imagefive.jpeg"
import Imagesix from "../../../image/Imagesix.jpeg"
import Imageseven from "../../../image/Imageseven.jpeg"
import Imageeight from "../../../image/Imageight.jpeg"

export default function Helo(){
    return(
        <div> 
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image src = {Imageone} alt ="chair" className="h-full"/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Single Chair
          </h2>
          <p className="mt-1">Rs 15000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image src = {Imagetwo} alt = "bed" className="h-full"/>
        </a>
        <div className="mt-4">
        
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Full Size Bed
          </h2>
          <p className="mt-1">Rs 35000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image src = {Imagethree} alt = "" className="h-full"/>
        </a>
        <div className="mt-4">
        
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Double Bed
          </h2>
          <p className="mt-1">Rs 30000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image src = {Imagefour} alt = "" className="h-full"/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium">
            2 Seater Sofa
          </h2>
          <p className="mt-1">Rs 45000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
           <Image src = {Imagefive} alt = "" className="h-full"/>
        </a>
        <div className="mt-4">
        
          <h2 className="text-gray-900 title-font text-lg font-medium">
            2 Seater Sofa
          </h2>
          <p className="mt-1">Rs 50000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image src = {Imagesix} alt = "" className="h-full"/>
        </a>
        <div className="mt-4">
        
          <h2 className="text-gray-900 title-font text-lg font-medium">
            L - Shape Sofa
          </h2>
          <p className="mt-1">Rs 150000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
            <Image src = {Imageseven} alt = "" className="h-full"/>

        </a>
        <div className="mt-4">
        
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Single Chair
          </h2>
          <p className="mt-1">Rs 25000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image src = {Imageeight} alt = "" className="h-full"/>
        </a>
        <div className="mt-4">
    
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Sofa Cum Bed
          </h2>
          <p className="mt-1">Rs 250000</p>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
    )
}