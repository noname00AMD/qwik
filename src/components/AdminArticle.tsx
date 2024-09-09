// import { useState, useEffect, useRef } from "react";
import { Link } from "@builder.io/qwik-city"
import { component$ } from "@builder.io/qwik"
export default component$<any>(({ props }) =>{
    return (<>
        <ul>
            {props.article.forEach((item:any, index:number) => {
                <li style={{ margin: "20px 0", fontSize: "2rem" }}>
                    <Link href={"/" + item.slug}>
                        {item.title}
                    </Link>
                </li>
            })}
        </ul>


    </>)
})
