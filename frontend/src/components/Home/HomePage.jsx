import { Outlet } from "react-router-dom";
import AppBar from "../Dashboard/AppBar";

export default function HomePage () {
    return (
        <>
        <AppBar />
        <main>
            <Outlet />
        </main>
        </>
    )
}