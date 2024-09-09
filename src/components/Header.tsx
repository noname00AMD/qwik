// "use client";
// import Link from "next/link";
// import Script from "next/script";
// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Submenu from "./Submenu";
// export default function Header(props) {
//     const time= new Date().toDateString()
//     const topBarElm = useRef();
//     var show_all_btn = useRef();
//     var [show, setShow] = useState(false);
//     var [pin, setPin] = useState(false);

//    var categories = [
//         {
//             id: 1,
//             cate_order:0,
//             cate_parent_id: null,
//             visible: true,
//             slug: "a",
//             cate_name: "asada",
//         },
//         {
//             id: 2,
//             cate_order:1,

//             cate_parent_id: null,
//             visible: true,
//             slug: "a",
//             cate_name: "asads a aada",
//         },
//         {
//             id: 3,
//             cate_order:2,

//             cate_parent_id: null,
//             visible: true,
//             slug: "aas",
//             cate_name: "asa asdasda da",
//         },
//         {
//             id: 4,
//             cate_order:3,

//             cate_parent_id: 2,
//             visible: true,
//             slug: "aas",
//             cate_name: "tasa asdasda daaaaaa aaaaaa aaaaaaaa",
//             parent: 2,
//         },
//         {
//             id: 5,
//             cate_parent_id: null,
//             cate_order:4,

//             visible: true,
//             slug: "aas",
//             cate_name: "asa asdasda da",
//         },
//         {
//             id: 6,
//             cate_parent_id: null,
//             visible: true,
//             cate_order:5,

//             slug: "aas",
//             cate_name: "asa asdasda da",
//         },
//         {
//             id: 7,
//             cate_parent_id: null,
//             visible: true,
//             cate_order:6,

//             slug: "aas",
//             cate_name: "asa asdasda da",
//         },
//         {
//             id: 8,
//             cate_parent_id: null,
//             visible: true,
//             cate_order:7,

