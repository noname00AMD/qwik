// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import HeadHomepage from "@/components/head/HeadHomepage";
// import HomeBody from "@/components/HomeBody";
// import { Suspense } from "react";
// // import { DarkThemeToggle, Flowbite } from "flowbite-react";
// export async function generateMetadata({ params }) {
//     return {
//         title: "...1",
//         description: "Generated by create next app",
//     };
// }
// export const experimental_ppr = true;
// export default function Home() {
//     var props = {
//         admin_path: process.env.ADMIN_PATH,
//         siteInfo: {
//             keyword: [],
//         },
//         title: "asas",
//     };
//     return (
//         <>
//             {" "}
//             {/* <Flowbite> */}
//                 {/* <DarkThemeToggle className="float-right" /> */}
//                 <HeadHomepage siteInfo={{ ...props.siteInfo }} title={"abc"} />
//                 <Header {...props} />
//                 <HomeBody {...props} />
//                 <Suspense>
//                     <Footer {...props} />
//                 </Suspense>{" "}
//             {/* </Flowbite> */}
//         </>
//     );
// }
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import HomeBody from "./../components/HomeBody";
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    const props = {
        admin_path: process.env.ADMIN_PATH,
        categories:[]
    };
    return (
        <>
            <Header {...props} />
            <HomeBody {...props} />

            <Footer {...props} />
        </>
    );
});

export const head: DocumentHead = {
    title: "Welcome to Qwik",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
