"use client"

import { useCallback, useState } from "react";
import { RefReceive } from "./RefReceive";


export default function RefCleanup() {
    const [count, setCount] = useState(0);
    const refCallback = useCallback((node: HTMLDivElement) => {
        console.log('activation', node);
        return () => {
        console.log('cleanup', node);
        };
    }, []);
    return (
        <div ref={refCallback}>
            {count}<br />
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            <RefReceive ref={refCallback}/>
        </div>
    );
}
