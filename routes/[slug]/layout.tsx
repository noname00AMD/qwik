
export default function AdminLayout({ children, params, admin }) {
    var props = {};
    props.admin_path = process.env.ADMIN_PATH;
    if (params.slug === props.admin_path) {
        return <>{admin}</>;
    }
    return (
        <>
            {children}
        </>
    );
}
