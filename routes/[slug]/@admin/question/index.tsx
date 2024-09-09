import AdminQuestion from "@/components/admin/Question";

export default function Admin({ params }) {
    var admin_path = process.env.ADMIN_PATH
    if (params.slug === admin_path) {
        return (
            <AdminQuestion admin_path ={admin_path}/>
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
    const data = await res.json()
   
    return Response.json({ data })
  }