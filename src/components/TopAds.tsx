import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";

export default component$(() => {
    return (
        <>
            <div
                class="top_ads1"
                style={{ width: "970px", margin: "20px auto" }}
            >
                <Image
                    unoptimized
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="sadad"
                    loading="lazy"
                    width={"970"}
                    height={"180"}
                    src={"/images/banner/970x180.gif"}
                />
            </div>
        </>
    );
});
