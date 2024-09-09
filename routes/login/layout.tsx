import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  var admin_path =  process.env.ADMIN_PATH;

    return (
        <>
            <Header admin_path={admin_path}/>
            <div className="container mx-auto"> {children}</div>
            <Footer />
        </>
    );
}
