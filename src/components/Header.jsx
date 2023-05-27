import { Link } from "@builder.io/qwik-city"
import { component$, useSignal, useVisibleTask$, $ } from "@builder.io/qwik"
import Submenu from "./Submenu";
import style from "../sass/Header.module.sass"

export default component$((props) => {
    const time = useSignal((new Date()).toDateString());
    var pin = useSignal(false)
    let show = useSignal(false)
    var topBarElm = useSignal();
    // const headerElm = useSignal()
    let show_all_btn = useSignal()
    // let hide_all_btn = useSignal()
    // let submenu = useSignal()
    let willHide = useSignal(false)
    useVisibleTask$(() => {
        console.log(pin.value);
        const observer = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    console.log("notpin");
                    pin.value = false
                } else {
                    console.log("pin");
                    pin.value = true
                }
            },
            { threshold: [0] }
        );
        observer.observe(topBarElm.value)

    })
    let search = () => {
        console.log("search");
    }
    let show_menu = $(() => {

        if (show.value === true) {
            willHide.value = show.value
            setTimeout(() => {
                willHide.value = !show.value
                show.value = !show.value
            }, 300);
            return
        }
        show.value = !show.value
    })
    return (
        <>

            <div class={style.top_bar} ref={topBarElm}>
                <div class={"cont-fluid"}>
                    <div class={"row"}>
                        <div class={"col-2 " + style.logo + " " + style["col-2"]}>
                            <div style={{ width: "168px" }}>
                                <Link href="/" title="home"
                                    style={{ backgroundImage: "url('/images/logo.png')", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>

                                </Link>
                            </div>
                        </div>
                        <div class={"col-2 " + style["col-2"]}>
                            <time class={style.time} id={"time"}>{time}</time>
                        </div>
                        <div class={"col-2 " + style["col-2"]}>
                            <p class={style.lang}>eng vi</p>
                        </div>
                        <div class={"col-2 " + style["col-2"]}>
                            <Link href={"/" + props.admin_path}>

                                Admin

                            </Link>
                            <Link href="/signup">signup</Link>
                            <Link href="/signin">signin</Link>
                        </div>
                        <div class={"col-2 " + style["col-2"]}>
                            <div>
                                <input placeholder="tim kiem" type="text" />
                                <ul class={style.search_dropdown + " hidden"}>
                                    <li>
                                        asdas
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class={"col-2 " + style["col-2"]}>
                            <button type="submit" onClick={search}>Search</button>
                        </div>
                    </div>
                </div>

            </div>
            <header class={style.header + " " + (pin.value ? style.pin : "") + " " + (show.value ? style.show : "")} >
                <div class={style.nav}>
                    <div class={"cont " + style.cont}>
                        <div class={"row"}>
                            <ul class={"col-12 " + style["col-12"]}>
                                <li class={style.home}>
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>
                                {props.categories.map((category, index) => {
                                    if (category.taxonomy === "CATEGORY" && index <= 5) {
                                        // console.log(category);

                                        return (
                                            <li key={category.term_taxonomy_id} class={"category"}>
                                                <Link href={category.slug}>
                                                    {category.name}
                                                </Link>
                                            </li>
                                        )
                                    }
                                })}
                                <li class={style.show_all_btn} ref={show_all_btn} onClick$={show_menu}>
                                    <button >{show.value ? <>&#10006; </> : <> &#8759;</>}</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Submenu
                    showing={show.value}
                    hide={show_menu}
                    categories={props.categories}
                    willHide={willHide.value}
                />
            </header >
        </>
    )
}
)
