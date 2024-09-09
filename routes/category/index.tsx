import CategoryList from "./../../components/CategoryList";
import { getAllCategory } from "./../../lib/category";
import { Link, routeLoader$ } from "@builder.io/qwik-city"
import { component$ } from "@builder.io/qwik"
export const getCategory = routeLoader$(async()=>{
 const categories = await getAllCategory()
 return categories
})
export default component$( () =>{
    const categories =  getCategory();
    
    return <CategoryList categories={categories} />;
   
})
