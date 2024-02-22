'use client';
import { useDispatch } from "react-redux"
import { setAuthState } from "../slices/authSlice"

export const AuthUpdater = () => {

    const dispatch = useDispatch();


    return (
        <div>
            <button onClick={() => dispatch(setAuthState(true))}>Log in</button>
            <button onClick={() => dispatch(setAuthState(false))}>Log out</button>
        </div>
    )

}