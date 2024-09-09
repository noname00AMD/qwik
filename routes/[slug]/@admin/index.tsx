import AdminDashboard from "@/components/admin/Dashboard";

export default function Admin({ params }) {
    var admin_path = process.env.ADMIN_PATH
        return (
            <AdminDashboard admin_path = {admin_path}/>
        )
}
