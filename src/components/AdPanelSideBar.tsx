import { Image } from "@unpic/qwik";
import { component$ } from "@builder.io/qwik";
export default component$<any>(({ hotTags }) => {
    return (
        <>
            <div
                class="sticky_top z-10"
                style={{
                    width: "300px",
                    margin: "0 auto",
                    minWidth: "300px",
                    position: "sticky",
                    top: "34px",
                }}
            >
                <Image
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="adxff"
                    src="/images/banner/600x300.png"
                    width={300}
                    height={600}
                />
            </div>
        </>
    );
});
