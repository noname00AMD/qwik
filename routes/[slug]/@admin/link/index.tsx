import AdminLink from "@/components/admin/Link";

export default function Admin({ params }) {
    var admin_path = process.env.ADMIN_PATH;

    return <AdminLink admin_path={admin_path} />;
}
