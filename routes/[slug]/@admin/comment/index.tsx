import AdminComment from "@/components/admin/Comment";

export default function Admin({ params }) {
    var admin_path = process.env.ADMIN_PATH
    if (params.slug === admin_path) {
        return (
            <AdminComment admin_path ={admin_path}/>
        )
    }
    return (
        <>
            <h1>slug</h1>
            {/* <AdminDashboard {...props} /> */}
        </>
    );
}
export async function POST() {
    const res = await fetch('https://data.mongodb-api.com/...', {
      headers: {
        'Content-Type': 'application/json',
        'API-Key': process.env.DATA_API_KEY,
      },
    })
    var data = await res.json()
    data={"ok":"ko"}
   
    return Response.json({ data })
  }