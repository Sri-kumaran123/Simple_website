import { projData } from "../data";

export default function Projects(){
    return(
        <section className="p-5">
            <h1 className="py-24 text-4xl pl-6">
                Projects
            </h1>
            <div className="flex flex-wrap justify-center gap-12 ">
                {
                    projData.map((x)=>{
                        return(
                            <div className="relative  w-full xl:w-1/5 lg:w-[45%] md:w-1/3">
                                <span className="absolute text-white bg-black px-4 py-3 text-2xl">
                                    {x.name}
                                </span>
                                <img
                                src={x.img}
                                className="w-full"
                                />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}