import React, { useState } from 'react';
import logo1 from "../../assets/logo/image.png";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext/UserContext';

const Header = () => {
    const { user, logout, theme, setTheme } = useContext(AuthContext)

    console.log(user)
    let arr = [false, false, false, false, false]
    const [style, setStyle] = useState(arr);
    const [dropDown, setDropDown] = useState(true);
    const [text, setText] = useState("");
    const selected = (props) => {
        let newArr = [...arr];
        for (let i = 0; i < newArr.length; i++) {
            newArr[i] = false;
        }
        newArr[props] = true;
        setStyle(newArr);
    }

    const setSelectedText = (txt) => {
        setText(txt);
        setDropDown(true);
    }
    const handleTheme = () => {
        if (theme == "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }

    }

    const { name } = useContext(AuthContext)
    return (
        <div>
            <div className="2xl:container 2xl:mx-auto">
                <div className="bg-white rounded shadow-lg py-5 px-7">
                    <nav className="flex justify-between">
                        <div className="flex items-center space-x-3 lg:pr-16 pr-6">
                            <img src={logo1} alt="" className='w-10 h-9 rounded-lg' />
                            <h2 className=" text-2xl leading-6 text-blue-800 font-extrabold">Knowledgenet</h2>
                        </div>
                        {/* For medium and plus sized devices */}
                        <ul className="hidden md:flex flex-auto space-x-2">
                            {/* <li className="text-white bg-indigo-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">Collections</li> */}

                            <Link to="/">
                                <li onClick={() => selected(1)} className={`${style[1] ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded ml-10`}>
                                    Home </li>
                            </Link>


                            <Link to="/blog"><li onClick={() => selected(2)} className={`${style[2] ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>Blog
                            </li></Link>

                            <Link to="/teachers"><li onClick={() => selected(3)} className={`${style[3] ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>
                                Teachers
                            </li></Link>


                            <Link to="/course">
                                <li onClick={() => selected(4)} className={`${style[4] ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>
                                    Courses
                                </li></Link>

                            <Link
                                to="/membership"><li onClick={() => selected(5)} className={`${style[5] ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>

                                    Membership
                                </li></Link>


                        </ul>
                        <div className=" flex space-x-5 justify-center items-center pl-2">
                            <div>{name}</div>
                            <div className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">

                                {/* ----------------------------------------- */}

                                {
                                    user ?
                                        <div>
                                            <span className='mr-2'>{user.email}</span>
                                            <button onClick={logout}><button className="btn btn-sm btn-warning hover:bg-yellow-200">LogOut</button></button>
                                        </div>
                                        :
                                        <Link to="/login"><button className="btn btn-sm btn-warning hover:bg-yellow-200">Login</button></Link>
                                }


                                {/* ----------------------------------------- */}
                                {/* <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> */}
                                {/* <div className="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto duration-200" />
                                <div className=" w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto shadow-lg" /> */}
                            </div>
                            <button onClick={handleTheme}>
                                <svg className="cursor-pointer  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 " width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </nav>
                    {/* for smaller devcies */}
                    <div className="block md:hidden w-full mt-5 ">
                        <div onClick={() => setDropDown(!dropDown)} className="cursor-pointer px-4 py-3 text-white bg-indigo-600 rounded flex justify-between items-center w-full">
                            <div className="flex space-x-2 ">
                                <span id="s1" className={`${text.length != 0 ? '' : 'hidden'} font-semibold text-sm leading-3`}>Selected: </span><p id="textClicked" className="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer ">{text ? text : "Collections"}</p>
                            </div>
                            <svg id="ArrowSVG" className={`${dropDown ? '' : 'rotate-180'} transform duration-100`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className=" relative">
                            <ul id="list" className={`${dropDown ? 'hidden' : 'block'} font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md z-[1]`}>
                                <Link to="/"><li onClick={() => setSelectedText("Arts")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">
                                    Home
                                </li></Link>

                                <Link to="/blog">
                                    <li onClick={() => setSelectedText("Space")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">
                                        Blog
                                    </li></Link>

                                <Link to="/teachers">
                                    <li onClick={() => setSelectedText("Game")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">
                                        Teachers
                                    </li></Link>

                                <Link to="/membership"><li onClick={() => setSelectedText("Utility")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">
                                    Membership
                                </li></Link>


                                <Link to="/course">
                                    <li onClick={() => setSelectedText("Cards")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"> Courses</li>
                                </Link>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;


