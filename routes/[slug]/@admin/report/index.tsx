import AdminReport from "@/components/admin/Report";

export default function Admin({ params }) {
    var admin_path = process.env.ADMIN_PATH
 
        return (
            <AdminReport admin_path ={admin_path}/>
        )
    
   
}
