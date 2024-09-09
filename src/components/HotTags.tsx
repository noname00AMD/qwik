import { Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import { component$ } from "@builder.io/qwik";
export default component$(() => {
    return (
        <>
            <h2 class="hottags">HotTags</h2>
            <ul class="text-sm">
                {
                    // Array.prototype.from(hotTags).map((tag, i) => {
                    //     return (
                    //         <div key={i} class="tag">
                    //             <span style={{ fontSize: "28px", color: "#ada1a6" }}>#{i + 1}</span>
                    //             <Link href={"/" + tag.slug}>
                    //                 <a style={{ fontSize: "18px" }}>{tag.name}
                    //             </Link>
                    //         </div>)
                    // })
                }
                <li class="inline-block border py-0.5 px-0.5 mb-1 mr-0.5 ">
                    <div class="bolock relative h-9 mx-auto max-w-16">
                        <Image
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            fill
                            src={"/images/mark.webp"}
                            alt="a"
                        />
                    </div>
                    <Link href={"/"}>
                        <span>#tineeeee</span>
                    </Link>
                </li>
                <li class="inline-block border py-0.5 px-0.5 mb-1 mr-0.5 ">
                    <div class="bolock relative h-9 mx-auto max-w-16">
                        <Image
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            fill
                            src={"/images/mark.webp"}
                            alt="a"
                        />
                    </div>
                    <Link href={"/"}>
                        <span>#tine eeee</span>
                    </Link>
                </li>
                <li class="inline-block border py-0.5 px-0.5 mb-1 mr-0.5 ">
                    <div class="bolock relative h-9 mx-auto max-w-16">
                        <Image
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            fill
                            src={"/images/mark.webp"}
                            alt="a"
                        />
                    </div>
                    <Link href={"/"}>
                        <span>#tine eeee asdad</span>
                    </Link>
                </li>
                <li class="inline-block border py-0.5 px-0.5 mb-1 mr-0.5 ">
                    <div class="bolock relative h-9 mx-auto max-w-16">
                        <Image
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            fill
                            src={"/images/mark.webp"}
                            alt="a"
                        />
                    </div>
                    <Link href={"/"}>
                        <span>#tin eeeee</span>
                    </Link>
                </li>
            </ul>
        </>
    );
});
