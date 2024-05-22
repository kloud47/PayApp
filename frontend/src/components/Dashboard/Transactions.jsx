import { useState } from "react";
import Graph from "./Graph";

export default function Transactions () {
    const [transacts, setTransact] = useState([
        {
            firstName: "Harkirat",
            lastName: "Singh",
            _id: 1,
            amount: +2000,
            Date: '20-10-24, 10:00 AM'
        },
        {
            firstName: 'Priyanshu',
            lastName: 'Shukla',
            _id: 2,
            amount: -2500,
            Date: '20-10-24, 11:45 AM'
        },
        {
            firstName: 'Priyanshu',
            lastName: 'Shukla',
            _id: 2,
            amount: 3500,
            Date: '20-10-24, 11:45 AM'
        },
    ]);

    return (
        <div className="flex flex-col w-screen px-5 pt-3 lg:flex-row">
            <div className="w-full my-2 lg:w-[50vw]">
                {transacts.map(user => <List key={user._id} user={user} />)}
            </div>

            <div className="w-full h-[250px] bg-[#c8f7f7] pt-5 lg:w-auto lg:mx-5 lg:pt-5 rounded-md shadow-lg">
                <Graph />
            </div>
        </div>
    );
}

function List({user}) {
    return <div className="sendMoney flex justify-between bg-[#fff] rounded-md shadow-md hover:bg-[#cde6fa] mb-1.5 w-full lg:w-[50vw]">
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

        <div className={`m-3 text-2xl font-bold ${user.amount > 0? 'text-[#9FE035]': ''}`}>
            {user.amount}
        </div>

        <div className="m-3">
            {user.Date}
        </div>
    </div>
}