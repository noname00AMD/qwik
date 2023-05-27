import { component$ } from '@builder.io/qwik';
// import { routeLoader$ } from '@builder.io/qwik-city';
import Counter from '../components/starter/counter/counter';
import Hero from '../components/starter/hero/hero';
import Infobox from '../components/starter/infobox/infobox';
import HomeBody from "../components/HomeBody"


export default component$((props) => {
    return (
        <>
            <HomeBody siteInfo={...props.siteInfo} categories={...props.categories} />
        </>
    );
});

export const head = {
    title: 'Welcome to Qwik',
    meta: [
        {
            name: 'description',
            content: 'Qwik site description',
        },
    ],
};
