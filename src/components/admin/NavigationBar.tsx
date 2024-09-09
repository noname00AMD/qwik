// import {  NavActiveLink } from "next/link"
import Link from "next/link";
import ActiveLink from "@/components/ActiveLink";
export default function NavigationBar(props) {
    var link_list = [
        {
            href: props.admin_path,
            className: "",
            textLink: "Dashboard",
        },
        {
            href: props.admin_path + "/article",
            className: "",
            textLink: "Articles",
            child: [
                {
                    href: props.admin_path + "/article/create",
                    className: "",
                    textLink: "New Articles",
                },
            ],
        },
        {
            href: props.admin_path + "/product",
            className: "",
            textLink: "Product",
            child: [
                {
                    href: props.admin_path + "/product/create",
                    className: "",
                    textLink: "New Product",
                },
            ],
        },
        {
            href: props.admin_path + "/question",
            className: "",
            textLink: "Question",
          
        },
        {
            href: props.admin_path + "/order",
            className: "",
            textLink: "Order",
           
        },
        {
            href: props.admin_path + "/comment",
            className: "",
            textLink: "Comment",
        },
        {
            href: props.admin_path + "/review",
            className: "",
            textLink: "Review",
        },
        {
            href: props.admin_path + "/mostactive",
            className: "",
            textLink: "Most active",
        },
        {
            href: props.admin_path + "/category",
            className: "",
            textLink: "Category",
          
        },
        {
            href: props.admin_path + "/user",
            className: "",
            textLink: "User",
           
        },
        {
            href: props.admin_path + "/report",
            className: "",
            textLink: "Report",
        },
        {
            href: props.admin_path + "/phone",
            className: "",
            textLink: "Phone",
        },
        {
            href: props.admin_path + "/event",
            className: "",
            textLink: "Event",
          
        },
        {
            href: props.admin_path + "/media",
            className: "",
            textLink: "Media",
         
        },
        {
            href: props.admin_path + "/tag",
            className: "",
            textLink: "Tags",
          
        },
        {
            href: props.admin_path + "/brand",
            className: "",
            textLink: "Brand",
           
        },
        {
            href: props.admin_path + "/link",
            className: "",
            textLink: "Link",
           
        },
        {
            href: props.admin_path + "/siteinfo",
            className: "",
            textLink: "Site Info",
        },
    ];
    return (
        <>
            <ul className={"navigationBar mt-4 text-sm"}>
                <li>
                    <Link className="-ml-6 text-xl font-bold" href="/">
                        {" "}
                        &lt; &lt; Back to Home
                    </Link>
                </li>
                {link_list.map((link,id) => {
                    return (
                        <li key={id}>
                            <ActiveLink
                                href={"/" + link["href"]}
                                className={""}
                                activeClassName="text-red-500"
                            >
                                {link["textLink"]}
                            </ActiveLink>
                            {link["child"] && (
                                <ul className="ml-4">
                                    {link["child"].map((child,idx) => {
                                        return (
                                            <li key={idx+500}>
                                                <ActiveLink
                                                    href={"/" + child["href"]}
                                                    className=""
                                                    activeClassName="text-red-500"
                                                >
                                                    {child["textLink"]}
                                                </ActiveLink>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
