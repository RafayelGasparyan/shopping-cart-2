import React from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart} from "react-icons/ai"

const Header = () => {
    return (
        <header className='header'>
            <div>
                <h1>
                    <Link to="/" className="logo">
                        Jewelry
                    </Link>
                </h1>
            </div>

            <div className="header-links">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
                
                <ul>
                    <li>
                        <Link to='/registr'>Registr</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to='/cart'>
                            <AiOutlineShoppingCart/>
                        </Link>
                          
                    </li>
                </ul>
            </div>
        </header>
    )
}


export default Header;
