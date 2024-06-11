import FInput from "../components/FInput";
import Fbtn from "../components/Fbtn";

export default function Contact(){
    return(
       <div className="flex flex-col text-2xl p-12">
         <h1 className="text-4xl py-8">
            Contact
        </h1>
        <p className="py-6">
        Lets get in touch and talk about your next project. 
        </p>
        <FInput data="Name"/>
        <FInput data="Email"/>
        <FInput data="Subject"/>
        <FInput data="Comment"/>
        <Fbtn data="SEND MESSAGE"/>
       </div>
    );
}