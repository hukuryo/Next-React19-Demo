"use client";

import { useCallback } from "react";

export const RefReceive = ({ ref }: { ref: React.RefObject<HTMLDivElement> }) => {
    const refCallback = useCallback((node: HTMLDivElement) => {
        console.log('activation', node);
        return () => {
        console.log('cleanup', node);
        };
    }, []);

    return <div ref={ref}>Hello</div>;
}
