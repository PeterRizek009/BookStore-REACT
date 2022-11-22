import React from 'react'
import './user.css'
import { useState } from 'react';


const User = ({ user }) => {
    const [userClicked, setUserClicked] = useState(false);

    const handleUserBtn = () => {
        setUserClicked(true)
    }
    return (
        <>
            {userClicked === false ?
                <button className='btn btn-outline-secondary mx-5 user-text' onclick={handleUserBtn}>
                    {`Hi ${user}`}
                </button>
                : 
                <button className='btn btn-outline-secondary mx-5 user-text'>
                    Log out
                </button>
            }


        </>
    );
}

export default User;