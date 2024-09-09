import AdminBrand from "@/components/admin/Brand";

export default function Admin({ params }) {
    var admin_path = process.env.ADMIN_PATH;

    return <AdminBrand admin_path={admin_path} />;
}
