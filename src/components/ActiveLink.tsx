// "use client";

// import { usePathname } from 'next/navigation'
// import Link from 'next/link'
import { component$ } from "@builder.io/qwik";
import { useLocation, Link } from "@builder.io/qwik-city";

export default component$<any>(
    ({ children, activeClass, passclass, ...passprops }) => {
        const pathname = useLocation().url.pathname;

        return (
            <Link
                class={`link ${pathname === passprops.href ? activeClass + passclass : passclass}`}
                {...passprops}
            >
                {children}
            </Link>
        );
    }
);
