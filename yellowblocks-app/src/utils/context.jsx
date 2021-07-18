import React, { createContext, useState } from 'react';

export const AppContext = createContext(null)

export default function Context() {
    const [student, setStudent] = useState(null)
    const [evals, setEvals] = useState(null)
    return {
        studentContext: {
            student, 
            setStudent,
        },
        evalContext: {
            evals, 
            setEvals,
        }
    }
}