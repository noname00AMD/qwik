
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";

import { component$,Slot } from "@builder.io/qwik";

export default component$(() => {
    const admin_path = process.env.ADMIN_PATH;

 
    return (
        <>
            <Header  admin_path ={admin_path}/>
            <Slot/>
            <Footer />
        </>
    );
});
