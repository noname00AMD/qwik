import { Link } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
interface props {
    hide: any;
    categories: any;
}
export default component$((props: props) => {
    return (
        <>
            <div
                class={
                    "style.submenu absolute w-full z-50 border-b border-gray-600 dark:bg-slate-900"
                }
                aria-hidden="true"
            >
                <div>
                    <div class={"container mx-auto  py-10 " + "style.cont "}>
                        <div class="grid grid-cols-12 gap-4">
                            {props.categories.map((category: any) => {
                                if (
                                    !category.cate_parent_id &&
                                    category.visible === true
                                ) {
                                    const sub = props.categories.filter(
                                        (cate: any) => {
                                            return (
                                                cate.cate_parent_id &&
                                                cate.cate_parent_id ===
                                                    category.id
                                            );
                                        }
                                    );
                                    return (
                                        <div
                                            class={"col-span-3 "}
                                            key={category.id}
                                        >
                                            <h3
                                                class={
                                                    "hover:bg-gray-800 first-letter:uppercase"
                                                }
                                            >
                                                <Link
                                                    onClick$={props.hide}
                                                    href={"/" + category.slug}
                                                >
                                                    {category.cate_name}
                                                </Link>
                                            </h3>
                                            {sub.length !== 0 && (
                                                <ul>
                                                    {sub.map(
                                                        (
                                                            subcate: {
                                                                visible: boolean;
                                                                id: number;
                                                                slug: string;
                                                                cate_name: string;
                                                            },
                                                            subindex: number
                                                        ) => {
                                                            if (
                                                                subcate.visible ===
                                                                    true &&
                                                                subindex < 5
                                                            ) {
                                                                return (
                                                                    <li
                                                                        key={
                                                                            subcate.id
                                                                        }
                                                                        class="hover:bg-gray-800 first-letter:uppercase pl-2 text-xs font-extralight "
                                                                    >
                                                                        <Link
                                                                            onClick$={
                                                                                props.hide
                                                                            }
                                                                            href={
                                                                                "/" +
                                                                                category.slug +
                                                                                "/" +
                                                                                subcate.slug
                                                                            }
                                                                        >
                                                                            {
                                                                                subcate.cate_name
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                );
                                                            }
                                                        }
                                                    )}
                                                </ul>
                                            )}
                                        </div>
                                    );
                                }
                            })}

                            <button
                                class={
                                    "style.hide_all_btn absolute bottom-1 right-16 hover:bg-gray-800 hover:text-red-600"
                                }
                                onClick$={props.hide}
                            >
                                Close <span>&#10006;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});
