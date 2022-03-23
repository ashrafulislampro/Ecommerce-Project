import React from 'react';

const Header = () => {
    return (
        <header className="py-4 shadow-sm bg-white">
            <div className="container flex items justify-between">
                <a href="/#"><img src="http://rafcart.rslahmed.com/assets/images/svg/logo.svg" className="w-32 pt-2" alt="" /></a>                
               
                {/* search bar */}
                <div className="w-full max-w-xl flex relative">
                    <span className="absolute left-4 top-2 text-lg text-gray-400">
                        <i className="fas fa-search"></i>    
                    </span>
                    <input type="text" className="w-full border border-primary border-r-0 pl-12 py-2 pr-3 rounded-l-md focus:outline-none focus:ring focus:ring-red-500" placeholder='search' />
                    <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary focus:outline-none focus:ring focus:ring-red-500 transition">Search</button>
                </div>
                
                {/* icons */}
                <div className="flex items-center space-x-4">
                    <a href="/#" className="text-center text-gray-700 hover:text-primary transition relative">
                        <div className="text-2xl">
                            <i className="fas fa-heart"></i>    
                        </div> 
                        <div className="text-xs leading-3">Wish List</div>
                        <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">8</span>
                    </a> 
                    <a href="/#" className="text-center text-gray-700 hover:text-primary transition relative">
                        <div className="text-2xl">
                            <i className="fas fa-shopping-bag"></i>
                        </div>
                        <div className="text-xs leading-3">Cart</div>
                        <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">6</span>
                    </a>
                    <a href="/#" className="text-center text-gray-700 hover:text-primary transition relative">
                        <div className="text-2xl">
                            <i className="far fa-user"></i>    
                        </div>
                        <div className="text-xs leading-3">Account</div>
                    </a>
                </div>
            </div>            
        </header>
    );
};

export default Header;