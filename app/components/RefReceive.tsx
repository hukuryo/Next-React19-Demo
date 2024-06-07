"use client";

import { useCallback } from "react";

export const RefReceive = ({ ref }: { ref: React.RefObject<HTMLDivElement> }) => {
    return <div ref={ref}>Hello</div>;
}
