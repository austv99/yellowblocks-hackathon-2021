import React, { createContext, useState } from 'react';

export const AppContext = createContext(null)

export default function Context() {
    const [student, setStudent] = useState(null)

    return {
        studentContext: {
            student, 
            setStudent,
        }
    }
}