import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {sidebarData} from './sidebarData';
import '../../css/sidebar/navbar.css';


const AsideContainer =() => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)
    return(
        <div>



            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to='#' class='menu-bars' onClick={showSidebar}>
                            
                        </Link>
                        
                       
                    </li>

                    {
                        sidebarData.map((item, index)=> {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        <span>{item.icon} </span>

                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }


                </ul>

            </nav>

                
            </div>

    )
}

export default AsideContainer;