import Category from "@/components/Category";

export default function Admin({ params }) {

        return (
            <Category params = {params.cate_slug}/>
        )
    
  
}
