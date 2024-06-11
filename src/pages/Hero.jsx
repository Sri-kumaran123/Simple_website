
export default function Hero(){
    return(
        <div className="relative">
            <div className="absolute h-full w-full text-center flex items-center justify-center">
            <h1 className="text-6xl tracking-[0.6rem] text-white flex items-center">
                <span className="bg-black font-bold p-8 m-4">
                    BR
                </span>
                <span className="md:block sm:hidden">Architects</span> 
                
            </h1>
            </div>
           
            <img
            className="w-full"
        src={"https://www.w3schools.com/w3images/architect.jpg"}
        />
        </div>
        

    )
}