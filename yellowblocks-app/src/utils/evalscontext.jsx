import React, { createContext, useState } from 'react';

export const EvalsContext = createContext(null)

export default function EvalContext() {
    const [evals, setEvals] = useState(null)

    return {
        studentContext: {
            evals, 
            setEvals,
        }
    }
}