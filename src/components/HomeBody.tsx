import { Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import { component$ } from "@builder.io/qwik";
import Slider from "./slider";
import HotTags from "./HotTags";
import AdPanelSideBar from "./AdPanelSideBar";
import AdPanel728x90 from "./AdPanel728x90";
import TopAds from "./TopAds";
// import {getAllCategory} from"./../lib/category"
export default component$<any>(async (props) => {
    // var data = await getAllCategory()
    return (
        <>
            <div class="home_body grid grid-cols-12 gap-x-4 ">
                <div class="col-start-1 col-span-12 ">
                    <TopAds />
                </div>
                <section class="col-start-1 col-span-12 xl:container xl:mx-auto 2xl:px-36 grid grid-cols-12 gap-x-4 mb-3">
                    <div class="col-start-1 col-span-9 p-2">
                        <div class="grid grid-cols-12 gap-x-4">
                            <div class="col-span-8 ">
                                <div class="grid grid-cols-12 gap-x-4 mb-2">
                                    <div class="col-span-12">
                                        <div style={{ width: "100%" }}>
                                            <div
                                                class="relative"
                                                style={{ marginBottom: "4px" }}
                                            >
                                                <Link
                                                    class="relative block h-48 w-full  "
                                                    href="/"
                                                >
                                                    <Image
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        quality={80}
                                                        fill
                                                        alt="ass"
                                                        src="/images/mark.webp"
                                                    />
                                                </Link>
                                            </div>
                                            <Link
                                                href="/"
                                                class="title1"
                                                style={{
                                                    display: "inline-block",
                                                    marginBottom: "5px",
                                                }}
                                            >
                                                hot girl Trâm Anh nổi như cồn
                                                lào !!hot girl tram anh noi nhu
                                                con lao !!
                                            </Link>
                                            <p class="text-xs">
                                                Chỉ còn chưa đầy một ngày nữa kỳ
                                                thi tuyển sinh vào lớp 10 THPT ở
                                                Hà Nội sẽ chính thức diễn ra,
                                                nhiều phụ huynh cùng sĩ tử đã
                                                đến Văn Miếu - Quốc Tử Giám cầu
                                                may mắn.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid grid-cols-12 gap-x-4">
                                    <div
                                        class="col-span-12"
                                        style={{
                                            borderRadius: "4px",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <Slider></Slider>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-4  ">
                                <ul>
                                    <li
                                        class="relative"
                                        style={{ marginBottom: "10px" }}
                                    >
                                        <Link
                                            class="relative block h-24 w-full"
                                            href="/"
                                        >
                                            <Image
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                quality={80}
                                                fill
                                                alt="a"
                                                src="/images/mark.webp"
                                            />
                                        </Link>
                                        <Link href="/" class="title2">
                                            t girl tram anh noi nhu con lao
                                            !!hot girl tram anh noi nhu con lao
                                            !!
                                        </Link>
                                        <p
                                            class="text-xs"
                                            style={{ padding: "0 8px" }}
                                        >
                                            t girl tram anh noi nhu con lao
                                            !!hot girl tram anh noi nhu con lao
                                            !!t girl tram anh noi nhu con lao
                                            !!hot girl tram anh noi nhu con lao
                                            !!
                                        </p>
                                    </li>

                                    <li
                                        class="clear-both my-3 overflow-auto"
                                        style={{ marginBottom: "8px" }}
                                    >
                                        <Link
                                            href="/"
                                            class=" h-10 relative  w-4/12 block float-left"
                                        >
                                            <Image
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                quality={80}
                                                fill
                                                alt="a"
                                                src="/images/mark.webp"
                                            />
                                        </Link>

                                        <Link
                                            href="/"
                                            class="block w-8/12 float-left  pl-1 title5"
                                        >
                                            hot girt dgdff sfs ffs ff sfsf
                                        </Link>
                                    </li>

                                    <li
                                        class="clear-both my-3 overflow-auto"
                                        style={{ marginBottom: "8px" }}
                                    >
                                        <Link
                                            href="/"
                                            class=" h-10 relative  w-4/12 block float-left"
                                        >
                                            <Image
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                quality={80}
                                                fill
                                                alt="a"
                                                src="/images/mark.webp"
                                            />
                                        </Link>

                                        <Link
                                            href="/"
                                            class="block w-8/12 float-left  pl-1 title5"
                                        >
                                            hot girt dgdff sfs ffs ff sfsf
                                        </Link>
                                    </li>

                                    <li
                                        class="clear-both my-3 overflow-auto"
                                        style={{ marginBottom: "8px" }}
                                    >
                                        <Link
                                            href="/"
                                            class=" h-10 relative  w-4/12 block float-left"
                                        >
                                            <Image
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                quality={80}
                                                fill
                                                alt="a"
                                                src="/images/mark.webp"
                                            />
                                        </Link>

                                        <Link
                                            href="/"
                                            class="block w-8/12 float-left  pl-1 title5"
                                        >
                                            hot girt dgdff sfs ffs ff sfsf
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-3 col-start-10 d-lg-none">
                        <AdPanelSideBar />
                    </div>

                    <div class=" grid grid-cols-12 gap-x-4 col-span-12">
                        <div class="col-span-12 col-start-1 mb-1">
                            <h2 class="text_decor inline title2">
                                Đáng chú ý :
                            </h2>
                        </div>
                        <ul class="col-span-12 col-start-1 grid grid-cols-12 gap-x-4 ">
                            <li class="col-span-3 ">
                                <Link
                                    class="relative h-24 block w-full"
                                    href="/"
                                >
                                    <Image
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        quality={80}
                                        fill
                                        alt="a"
                                        class=""
                                        src="/images/mark.webp"
                                    />
                                </Link>
                                <Link href="/" class=" title4">
                                    hot girl tram anh noi nhu con lao !!!hot
                                    girl tram anh noi nhu con lao !!hot girl
                                    tram anh noi nhu con lao !!
                                </Link>
                            </li>

                            <li class="col-span-3 ">
                                <Link
                                    class="relative h-24 block w-full"
                                    href="/"
                                >
                                    <Image
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        quality={80}
                                        fill
                                        alt="a"
                                        class=""
                                        src="/images/mark.webp"
                                    />
                                </Link>
                                <Link
                                    href="/"
                                    class="pl-2 title4"
                                    style={{
                                        display: "inline-block",
                                        width: "100%",
                                        padding: "0  0 0 8px",
                                    }}
                                >
                                    hot girl tram anh noi nhu con lao !!!hot
                                    girl tram anh noi nhu con lao !!hot girl
                                    tram anh noi nhu con lao !!
                                </Link>
                            </li>

                            <li class="col-span-3 ">
                                <Link
                                    class="relative h-24 block w-full"
                                    href="/"
                                >
                                    <Image
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        quality={80}
                                        fill
                                        alt="a"
                                        class=""
                                        src="/images/mark.webp"
                                    />
                                </Link>
                                <Link
                                    href="/"
                                    class="pl-2 title4"
                                    style={{
                                        display: "inline-block",
                                        width: "100%",
                                        padding: "0  0 0 8px",
                                    }}
                                >
                                    hot girl tram anh noi nhu con lao !!!hot
                                    girl tram anh noi nhu con lao !!hot girl
                                    tram anh noi nhu con lao !!
                                </Link>
                            </li>

                            <li class="col-span-3 ">
                                <Link
                                    class="relative h-24 block w-full"
                                    href="/"
                                >
                                    <Image
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        quality={80}
                                        fill
                                        alt="a"
                                        class=""
                                        src="/images/mark.webp"
                                    />
                                </Link>
                                <Link href="/" class="pl-2 title4">
                                    hot girl tram anh noi nhu con lao !!!hot
                                    girl tram anh noi nhu con lao !!hot girl
                                    tram anh noi nhu con lao !!
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>

                <section class="col-span-12">
                    <div
                        class=" grid grid-cols-12 gap-x-4 2xl:px-36 xl:container xl:mx-auto border-t border-gray-600"
                        style={{ marginBottom: "40px" }}
                    >
                        <div class="col-span-9 ">
                            <div class="py-2 overflow-auto border-b border-gray-600">
                                <div
                                    class="float-left w-4/12 relative"
                                    style={{ verticalAlign: " top" }}
                                >
                                    <Link
                                        href="/"
                                        class="relative block w-full h-24"
                                    >
                                        <Image
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            quality={80}
                                            fill
                                            alt="a"
                                            class=""
                                            src="/images/mark.webp"
                                        />
                                    </Link>
                                </div>

                                <div class="float-left w-8/12 pl-2">
                                    <Link
                                        href="/"
                                        style={{ paddingBottom: "10px" }}
                                        class="title4 "
                                    >
                                        hot2 girl2 tram anh noi nhu con lao
                                        !!!hot girl tram anh noi nhu con lao
                                        !!hot girl tram anh noi nhu con lao !!
                                    </Link>
                                    <p class="text-content mb-1">
                                        hot girl tr hot girl tram anh noi nhu
                                        con lao !!!hot girl tram a hot girl tram
                                        anh noi nhu con la hot girl traao !!!hot
                                        girl tram a hot girl tram anh noi nhu
                                        con
                                    </p>
                                    <div class="text-xs text-right">
                                        <Link href="/tinICT" class="pl-2 ">
                                            tin ICT
                                        </Link>
                                        <span style={{ marginLeft: "20px" }}>
                                            3 gio truoc
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="py-2 overflow-auto border-b border-gray-600">
                                <div class="float-left w-4/12 relative">
                                    <Link
                                        href="/"
                                        class="relative block w-full h-24"
                                    >
                                        <Image
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            quality={80}
                                            fill
                                            alt="a"
                                            class=""
                                            src="/images/mark.webp"
                                        />
                                    </Link>
                                </div>
                                <div class="float-left w-8/12 pl-3">
                                    <Link
                                        href="/"
                                        style={{ paddingBottom: "10px" }}
                                        class="title4 "
                                    >
                                        hot2 girl2 tram anh noi nhu con lao
                                        !!!hot girl tram anh noi nhu con lao
                                        !!hot girl tram anh noi nhu con lao !!
                                    </Link>
                                    <p class="text-content mb-1">
                                        hot girl tr hot girl tram anh noi nhu
                                        con lao !!!hot girl tram a hot girl tram
                                        anh noi nhu con la hot girl traao !!!hot
                                        girl tram a hot girl tram anh noi nhu
                                        con
                                    </p>
                                    <div class="text-xs text-right">
                                        <Link href="/tinICT" class="pl-2">
                                            tin ICT
                                        </Link>
                                        <span style={{ marginLeft: "20px" }}>
                                            3 gio truoc
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="ads py-2">
                                <AdPanel728x90 />
                            </div>

                            <div
                                class="border-b border-gray-600 py-2 grid grid-cols-12 gap-x-4"
                                style={{ marginBottom: "36px" }}
                            >
                                <div class="col-span-4">
                                    <Link href="/" class="relative block h-28">
                                        <Image
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            quality={80}
                                            fill
                                            alt="a"
                                            class=" "
                                            src="/images/mark.webp"
                                        />
                                    </Link>
                                </div>
                                <div class="col-span-8 col-start-5 pl-3">
                                    <Link href="/" class="pl-2 title4 ">
                                        hot girl tram anh noi nhu con lao !!!hot
                                        girl tram anh noi nhu con lao !!hot girl
                                        tram anh noi nhu con lao !!
                                    </Link>
                                    <p class="text-xs pt-2 pb-1">
                                        hot girl tr hot girl tram anh noi nhu
                                        con lao !!!hot girl tram a hot girl tram
                                        anh noi nhu con la hot girl traao !!!hot
                                        girl tram a hot girl tram anh noi nhu
                                        con
                                    </p>
                                    <div class="text-right text-xs">
                                        <Link href="/" class="pl-2 ">
                                            tin ICT
                                        </Link>
                                        <span style={{ marginLeft: "20px" }}>
                                            3 gio truoc
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="grid grid-cols-12 gap-x-4 border-b border-gray-600 py-2"
                                style={{ marginBottom: "36px" }}
                            >
                                <div class="col-span-4">
                                    <Link href="/" class="relative block h-28">
                                        <Image
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            quality={80}
                                            fill
                                            alt="a"
                                            class=" "
                                            src="/images/mark.webp"
                                        />
                                    </Link>
                                </div>
                                <div class="col-span-8 col-start-5pl-3">
                                    <Link href="/" class="pl-2 title4 ">
                                        hot girl tram anh noi nhu con lao !!!hot
                                        girl tram anh noi nhu con lao !!hot girl
                                        tram anh noi nhu con lao !!
                                    </Link>
                                    <p class="text-xs pt-2 pb-1">
                                        hot girl tr hot girl tram anh noi nhu
                                        con lao !!!hot girl tram a hot girl tram
                                        anh noi nhu con la hot girl traao !!!hot
                                        girl tram a hot girl tram anh noi nhu
                                        con
                                    </p>
                                    <div class="text-right text-xs">
                                        <Link href="/" class="pl-2 ">
                                            tin ICT
                                        </Link>
                                        <span style={{ marginLeft: "20px" }}>
                                            3 gio truoc
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class=" bg-blue-700 pl-4 pt-4 pr-1 my-2">
                                <div class="bg-gray-800 grid grid-cols-12 gap-x-4 pt-2 pl-1">
                                    <div class="col-start-1 col-span-4">
                                        <Link
                                            href="/"
                                            class="relative block h-28"
                                        >
                                            <Image
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                quality={80}
                                                fill
                                                alt="a"
                                                class=" "
                                                src="/images/mark.webp"
                                            />
                                        </Link>
                                    </div>
                                    <div
                                        class="col-span-8 col-start-5"
                                        style={{
                                            height: "100%",
                                            padding: "0  0 0 8px",
                                        }}
                                    >
                                        <Link href="/" class="pl-2 title4 ">
                                            hot girl tram anh noi nhu con lao
                                            !!!hot girl tram anh noi nhu con lao
                                            !!hot girl tram anh noi nhu con lao
                                            !!
                                        </Link>

                                        <div class="text-xs text-right">
                                            <Link href="/" class="pl-2  ">
                                                tin ICT
                                            </Link>
                                            <span
                                                style={{
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                3 gio truoc
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class=" grid grid-cols-12 gap-x-4 overflow-auto border-b border-gray-600 py-2">
                                <div class="col-start-1 col-span-4 ">
                                    <Link href="/" class="relative block h-28">
                                        <Image
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            quality={80}
                                            fill
                                            alt="a"
                                            class=" "
                                            src="/images/mark.webp"
                                        />
                                    </Link>
                                </div>
                                <div class="col-start-5 col-span-8 pl-2">
                                    <Link href="/" class="pl-2 title4 ">
                                        hot girl tram anh noi nhu con lao !!!hot
                                        girl tram anh noi nhu con lao !!hot girl
                                        tram anh noi nhu con lao !!
                                    </Link>
                                    <p class="text-content pt-2 pb-1">
                                        hot girl tr hot girl tram anh noi nhu
                                        con lao !!!hot girl tram a hot girl tram
                                        anh noi nhu con la hot girl traao !!!hot
                                        girl tram a hot girl tram anh noi nhu
                                        con
                                    </p>
                                    <div class="text-right text-xs">
                                        <Link href="/" class="pl-2  ">
                                            tin ICT
                                        </Link>
                                        <span style={{ marginLeft: "20px" }}>
                                            3 gio truoc
                                        </span>
                                    </div>
                                </div>
                                <ul class=" pl-5 text-xs col-span-12 leading-none grid grid-cols-2 list-none font-semibold border-t mt-2 border-gray-600 py-2">
                                    <li class="my-2 ">
                                        <Link class="text-red-500  " href="">
                                            &gt;&gt; Giàu cỡ thần tiên tỷ tỷĐặng
                                            Thu Thảo cũng săn đồ bình dân trên
                                            Shein, giá chưa đến 400k mà diện lên
                                            sang chói mắt
                                        </Link>
                                    </li>
                                    <li class="my-2 ">
                                        <Link class="text-red-500 " href="">
                                            &gt;&gt; Giàu cỡ thần tiên tỷ tỷĐặng
                                            Thu Thảo cũng săn đồ bình dân trên
                                            Shein, giá chưa đến 400k mà diện lên
                                            sang chói mắt
                                        </Link>
                                    </li>
                                    <li class="my-2">
                                        <Link class="text-red-500 " href="">
                                            &gt;&gt; Giàu cỡ thần tiên tỷ tỷĐặng
                                            Thu Thảo cũng săn đồ bình dân trên
                                            Shein, giá chưa đến 400k mà diện lên
                                            sang chói mắt
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-span-4 col-start-10">
                            <AdPanelSideBar />
                        </div>
                    </div>
                </section>
            </div>

            <div class=" grid grid-cols-12 gap-4 2xl:px-36 xl:container xl:mx-auto ">
                <div class="col-span-9 ">
                    <div style={{ marginBottom: "36px" }}>
                        <div class=" pt-4 pl-4 pr-1 	bg-blue-700  ">
                            <div class=" pt-2 pl-1	bg-gray-800 grid grid-cols-12 gap-x-4">
                                <Link
                                    href="/"
                                    class="col-span-4 relative h-28 "
                                >
                                    <Image
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        quality={80}
                                        class="  "
                                        alt="Mountains"
                                        fill
                                        style={{
                                            objectFit: "cover", // cover, contain, none
                                        }}
                                        src="/images/mark.webp"
                                    />
                                </Link>
                                <div
                                    class="col-span-8 col-start-5"
                                    style={{ verticalAlign: " top " }}
                                >
                                    <Link href="/" class="pl-2 title4 ">
                                        ashd sadd sdkasd addkjh
                                    </Link>
                                    <div class="text-right text-xs">
                                        <span>100 views</span>
                                        <span style={{ marginLeft: "10px" }}>
                                            3 ngay truoc
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginBottom: "40px" }}>
                        <AdPanel728x90 />
                    </div>
                    <div class="grid grid-cols-12 gap-x-4 border-b border-gray-600 py-2">
                        <div class="col-span-4">
                            <Link href="/" class="relative block h-28">
                                <Image
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    quality={80}
                                    fill
                                    alt="a"
                                    class=" "
                                    src="/images/mark.webp"
                                />
                            </Link>
                        </div>
                        <div
                            class="col-span-8 col-start-5"
                            style={{
                                height: "100%",
                                padding: "0  0 0 8px",
                            }}
                        >
                            <Link href="/" class="pl-2 title4 ">
                                hot girl tram anh noi nhu con lao !!!hot girl
                                tram anh noi nhu con lao !!hot girl tram anh noi
                                nhu con lao !!
                            </Link>
                            <p class="text-xs pt-2 pb-1">
                                hot girl tr hot girl tram anh noi nhu con lao
                                !!!hot girl tram a hot girl tram anh noi nhu con
                                la hot girl traao !!!hot girl tram a hot girl
                                tram anh noi nhu con
                            </p>
                            <div class="text-right text-xs">
                                <Link href="/" class="pl-2 ">
                                    tin ICT
                                </Link>
                                <span style={{ marginLeft: "20px" }}>
                                    3 gio truoc
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        class="overflow-auto clear-both border-b border-gray-600 py-2"
                        style={{ marginBottom: "36px" }}
                    >
                        <div
                            class="float-left w-4/12"
                            style={{ verticalAlign: " top" }}
                        >
                            <Link href="/" class="linkthumb">
                                <Image
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    quality={80}
                                    fill
                                    alt="a"
                                    class=" "
                                    src="/images/mark.webp"
                                />
                            </Link>
                        </div>
                        <div class="float-left w-8/12 pl-3">
                            <Link href="/" class=" title4">
                                hot girl tram anh noi nhu con lao !!!hot girl
                                tram anh noi nhu con lao !!hot girl tram anh noi
                                nhu con lao !!
                            </Link>
                            <p class="text-xs pt-2 pb-1">
                                hot girl tr hot girl tram anh noi nhu con lao
                                !!!hot girl tram a hot girl tram anh noi nhu con
                                la hot girl traao !!!hot girl tram a hot girl
                                tram anh noi nhu con
                            </p>
                            <div class="text-right text-xs">
                                <Link href="/" class="pl-2 ">
                                    tin ICT
                                </Link>
                                <span style={{ marginLeft: "20px" }}>
                                    3 gio truoc
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="overflow-auto clear-both border-b border-gray-600 py-2">
                        <div class="float-left w-4/12">
                            <Link href="/" class="linkthumb">
                                <Image
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    quality={80}
                                    fill
                                    alt="a"
                                    class=" "
                                    src="/images/mark.webp"
                                />
                            </Link>
                        </div>
                        <div class="float-left w-8/12 pl-3">
                            <Link href="/" class="pl-2 title4 ">
                                hot girl tram anh noi nhu con lao !!!hot girl
                                tram anh noi nhu con lao !!hot girl tram anh noi
                                nhu con lao !!
                            </Link>
                            <p class="text-content">
                                hot girl tr hot girl tram anh noi nhu con lao
                                !!!hot girl tram a hot girl tram anh noi nhu con
                                la hot girl traao !!!hot girl tram a hot girl
                                tram anh noi nhu con
                            </p>
                            <div class="text-right text-xs">
                                <Link href="/" class="pl-2 ">
                                    tin ICT
                                </Link>
                                <span style={{ marginLeft: "20px" }}>
                                    3 gio truoc
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="special">
                        <div style={{ marginBottom: " 8px" }}>
                            <h2
                                class="text_decor"
                                style={{ display: "inline" }}
                            >
                                Đề xuất
                            </h2>
                        </div>
                        <div
                            class="grid grid-cols-12 gap-2 "
                            style={{ marginBottom: "36px" }}
                        >
                            <div class="col-span-8">
                                <Link class="relative block h-48" href="/">
                                    <Image
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        quality={80}
                                        fill
                                        alt="a"
                                        class=" "
                                        src="/images/mark.webp"
                                    />

                                    <span class="text-white absolute bottom-0 pb-1 pl-2 title3 z-10 bg-gradient-to-b from-10% from-transparent  to-90% to-gray-900">
                                        hot girl tram anh noi nhu con lao !!!hot
                                        girl tram anh noi nhu con lao !!hot girl
                                        tram anh noi nhu con lao !! -{" "}
                                        <span class="text-xs font-extralight">
                                            3 gio truoc
                                        </span>
                                    </span>
                                </Link>
                                <div>
                                    <p class="text-content">
                                        hot girl tr hot girl tram anh noi nhu
                                        con lao !!!hot girl tram a hot girl tram
                                        anh noi nhu con la hot girl traao !!!hot
                                        girl tram a hot girl tram anh noi nhu
                                        con
                                    </p>
                                </div>
                            </div>
                            <div class="col-span-4">
                                <div>
                                    <Link class="relative block h-24" href="/">
                                        <Image
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            quality={80}
                                            fill
                                            alt="a"
                                            class=" "
                                            src="/images/mark.webp"
                                        />
                                    </Link>
                                    <Link href="/" class="pl-2 title5 ">
                                        hfsdks kfhsklhf snaklh afkn nsafj
                                        asjfwie fsdknf s,f
                                    </Link>
                                </div>
                                <div>
                                    <Link class="relative block h-24" href="/">
                                        <Image
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            quality={80}
                                            fill
                                            alt="a"
                                            class=" "
                                            src="/images/mark.webp"
                                        />
                                    </Link>
                                    <Link href="/" class="pl-2 title5 ">
                                        hfsdks kfhsklhf snaklh afkn nsafj
                                        asjfwie fsdknf s,f
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-2">
                        <div class="col-span-6 grid grid-cols-12 gap-x-2">
                            <h2 class="col-span-12">
                                <Link href="/" class="title3">
                                    BDS
                                </Link>
                            </h2>
                            <div class="col-span-6 col-start-1">
                                <Link class="relative block h-20" href="/">
                                    <Image
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        quality={80}
                                        fill
                                        alt="a"
                                        class=" "
                                        src="/images/mark.webp"
                                    />
                                </Link>
                            </div>
                            <div class="col-span-6 col-start-7">
                                <Link href="/" class="pl-2 title4 ">
                                    hfsdks kfhsklhf snaklh afkn nsafj asjfwie
                                    fsdknf s,f
                                </Link>
                                <Link
                                    href="/"
                                    class="title5"
                                    style={{ display: "block" }}
                                >
                                    adajk sldk daaldj
                                </Link>

                                <Link
                                    href="/"
                                    class="title5"
                                    style={{ display: "block" }}
                                >
                                    ad aajka aaasdaldkaa ldj!!a
                                </Link>
                            </div>
                        </div>
                        <div class="col-span-6 border border-gray-600 p-2">
                            <h2>
                                <Link href="/" class="title3">
                                    BDS
                                </Link>
                            </h2>
                            <div class="grid grid-cols-12 gap-x-2 border-b border-gray-600 pb-2">
                                <Link
                                    class="relative block h-12 col-span-3 col-start-1"
                                    href="/"
                                >
                                    <Image
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        quality={80}
                                        fill
                                        alt="a"
                                        class=" "
                                        src="/images/mark.webp"
                                    />
                                </Link>
                                <Link
                                    href="/"
                                    class="pl-2 title5  col-span-9 col-start-4"
                                    style={{ verticalAlign: "top" }}
                                >
                                    hfsdks kfhsklhf snaklh afkn nsafj asjfwie
                                    fsdknf s,f
                                </Link>
                            </div>
                            <Link
                                href="/"
                                class="title5 block border-b border-gray-600 pb-2"
                            >
                                adajkldkaldj
                            </Link>

                            <Link href="/" class="title5 block ">
                                adajkldkaldja
                            </Link>
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-x-4  border-b border-gray-600 py-2">
                        <Link
                            class="relative block h-24 col-span-4 col-start-1 "
                            href="/"
                        >
                            <Image
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                quality={80}
                                fill
                                alt="a"
                                class=" "
                                src="/images/mark.webp"
                            />
                        </Link>
                        <div class="col-span-4 col-start-5">
                            <Link href="/" class=" title4  ">
                                hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf
                                s,f
                            </Link>
                            <p class="text-content ">
                                hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf
                                s,f hfsdks kfhsklhf snaklh afkn nsafj asjfwie
                                fsdknf s,f
                            </p>
                        </div>
                        <div class="col-start-9 col-span-4">
                            <Link class="mb-0.5 block title5" href={"/"}>
                                aasasdsf sdf sd fsdf sdf sf fsdf{" "}
                            </Link>
                            <Link class="mb-0.5 block title5" href={"/"}>
                                aasasdsf sdf sd fsdf sdf sf fsdf{" "}
                            </Link>
                            <Link class="mb-0.5 block title5" href={"/"}>
                                aasasdsf sdf sd fsdf sdf sf fsdf{" "}
                            </Link>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-x-4  border-b border-gray-600 py-2">
                        <Link
                            class="relative block h-24 col-span-4 col-start-1 "
                            href="/"
                        >
                            <Image
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                quality={80}
                                fill
                                alt="a"
                                class=" "
                                src="/images/mark.webp"
                            />
                        </Link>
                        <div class="col-span-4 col-start-5">
                            <Link href="/" class=" title4  ">
                                hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf
                                s,f
                            </Link>
                            <p class="text-content ">
                                hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf
                                s,f hfsdks kfhsklhf snaklh afkn nsafj asjfwie
                                fsdknf s,f
                            </p>
                        </div>
                        <div class="col-start-9 col-span-4">
                            <Link class="mb-0.5 block title5" href={"/"}>
                                aasasdsf sdf sd fsdf sdf sf fsdf{" "}
                            </Link>
                            <Link class="mb-0.5 block title5" href={"/"}>
                                aasasdsf sdf sd fsdf sdf sf fsdf{" "}
                            </Link>
                            <Link class="mb-0.5 block title5" href={"/"}>
                                aasasdsf sdf sd fsdf sdf sf fsdf{" "}
                            </Link>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-x-4  border-b border-gray-600 py-2">
                        <Link
                            class="relative block h-24 col-span-4 col-start-1 "
                            href="/"
                        >
                            <Image
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                quality={80}
                                fill
                                alt="a"
                                class=" "
                                src="/images/mark.webp"
                            />
                        </Link>
                        <div class="col-span-4 col-start-5">
                            <Link href="/" class=" title4  ">
                                hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf
                                s,f
                            </Link>
                            <p class="text-content ">
                                hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf
                                s,f hfsdks kfhsklhf snaklh afkn nsafj asjfwie
                                fsdknf s,f
                            </p>
                        </div>
                        <div class="col-start-9 col-span-4">
                            <Link class="mb-0.5 block title5" href={"/"}>
                                aasasdsf sdf sd fsdf sdf sf fsdf{" "}
                            </Link>
                            <Link class="mb-0.5 block title5" href={"/"}>
                                aasasdsf sdf sd fsdf sdf sf fsdf{" "}
                            </Link>
                            <Link class="mb-0.5 block title5" href={"/"}>
                                aasasdsf sdf sd fsdf sdf sf fsdf{" "}
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="col-span-4 col-start-10">
                    <HotTags />
                    <AdPanelSideBar />
                </div>
            </div>
        </>
    );
});
