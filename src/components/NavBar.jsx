import React from 'react';


function NavBar (){
    return (
        <nav>
            <div>
                <img scr={iconCart} alt="" className='w-6'/>
                <span>Cart 0</span>
            </div>
        </nav>
    )
}

export default NavBar;