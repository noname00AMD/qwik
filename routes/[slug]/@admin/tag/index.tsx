import AdminTag from "@/components/admin/Tag";

export default function Admin({ params }) {
    var admin_path = process.env.ADMIN_PATH
    if (params.slug === admin_path) {
        return (
            <AdminTag admin_path ={admin_path}/>
        )
    }
    return (
        <>
            <h1>slug</h1>
            {/* <AdminDashboard {...props} /> */}
        </>
    );
}