//             slug: "aas",
//             cate_name: "asa asdasda da",
//         },
//     ];

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([e]) => {
//                 if (e.isIntersecting) {
//                     setPin(false);
//                     // headerElm.current.classList.remove("pin")
//                 } else {
//                     setPin(true);
//                 }
//             },
//             { threshold: [0] }
//         );
//         observer.observe(topBarElm.current);
//     });
//     var search = () => {
//         console.log("search");
//     };
//     var show_menu = () => {
//         if (show === true) {
//             // setTimeout(() => {
//                 setShow(!show);
//             // }, 300);
//             return;
//         }
//         setShow(!show);
//     };
//     return (
//         <>
//             <div
//                 class={
//                     "top_bar container mx-auto grid grid-cols-12 gap-4 h-12"
//                 }
//                 ref={topBarElm}
//             >
//                 <div class={"col-start-1 col-span-2 style.logo  "}>
//                     <div style={{ width: "168px" }}>
//                         <Link
//                             href="/"
//                             title="home"
//                             class={"block w-full h-12"}
//                             style={{
//                                 backgroundImage: "url('/images/logo.png')",
//                                 backgroundRepeat: "no-repeat",
//                                 backgroundSize: "100% 100%",
//                             }}
//                         ></Link>
//                     </div>
//                 </div>
//                 <div class={"col-span-2 style.col-2 leading-10"}>
//                     <time class={"style.time"} id={"time"}>
//                         {time}
//                     </time>
//                 </div>
//                 <div class={"col-span-2 style.col-2 leading-10"}>
//                     <p class={"style.lang"}>eng vi</p>
//                 </div>
//                 <div class={"col-span-2 style.col-2 leading-10"}>
//                     <Link href={"/" + props.admin_path}>Admin</Link>
//                     <Link href="/signup">signup</Link>
//                     <Link href="/signin">login</Link>
//                 </div>
//                 <div class={"col-span-2 style.col-2 leading-10"}>
//                     <div>
//                         <input placeholder="tim kiem" type="text" />
//                         <ul class={"style.search_dropdown" + " hidden"}>
//                             <li>asdas</li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div class={"col-span-2 style.col-2 leading-10"}>
//                     <button type="submit" onClick={search}>
//                         Search
//                     </button>
//                 </div>
//             </div>

//             <header
//                 class={
//                     "style.header  sticky top-0 z-50 dark:bg-slate-900 bg-white will-change-contents relative" +
//                     " " +
//                     (pin ? "style.pin fixed top-0 z-50" : "") +
//                     " " +
//                     (show ? "style.show" : "")
//                 }
//             >
//                 <div class={"style.nav border-b border-gray-600"}>
//                     <div class={"container mx-auto style.cont relative"}>
//                         <ul class={"col-12  style.col-12"}>
//                             <li
//                                 class={
//                                     "style.home inline-block hover:text-red-800"
//                                 }
//                             >
//                                 <Link
//                                     href="/"
//                                     class={
//                                         "font-extrabold text-xl block " +
//                                         (pin
//                                             ? "opacity-100  visible translate-x-0"
//                                             : "invisible opacity-0 w-0  ")
//                                     }
//                                 >
//                                     Home
//                                 </Link>
//                             </li>
//                             {categories.map((category, index) => {
//                                 if (
//                                     !category.cate_parent_id &&
//                                     category.visible === true &&
//                                     index <= 6
//                                 ) {
//                                     // console.log("ok");
//                                     return (
//                                         <li
//                                             key={category.id}
//                                             class={
//                                                 "category inline-block hover:bg-gray-800"
//                                             }
//                                         >
//                                             <Link
//                                                 href={category.slug}
//                                                 class="block px-2 font-medium text-sm first-letter:uppercase"
//                                             >
//                                                 {category.cate_name}
//                                             </Link>
//                                         </li>
//                                     );
//                                 }
//                             })}
//                             <li
//                                 class={
//                                     "style.show_all_btn absolute right-0 -bottom-1  inline-block"
//                                 }
//                                 ref={show_all_btn}
//                                 onClick={show_menu}
//                             >
//                                 <button class="cursor-pointer leading-8 text-xl">
//                                     {show ? <>&#10006; </> : <> &#8759;</>}
//                                 </button>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//                 {show && (
//                     <Submenu
//                         hide={show_menu}
//                         categories={categories}
//                     />
//                 )}
//             </header>
//         </>
//     );
// }

import { component$, useSignal, $ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Submenu from "./Submenu";

export default component$<any>((props) => {
    const time = useSignal("");
    const pin = useSignal(false);
    const show = useSignal(false);
    const search = $(() => {
        console.log("search");
    });
    const show_menu = $(() => {
        if (show.value === true) {
            //delay for animation
            // setTimeout(() => {
            show.value = !show.value;
            // }, 300);
            return;
        }
        show.value = !show.value;
    });
    return (
        <>
            <div
                class={"top_bar container mx-auto grid grid-cols-12 gap-4 h-12"}
                // ref={topBarElm}
            >
                <div class={"col-start-1 col-span-2 style.logo  "}>
                    <div style={{ width: "168px" }}>
                        <Link
                            href="/"
                            title="home"
                            class={"block w-full h-12"}
                            style={{
                                backgroundImage: "url('/images/logo.png')",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "100% 100%",
                            }}
                        ></Link>
                    </div>
                </div>
                <div class={"col-span-2 style.col-2 leading-10"}>
                    <time class={"style.time"} id={"time"}>
                        {time}
                    </time>
                </div>
                <div class={"col-span-2 style.col-2 leading-10"}>
                    <p class={"style.lang"}>eng vi</p>
                </div>
                <div class={"col-span-2 style.col-2 leading-10"}>
                    <Link href={"/" + props.admin_path}>Admin</Link>
                    <Link href="/signup">signup</Link>
                    <Link href="/signin">login</Link>
                </div>
                <div class={"col-span-2 style.col-2 leading-10"}>
                    <div>
                        <input placeholder="tim kiem" type="text" />
                        <ul class={"style.search_dropdown" + " hidden"}>
                            <li>asdas</li>
                        </ul>
                    </div>
                </div>
                <div class={"col-span-2 style.col-2 leading-10"}>
                    <button type="submit" onClick$={search}>
                        Search
                    </button>
                </div>
            </div>

            <header
                class={
                    "style.header  sticky top-0 z-50 dark:bg-slate-900 bg-white will-change-contents " +
                    " " +
                    (pin.value ? "style.pin fixed top-0 z-50" : "") +
                    " " +
                    (show.value ? "style.show" : "")
                }
            >
                <div class={"style.nav border-b border-gray-600"}>
                    <div class={"container mx-auto style.cont relative"}>
                        <ul class={"col-12  style.col-12"}>
                            <li
                                class={
                                    "style.home inline-block hover:text-red-800"
                                }
                            >
                                <Link
                                    href="/"
                                    class={
                                        "font-extrabold text-xl block " +
                                        (pin
                                            ? "opacity-100  visible translate-x-0"
                                            : "invisible opacity-0 w-0  ")
                                    }
                                >
                                    Home
                                </Link>
                            </li>
                            {props.categories.map(
                                (category: any, index: number) => {
                                    if (
                                        !category.cate_parent_id &&
                                        category.visible === true &&
                                        index <= 6
                                    ) {
                                        // console.log("ok");
                                        return (
                                            <li
                                                key={category.id}
                                                class={
                                                    "category inline-block hover:bg-gray-800"
                                                }
                                            >
                                                <Link
                                                    href={category.slug}
                                                    class="block px-2 font-medium text-sm first-letter:uppercase"
                                                >
                                                    {category.cate_name}
                                                </Link>
                                            </li>
                                        );
                                    }
                                }
                            )}
                            <li
                                class={
                                    "style.show_all_btn absolute right-0 -bottom-1  inline-block"
                                }
                                // ref={show_all_btn}
                                onClick$={show_menu}
                            >
                                <button class="cursor-pointer leading-8 text-xl">
                                    {show.value ? <>&#10006; </> : <> &#8759;</>}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                {show.value && (
                    <Submenu hide={show_menu} categories={props.categories} ></Submenu>
                )}
            </header>
        </>
    );
});
