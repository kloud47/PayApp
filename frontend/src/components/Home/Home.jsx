import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from "react";
import Signup from "../Signup";
import Signin from "../Signin";
import gsap from 'gsap';
import { UserActions } from "../../store/UserSlice";

export default function Home() {
    const isLoggedin = useSelector(state => state.user.login);
    const isSignedup = useSelector(state => state.user.signup);
    const dash = useSelector(state => state.user.dash)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const home = useRef();

    function GoToDash () {
        dispatch(UserActions.toggleProfile());
        navigate('/dashboard')
    }

    useGSAP(() => {
        gsap.from(['.login', '.signup'], {
            opacity: 0,
            x: 200,
            duration: 1.3,
            ease: 'back',
        });
    }, {scope: home, dependencies: [isLoggedin, isSignedup]});

    useEffect(() => {
        const ctx = gsap.context(() => {
            const t1 = gsap.timeline();
            t1.from('.text1', {
                x: -50,
                duration: .8,
                ease: 'power3.in',
                opacity: 0
            })
            .from('.text2', {
                opacity: 0,
                ease: 'power3.in',
                x: -50
            })
            .from('.text3', {
                opacity: 0,
                x: -50,
                ease: 'bounce',
            })
        })
    }, [])

    return (
        <section className="h-[calc(100vh-100px)] w-screen relative" ref={home}>
            <div className="BGhome">
            </div>
            <div className="text-[#fff] absolute top-0 m-10 text-5xl">
                <h1 className=" text1 font-serif">FOR,</h1>
                <h1 className="italic text2 font-serif">Easy and Fast</h1>
                <h1 className="font-black text3 text-[#FF8C12] text-6xl">TRANSACTIONS</h1>
            </div>
            { <button onClick={GoToDash} className="button bg-[#FF8C12] w-[10%] rounded-lg p-[1vw] text-[1.5vw] text-[#fff] font-bold absolute bottom-7 right-[10vw] shadow-lg">
                Go to Dash
            </button>}
            { isLoggedin &&
                <div className="absolute top-0 right-0 mt-5 mx-10 login">
                <Signin />
                </div>
            }
        </section>
    );
}