import NavigationBar from "@/components/NavigationBar"
// import AdminLayout from "@/components/layout/AdminLayout"
export default function AdminLayout(props) {
    return (
        <>
            <div className="admin_layout gap-4 grid grid-cols-12  lg:px-44">
                <div className="col-start-1 col-span-3">
                    <NavigationBar {...props} />
                </div>
                <div className="col-start-4 col-span-8">
                    {props.children}
                </div>
            </div>
        </>
    )
}
