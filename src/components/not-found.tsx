import { Link } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
export default component$(() => {
    return (
        <div>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </div>
    );
});
