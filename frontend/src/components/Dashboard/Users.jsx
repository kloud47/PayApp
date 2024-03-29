import { useGSAP } from "@gsap/react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import gsap from 'gsap';

export const Users = () => {
    // Replace with backend call
    const [users, setUsers] = useState([
        {
            firstName: "Harkirat",
            lastName: "Singh",
            _id: 1
        },
        {
            firstName: 'Priyanshu',
            lastName: 'Shukla',
            _id: 2
        }
    ]);
    
    return <>
        <div className="p-5">
            <div className="font-bold text-[#040F23] text-lg">
                Users
            </div>
            <div className="my-2">
                <input type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200 lg:w-[70vw]"></input>
            </div>
            <div>
                {users.map(user => <User key={user._id} user={user} />)}
            </div>
        </div>
    </>
}

function User({user}) {
    const navigate = useNavigate();

    function handleSend () {
        setTimeout(() => {
            navigate('/send')
        }, 1500);
        setColor((prev) => !prev)
    }

    

    return <div className="sendMoney flex justify-between bg-[#fff] rounded-md shadow-md hover:bg-[#cde6fa] mt-1.5 lg:w-[70vw]">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-appBlue flex justify-center mt-1 mx-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-full m-2 shadow-md">
            <button onClick={handleSend} type="button" class="w-full bg-appOrange text-[#fff] hover:bg-gray-900  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2">
                Send Money
            </button>
        </div>
    </div>
}