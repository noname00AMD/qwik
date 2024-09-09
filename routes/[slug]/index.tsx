import NotFound from "~/components/not-found";
import { routeLoader$ ,useLocation} from "@builder.io/qwik-city";
import { findAricle } from "~/lib/article";
import { component$ } from "@builder.io/qwik";

// import type { PathParams } from "@builder.io/qwik-city";
export const useFindArticle = routeLoader$<string>(async (slug) => {
    const rs = await findAricle(slug);
    return rs;
});
export default component$(() => {
    // const admin_path = process.env.ADMIN_PATH;
    const loc = useLocation();
    const rs = useFindArticle(loc.params.slug);

    if (!rs.value) return <NotFound />;

    return (
        <>
            <h1>{rs.post_title} </h1>
        </>
    );
});
