import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$<any>((props) => {
    return (
        <>
            <ul class="col-9">{props.params}</ul>
        </>
    );
});
