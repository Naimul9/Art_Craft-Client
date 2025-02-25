import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light';
    });
    const [showUsername, setShowUsername] = useState(false);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    const handleToggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    const handleLogOut = () => {
        LogOut()
            .then(() => console.log('User logged out successfully'))
            .catch(error => console.error(error));
    };

    return (
        <div className="navbar bg-white w-full lg:max-w-screen-2xl mx-auto font-poppins">
            <div className="navbar-start rounded-2xl">
                {/* Dropdown for mobile view */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to={'/'}><li>Home</li></NavLink>
                        <NavLink to={'/all_item'}><li>Art & Craft Item</li></NavLink>
                        {user && (
                            <div className="lg:flex gap-3 lg:-ml-4">
                                <NavLink to={"/addCraft"}><li>Add Craft Item</li></NavLink>
                                <NavLink to={"/art_craft"}><li>My Art & Craft List</li></NavLink>
                            </div>
                        )}
                    </ul>
                </div>
                {/* Logo */}
                <a className="btn btn-ghost font-bold lg:text-2xl text-wrap">The Art & Craft Gallery</a>
            </div>

            {/* Navigation links for desktop */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex gap-10 px-1 font-semibold text-[18px]">
                    <NavLink to={'/'}><li>Home</li></NavLink>
                    <NavLink to={'/all_item'}><li>Art & Craft Item</li></NavLink>
                    {user && (
                        <div className="lg:flex gap-3 lg:-ml-4">
                            <NavLink to={"/addCraft"}><li>Add Craft Item</li></NavLink>
                            <NavLink to={"/art_craft"}><li>My Art & Craft List</li></NavLink>
                        </div>
                    )}
                </ul>
            </div>

            {/* User section */}
            <div className="navbar-end">
                {user ? (
                    <div
                        className="relative group"
                        onMouseEnter={() => setShowUsername(true)}
                        onMouseLeave={() => setShowUsername(false)}
                    >
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img alt="User Avatar" src={user.photoURl} />
                            </div>
                        </div>
                        {/* Display username on hover */}
                        {showUsername && (
                            <div className="absolute bg-white text-black text-sm py-1 px-2 rounded-md shadow top-10 right-0">
                                {user.displayName}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <Link to={'/login'}>
                            <button className="btn btn-sm">Login</button>
                        </Link>
                        <Link to={'/register'}>
                            <button className="btn btn-sm">Register</button>
                        </Link>
                    </div>
                )}
                {user && (
                    <button onClick={handleLogOut} className="btn btn-sm">Sign Out</button>
                )}

                {/* Theme toggle */}
                <button onClick={handleToggleTheme} className="theme-toggle">
                    {theme === 'light' ? (
                        <p><svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg></p>
                    ) : (
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                    )}
                </button>
                {/* End of Theme toggle */}
            </div>
        </div>
    );
};

export default Navbar;
