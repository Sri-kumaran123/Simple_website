import Btncard from "../components/Btncard";
import { aboutData } from "../data";
export default function About(){

    return(
        <div className="text-2xl mx-3 mt-12">
            <h1 className="text-4xl mx-9 py-6">
                About
            </h1>
            <p className="my-6 mx-9 py-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex flex-wrap gap-3 justify-center ">
                {
                    aboutData.map((x)=>{
                        return <div className="xl:w-[23%] md:w-[45%] sm:w-full ">
                            <img
                            className="w-full"
                            src={x.img}
                            />
                            <p className="py-3 text-3xl font-semibold">{x.name}</p>
                            <p className="py-3 text-slate-700">{x.role}</p>
                            <p className="py-3">{x.desc}</p>
                            <Btncard data={"Contact"}/>
                        </div>
                    })
                }
            </div>
        </div>
    )
}