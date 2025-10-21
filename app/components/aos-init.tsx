"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export function AosInit() {
    useEffect(() => {
        const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        Aos.init({
            duration: 500,
            easing: 'ease-out-cubic',
            offset: 120,
            once: true,
            disable: prefersReduced,
        });
    }, []);

    return null;
}