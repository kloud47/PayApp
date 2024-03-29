import { useDispatch } from "react-redux";
import { UserActions } from "../store/UserSlice";

function BottomWarning ({label, buttonText, to}) {
    const dispatch = useDispatch();

    function toggle () {
        (buttonText == 'Sign up') ?
            dispatch(UserActions.toggleSignup()) : dispatch(UserActions.toggleLogin());
    }

    return (
        <div className="py-2 text-sm flex justify-center">
            {label}
            <button onClick={toggle} className="pointer underline pl-1 cursor-pointer">{buttonText}</button>
        </div>
    )
}

export default BottomWarning;