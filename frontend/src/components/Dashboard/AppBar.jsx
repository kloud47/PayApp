import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserActions } from "../../store/UserSlice";
import UserImg from '../../../public/user.png';
import Profile from "../Profile";
import { useRef, useState } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

export default function AppBar () {
    const profile = useSelector(state => state.user.profile)
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const profileRef = useRef();

    function handleLogin () {
        dispatch(UserActions.toggleLogin());
    }

    function handleProfile () {
        setShow(() => !show);
    }

    // useGSAP(() => {
    //     gsap.from('profile', {
    //         opacity: 0
    //     });
    // }, {scope: profileRef})

    return (
        <>
        <nav className="transparent to-appBlue h-[80px] m-[10px] rounded-md navWidth">
            <label className="text-[#fff] text-4xl leading-[80px] px-[10%] font-bold">
                <Link to={'/'}>
                    PayApp
                </Link>
            </label>
            { !profile &&
                <ul className="float-right mx-[10px] text-[#fff] text-xl">
                <li className="inline-block">
                    <button onClick={handleLogin} className="m-3  px-[7px] py-[10px] rounded-md hover:bg-blueHover ease-in duration-200">
                        Login
                    </button>
                </li>
                <li className="inline-block">
                    <button className="px-[7px] py-[10px] rounded-md hover:bg-blueHover ease-in duration-200 shadow-lg">
                        <Link to={'signup'}>Sign up</Link>
                    </button>
                </li>
            </ul>
            }
            { profile &&
            <ul className="float-right mx-[10px] text-[#fff] text-xl text-[#000] flex items-center">
                <li className="inline-block leading-[80px] mr-4 font-bold text-[#fff]">
                    Hello
                </li>
                <li className="inline-block h-[80px] pt-3 leading-[80px]">
                        <button onClick={handleProfile} className="h-12 w-12 bg-[#fff] rounded-full text-center overflow-hidden p-1 border-2 border-solid border-appBlue">
                            <img src={UserImg} alt="user" />
                        </button>
                </li>
            </ul>}
                {show && <Profile ref={profileRef}/>}
        </nav>


        </>
    );
}