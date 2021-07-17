import React, { createContext, useState } from 'react';

export const AppContext = createContext(null)

export default function Context() {
    const [userProfile, setUserProfile] = useState({})

    return {
        userProfileContext: {
            userProfile, 
            setUserProfile,
        }
    }
}