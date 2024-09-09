import { Image } from "@unpic/qwik";
import { component$ } from "@builder.io/qwik";
export default component$<any>(() => {
    return (
        <>
            <div class="ad_panel_728x90">
                <Image
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="asdd"
                    src="/images/banner/728x90.png"
                    width={728}
                    height={90}
                />
            </div>
        </>
    );
});
