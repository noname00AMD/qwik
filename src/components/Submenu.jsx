
import style from "../sass/Header.module.sass"
import { component$ } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';
export default component$(({ showing, hide, categories, willHide }) => {
    return (<>

        {showing && <>
            <div class={style.submenu + " " + (willHide ? style.hide : "")} aria-hidden="true" >
                <div style={{}}>
                    <div class={"cont " + style.cont}>
                        <div class="row">
                            {categories.map((category, index) => {
                                if (category.taxonomy === "CATEGORY") {
                                    var sub = categories.filter(cate => {
                                        return cate.taxonomy === "SUBCATEGORY" && cate.parent === category.term_taxonomy_id
                                    })
                                    return (
                                        <div class={"col-3"} key={category.term_taxonomy_id} >
                                            <h3>
                                                <Link onClick={hide} href={"/" + category.slug}>
                                                    {category.name}
                                                </Link>
                                            </h3>
                                            {sub.length !== 0 &&
                                                <ul>
                                                    {sub.map((subcate, subindex) => {
                                                        if (subindex < 5) {
                                                            return (
                                                                <li key={subcate.subindex * 50}>
                                                                    <Link onClick={hide} href={"/" + category.slug + '/' + subcate.slug}>
                                                                        {subcate.name}
                                                                    </Link>
                                                                </li>
                                                            )
                                                        }
                                                    })
                                                    }
                                                </ul>
                                            }
                                        </div>
                                    )
                                }
                            })}
                        </div>
                        <button class={style.hide_all_btn} onClick$={hide}>Close <span>&#10006;</span></button>
                    </div>
                </div>
            </div>
        </>
        }


    </>)
})
