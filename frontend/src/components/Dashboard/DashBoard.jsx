import { useReducer, useState } from "react";
import { Balance } from "./Balance";
import { Users } from "./Users";
import Transactions from "./Transactions";

function reducer (state, action) {
    if (action.type === 'User') {
        return {
            user: true,
            transaction: false,
            more: false
        }
    }
    if (action.type === 'Transaction') {
        return {
            user: false,
            transaction: true,
            more: false
        }
    }
    else {
        return {
            user: false,
            transaction: false,
            more: true
        }
    }
}

const Dashboard = ()  => {
    const [state, dispatch] = useReducer(reducer, {
        user: true,
        transaction: false,
        more: false
    });

    function handleDash (type) {
        dispatch({type: type});
    }

    return (
        <>
            <div className="mx-5">
                <Balance value={1000}/>
            </div>
            <ul className="shadow-lg py-1 border-t-2 border-blue-900 px-2 mt-5 mx-5 flex justify-between font-bold text-[#040F23] text-lg">
                <li><button onClick={() => handleDash('User')}>User</button></li>
                <li><button onClick={() => handleDash('Transaction')}>Transactions</button></li>
                <li><button onClick={() => handleDash('More')}>More</button></li>
            </ul>
            {state.user && <Users />}
            {state.transaction && <Transactions />}
        </>
    );
};

export default Dashboard;