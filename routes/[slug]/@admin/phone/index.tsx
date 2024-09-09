import AdminPhone from "@/components/admin/Phone";

export default function Admin({ params }) {
    var admin_path = process.env.ADMIN_PATH
 
        return (
            <AdminPhone admin_path ={admin_path}/>
        )
    
   
}
