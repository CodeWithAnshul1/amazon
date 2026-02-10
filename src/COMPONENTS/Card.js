import product from "../Data/product";
import hero from "../assets/hero1.jpg";


export default function Card() {
  return (
    
    
    <div className=" space-6 px-1 ">
      
        
         {product.map((row , rowinx) => (
           <>       
            
           { rowinx === 0 && (
            <div className="hidden xl:block mt-16">
              <img className=" w-full h-[600px] object-contain" src={hero} alt="error"/>
              </div>
            )}

            <div  key={rowinx} className={` xl:-mt-[260px] relative z-10 ${rowinx === 0 ? "flex gap-4 overflow-x-auto scrollbar-hide rounded-" : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"}
            ${rowinx === 0 ? "xl:hidden" : ""}`}>

                   {row.map((item) =>(

                    <div key={item.id} className={`shadow bg-white  mt-2 ${
                      rowinx === 0 ?"min-w-[280px]": ""}`}>
                    

                        {(item.position === "before" || item.position === "both") && <h1 className="text-2xl font-semibold pb-2"> {item.title} </h1>}

                        <div>
                             <img
                               src={item.img}
                               className={`w-full  object-cover mx-auto ${
                                item.height === "larger" ? "h-[400px] rounded-lg" : "h-[220px]"
                               }`}
                               alt="error"
                            />
                        </div>

                        { (item.position === "after" || item.position === "both") && <h3 className="pt-5 pb-3 text-blue-500 cursor-pointer"> {item.disc}</h3>}

                     </div>

                   ))}

        </div>
                   </>
               ))}

    </div>

  
  );
}