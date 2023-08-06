import React from 'react'
//Navbar section
const NavBar = () => {
    const NavbarOptions = [{
        title: "Jobs",
        route: "/jobs"
    }, {title: "Companies", route: "/companies"}, {
        title: "About",
        route: "/about"
    }, {title: "Contact", route: "/contact"}, {title: "Blog", route: "/blogs"}, {
        title: "Login",
        route: "/auth/login"
    }, {title: "Register", route: "/auth/register"}]

    /**
     * @description Function to generate the navbar options
     */
    const generateNavOptions = () => {
        return (
            <div className='menu flex gap-8'>
                {NavbarOptions.map((option, index) => <li
                    className='menuList text-[#6f6f6f] hover:text-blueColor' key={index}>{option.title}</li>)}
            </div>
        )
    }


    return (
        <div className='navBar flex justify-between items-center p-[3rem]'>
            <div className='logoDiv'>
                <h1 className='logo text-[25px] text-blueColor'>
                    Hired<strong>IN</strong></h1>
            </div>
            {generateNavOptions()}
        </div>
    )
}

export default NavBar
