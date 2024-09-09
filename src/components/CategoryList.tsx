import { Link } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$<any>((props) => {
    return (
        <>
            <div class=" xl:container xl:mx-auto 2xl:px-36">
                <ul class="col-span-9 my-10">
                    {props.categories.map((item: any, index: number) => {
                        if (item.is_visible) {
                            return (
                                <li
                                    key={index}
                                    class="grid grid-cols-12 gap-x-4 my-5"
                                >
                                    <div class="relative block h-24 col-span-3">
                                        <Image
                                            fill
                                            sizes=""
                                            alt="category image thumb"
                                            src={"/images/mark.webp"}
                                        ></Image>{" "}
                                    </div>

                                    <span>{item.cate_id}</span>
                                    <span>{item.cate_name}</span>
                                    <span>{item.cate_slug}</span>
                                    <span>{item.cate_size}</span>
                                    <span>{item.cate_parent_id}</span>
                                    <span>{item.cate_type}</span>
                                    <span>{item.cate_description}</span>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        </>
    );
});
