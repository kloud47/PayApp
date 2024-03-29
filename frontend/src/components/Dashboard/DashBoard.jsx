import { Balance } from "./Balance";
import { Users } from "./Users";

const Dashboard = ()  => {
    return (
        <>
            <div className="mx-5">
                <Balance value={1000}/>
            </div>
            <Users />
        </>
    );
};

export default Dashboard;