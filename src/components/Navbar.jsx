import {navData} from '../data';

import { Link } from 'react-router-dom';

export default function Navbar(){

    return(
        <nav className="flex justify-between  text-2xl tracking-[0.4rem] font-thick p-3 px-5 ">
        <h1 className='cursor-pointer px-7 py-3 hover:bg-slate-400'>
            <span className="font-bold uppercase pr-5 ">br</span>
            Architects
        </h1>
        <ul className="flex  md:flex sm:hidden">
            {
                navData.map(x=>{
                    return(
                        <li className='px-7 py-3 hover:bg-slate-400'>
                            <Link to={x.Link}>
                            {x.head}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>

        </nav>
      
    )
}