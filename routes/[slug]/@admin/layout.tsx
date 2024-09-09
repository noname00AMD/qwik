import NavigationBar from "@/components/admin/NavigationBar";

export default function AdminLayout({ children}) {
    var props = {}
     props.admin_path =  process.env.ADMIN_PATH;
     
  
    
        return (
            <>
                <div className="gap-4 grid grid-cols-12 lg:px-20">
                    <div className="col-start-1 col-span-2">
                        <NavigationBar {...props} />
                    </div>
                    <div className="col-start-3 col-span-10">{children}</div>
                </div>
            </>
        );
    
  
}
