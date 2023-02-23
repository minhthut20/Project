import React, { useEffect, useState } from 'react'
import { FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';


import { NavLink, Link, useLocation } from 'react-router-dom'

export default function Header() {
    let location = useLocation()
    const userAccount = useSelector(state => state)
    const [permission, setPermission] = useState(false)
    const logOutUser = () => {
        setPermission(false)
        localStorage.removeItem("loginStatus")
    }

    useEffect(() => {
        let loginStatus = JSON.parse(localStorage.getItem("loginStatus"))
        if (loginStatus != null) setPermission(true)
    }, [userAccount, location])


    let loginElement = <></>
    loginElement = (permission) ?
        <>
            <Link to={"/"} onClick={logOutUser}>
                < FaSignOutAlt color="white" size={15} />
            </Link>
        </>
        :
        <>
            <Link to="/login">
                <FaUserAlt color="white" size={15} />
            </Link>
        </>
    return (
        <>
            <header className="header-area">
                <div className="left">
                    <a href="#)">

                    </a>
                </div>
                <div className="right">
                    {loginElement}
                </div>
                <div className="container">
                    <div className="row d_flex">
                        <div className="col-sm-3 logo_sm">
                            <div className="logo">
                                <a href="index.html" />
                            </div>
                        </div>
                        <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-9">
                            <div className="navbar-area">
                                <nav className="site-navbar">
                                    <ul>
                                        <li>
                                            <NavLink to={"/"}>
                                                Trang chủ
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/news"}>Thời sự</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/world"}>
                                                Thế giới
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/sport"}>Thể Thao</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/culture"}>Văn hoá</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/education"}>Giáo dục</NavLink>
                                        </li>
                                    </ul>
                                    <button className="nav-toggler">
                                        <span />
                                    </button>
                                    {/* <div className='mobile_nav'>
                                        <li>
                                            <NavLink to={"/"}>
                                                Trang chủ
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/news"}>Thời sự</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/world"}>
                                                Thế giới
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/sport"}>Thể Thao</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/culture"}>Văn hoá</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/education"}>Giáo dục</NavLink>
                                        </li> 1     
                                    </div> */}
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
