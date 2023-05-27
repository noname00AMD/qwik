// import {  NavActiveLink } from "next/link"
import { useState, useEffect, useRef } from "react";
import ActiveLink from "./ActiveLink";
import style from "../sass/NavigationBar.module.sass"
export default function NavigationBar(props) {
    return (<>
        <div className="col-3">

            <ul className={style.navigationBar}>
                <li>
                    <ActiveLink href="/" activeClassName={style.active}>
                       Back to Home
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink href={"/" + props.admin_path} activeClassName={style.active}>
                       Admin
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink href={"/" + props.admin_path + "/article"} activeClassName={style.active}>
                        Articles
                    </ActiveLink>
                    <ul>
                        <li>
                            <ActiveLink href={"/" + props.admin_path + "/article/add"} activeClassName={style.active}>
                                New Article
                            </ActiveLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <ActiveLink href={"/" + props.admin_path + "/category"} activeClassName={style.active}>
                        Category
                    </ActiveLink>
                    <ul>
                        <li>
                            <ActiveLink href={"/" + props.admin_path + "/category/add"} activeClassName={style.active}>
                               New Category
                            </ActiveLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <ActiveLink href={"/" + props.admin_path + "/user"} activeClassName={style.active}>
                       User
                    </ActiveLink>
                    <ul>
                        <li>
                            <ActiveLink href={"/" + props.admin_path + "/user/add"} activeClassName={style.active}>
                               New User
                            </ActiveLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <ActiveLink href={"/" + props.admin_path + "/media"} activeClassName={style.active}>
                        Media
                    </ActiveLink>
                    <ul>
                        <li>
                            <ActiveLink href={"/" + props.admin_path + "/media/add"} activeClassName={style.active}>
                                New Media
                            </ActiveLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <ActiveLink href={"/" + props.admin_path + "/tag"} activeClassName={style.active}>
                       Tag
                    </ActiveLink>
                    <ul>
                        <li>
                            <ActiveLink href={"/" + props.admin_path + "/tag/add"} activeClassName={style.active}>
                                New Tag
                            </ActiveLink>

                        </li>
                    </ul>
                </li>
                <li>
                    <ActiveLink href={"/" + props.admin_path + "/siteinfo"} activeClassName={style.active}>
                        Site info
                    </ActiveLink>
                </li>
            </ul>
        </div>
    </>)
}
