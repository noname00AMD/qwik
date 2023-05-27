import { Link } from '@builder.io/qwik-city'
import { Image } from '@unpic/qwik';
import HotTags from "./HotTags";
import AdPanelSideBar from "./AdPanelSideBar";
import AdPanel728x90 from "./AdPanel728x90";
import TopAds from "./TopAds";

// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import style from "../sass/HomeBody.module.sass"
// import 'swiper/css/bundle';
import { component$ } from "@builder.io/qwik"
export default component$((props) => {
    return (
        <>
            <div class={"cont " + style.home_body}>
                <div class={"row"} >
                    <div class={"col-12"}>
                        <TopAds />
                    </div>
                </div>
                <section style={{ marginBottom: "88px" }} >
                    <div class={"row"} style={{ marginBottom: "40px" }}>
                        <div class={"col-xl-9"} style={{ backgroundColor: "#fff", padding: "8px", boxShadow: "1px 2px 5px rgba(0, 0, 0, .15)" }} >
                            <div class={"row"}>
                                <div class={"col-8 "} style={{}}>
                                    <div class={"row"} style={{ marginBottom: "30px" }}>
                                        <div class={"col-12"}>
                                            <div style={{ width: "100%" }}>
                                                <div style={{ marginBottom: "4px" }}>
                                                    <Link href={"/"} style={{ width: "100%", height: "340px", position: "relative", display: "block", overflow: "hidden" }}>
                                                        <Image alt="a" class={style.border + " " + style.zoom} fill sizes="(max-width: 768px) 100vw,  (max-width: 1200px) 50vw,33vw" src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                                    </Link>
                                                </div>
                                                <Link href={"/"}
                                                    class={style.title} style={{ display: "inline-block", marginBottom: "5px" }} >
                                                    hot girl Trâm Anh nổi như cồn lào  !!hot girl tram anh noi nhu con lao !!

                                                </Link>
                                                <p class='text' >Chỉ còn chưa đầy một ngày nữa kỳ thi tuyển sinh vào lớp 10 THPT ở Hà Nội sẽ chính thức diễn ra, nhiều phụ huynh cùng sĩ tử đã đến Văn Miếu - Quốc Tử Giám cầu may mắn.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class={"row"}>
                                        <div class={"col-12"} style={{ borderRadius: "4px", overflow: "hidden" }}>
                                            {/* <Swiper
                                                spaceBetween={2}
                                                loop={true}
                                                loopFillGroupWithBlank={false}
                                                onSlideChange={() => null}
                                                onSwiper={(swiper) => null}
                                                modules={[Navigation, Pagination]}
                                                navigation={{
                                                    nextEl: ".next",
                                                }}
                                                pagination={{
                                                    el: ".pagi",
                                                    renderBullet: function (index, class) {
                                                        return '<span style=height:6px;width:18px;border-radius:0;background-color:green class="' + class + '"></span>';
                                                    }
                                                }}
                                            >
                                        <SwiperSlide>
                                            <div >
                                                <div style={{ width: "46%", display: "inline-block" }}>
                                                    <Link href={"/"} style={{ width: "100%", height: "160px", position: "relative", display: "block" }}>
                                                        <Image alt="a" style={{}} class={style.border} fill sizes="(max-width: 768px) 100vw,              (max-width: 1200px) 50vw,              33vw" src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                                    </Link>
                                                </div>
                                                <div style={{ paddingLeft: "4px", width: "54%", display: "inline-block", verticalAlign: "top" }}>
                                                    <Link href={"/"}
                                                        style={{}} class={style.title2} >ahot girl ot girff fffff fffff ffffff fffff !!
                                                    </Link>
                                                    <span style={{ fontSize: "13px", color: "#777" }}>- 4 gio truoc</span>

                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div >
                                                <div style={{ width: "46%", display: "inline-block" }}>
                                                    <Link href={"/"} style={{ width: "100%", height: "160px", position: "relative", display: "block" }}>

                                                        <Image alt="a" style={{}} class={style.border} fill sizes="(max-width: 768px) 100vw,              (max-width: 1200px) 50vw,              33vw" src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                                    </Link>
                                                </div>
                                                <div style={{ paddingLeft: "4px", width: "54%", display: "inline-block", verticalAlign: "top" }}>
                                                    <Link href={"/"}
                                                        style={{}} class={style.title2} >ahot girl ot girff fffff fffff ffffff fffff !!
                                                    </Link>
                                                    <span style={{ fontSize: "13px", color: "#777" }}>- 4 gio truoc</span>

                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <div class="pagi" style={{
                                            textAlign: "right",
                                            position: "absolute",
                                            bottom: "1px"
                                        }}></div>
                                        <div style={{
                                            position: "absolute",
                                            width: "5%",
                                            height: "60%",
                                            zIndex: "10",
                                            cursor: "pointer",
                                            right: "0",
                                            top: "calc(100% - 80%)",
                                        }} class='next'>
                                            <div style={{
                                                position: "relative",
                                                height: "100%"
                                            }}>
                                                <span style={{
                                                    position: "absolute",
                                                    top: "calc(50% - 2px)",
                                                    border: "solid black",
                                                    borderWidth: "0 4px 4px 0",
                                                    display: "inline-block",
                                                    padding: "6px",
                                                    transform: "rotate(-45deg)",

                                                }}></span>
                                            </div>
                                        </div>
                                    </Swiper> */}

                                        </div>
                                    </div>
                                </div>
                                <div class="col-4 " >
                                    <ul >
                                        <li style={{ marginBottom: "10px" }}>
                                            <Link href={"/"} style={{ width: "100%", height: "180px", position: "relative", display: "block" }}>
                                                <Image alt="a" class={style.border} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,  33vw" src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                            </Link>
                                            <Link href={"/"}
                                                class={style.title2} style={{ padding: "0 8px" }}>
                                                t girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!

                                            </Link>
                                            <p style={{ padding: "0 8px" }}>t girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!t girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!</p>
                                        </li>
                                        {/* ------------------------------------- */}
                                        <li style={{ marginBottom: "8px" }}>
                                            <Link href={"/"}
                                                style={{ verticalAlign: "top", display: "inline-block", width: "40%", height: "68px", position: "relative" }}>
                                                <Image alt="a" class={style.border} fill sizes="(max-width: 768px) 100vw,        (max-width: 1200px) 50vw,              33vw" src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                            </Link>
                                            <Link href={"/"}
                                                class={style.title4} style={{ display: "inline-block", width: "60%", padding: "0 6px" }}>
                                                hot girl tram anh noi nhu con lao !!

                                            </Link>
                                        </li>
                                        <li style={{ marginBottom: "8px" }}>
                                            <Link href={"/"}
                                                style={{ verticalAlign: "top", display: "inline-block", width: "40%", height: "68px", position: "relative" }}>
                                                <Image alt="a" class={style.border} fill sizes="(max-width: 768px) 100vw,              (max-width: 1200px) 50vw,              33vw" src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                            </Link>
                                            <Link href={"/"}
                                                class={style.title4} style={{ display: "inline-block", width: "60%", padding: "0 6px" }}>
                                                hot girl tram anh noi nhu con lao !!

                                            </Link>
                                        </li>
                                        <li style={{ marginBottom: "8px" }}>
                                            <Link href={"/"}
                                                style={{ verticalAlign: "top", display: "inline-block", width: "40%", height: "68px", position: "relative" }}>
                                                <Image alt="a" class={style.border} fill sizes="(max-width: 768px) 100vw,              (max-width: 1200px) 50vw,              33vw" src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                            </Link>
                                            <Link href={"/"}
                                                class={style.title4} style={{ display: "inline-block", width: "60%", padding: "0 6px" }}>
                                                hot girl tram anh noi nhu con lao !!

                                            </Link>
                                        </li>


                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 start-10 d-lg-none">
                            <AdPanelSideBar />
                        </div>

                        <div>
                            <div style={{ marginBottom: "18px" }} >
                                <h2 style={{ display: "inline" }} class="text_decor title2">Đáng chú ý :</h2>
                            </div>
                            <ul class={"row"} >
                                <li class={"col-3"}>
                                    <Link href={"/"}
                                        style={{ display: "inline-block", width: "100%", height: "168px", position: "relative" }}>
                                        <Image alt="a" class={style.border} fill sizes="(max-width: 768px) 100vw,              (max-width: 1200px) 50vw,              33vw" src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                    </Link>
                                    <Link href={"/"}
                                        class={style.title3} style={{ display: "inline-block", width: "100%", padding: "0  0 0 8px" }}>
                                        hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!

                                    </Link>
                                </li>
                                <li class={"col-3"}>
                                    <Link href={"/"}
                                        style={{ display: "inline-block", width: "100%", height: "168px", position: "relative" }}>
                                        <Image alt="a" class={style.border} fill sizes="(max-width: 768px) 100vw,              (max-width: 1200px) 50vw,              33vw" src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                    </Link>
                                    <Link href={"/"}
                                        class={style.title3} style={{ display: "inline-block", width: "100%", padding: "0  0 0 8px" }}>
                                        hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!

                                    </Link>
                                </li>
                                <li class={"col-3"}>
                                    <Link href={"/"}
                                        style={{ display: "inline-block", width: "100%", height: "168px", position: "relative" }}>
                                        <Image alt="a" class={style.border} fill sizes="(max-width: 768px) 100vw,              (max-width: 1200px) 50vw,              33vw" src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                    </Link>
                                    <Link href={"/"}
                                        class={style.title3} style={{ display: "inline-block", width: "100%", padding: "0  0 0 8px" }}>
                                        hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!

                                    </Link>
                                </li>
                                <li class={"col-3"}>
                                    <Link href={"/"}
                                        style={{ display: "inline-block", width: "100%", height: "168px", position: "relative" }}>
                                        <Image alt="a" class={style.border} fill sizes="(max-width: 768px) 100vw,              (max-width: 1200px) 50vw,              33vw" src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                    </Link>
                                    <Link href={"/"}
                                        class={style.title3} style={{ display: "inline-block", width: "100%", padding: "0  0 0 8px" }}>
                                        hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!

                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </section >
                <section >
                    <div class={"row"} style={{ marginBottom: "40px" }}>
                        <div class={"col-8 "}>
                            <div style={{ marginBottom: "36px" }}>
                                <div style={{ verticalAlign: "top", display: "inline-block", width: "36%" }}>
                                    <Link href={"/"}
                                        style={{ width: "100%", height: "100%" }}>
                                        <Image alt="a" class={style.border} width={290} height={268} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                    </Link>
                                </div>
                                <div style={{ height: "100%", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                    <Link href={"/"}
                                        style={{ paddingBottom: "10px" }} class={style.title3}>
                                        hot2 girl2 tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!

                                    </Link>
                                    <p style={{ marginBottom: "5px" }}>
                                        hot girl tr hot girl tram anh noi nhu con lao
                                        !!!hot girl tram a hot girl tram anh noi nhu con la
                                        hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                    </p>
                                    <div style={{ textAlign: "right" }}>
                                        <Link href={"/"}
                                            class={style.title3} >tin ICT
                                        </Link>
                                        <span style={{ marginLeft: "20px" }}>
                                            3 gio truoc
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class='lagre' style={{ marginBottom: "36px" }}>
                                <div style={{ verticalAlign: "top", display: "inline-block", width: "36%" }}>
                                    <Link href={"/"}
                                        style={{ width: "100%", height: "100%" }}>
                                        <Image alt="a" class={style.border} width={260} height={298} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                    </Link>
                                </div>
                                <div style={{ height: "100%", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                    <Link href={"/"}
                                        class={style.title3} >
                                        hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!

                                    </Link>
                                    <p style={{ paddingTop: "10px", marginBottom: "5px" }}>
                                        hot girl tr hot girl tram anh noi nhu con lao
                                        !!!hot girl tram a hot girl tram anh noi nhu con la
                                        hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                    </p>
                                    <div style={{ textAlign: "right" }}>
                                        <Link href={"#"}
                                            class={style.title3} >tin ICT
                                        </Link>
                                        <span style={{ marginLeft: "20px" }}>
                                            3 gio truoc
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="ads" style={{ marginBottom: "40px" }}>
                                <AdPanel728x90 />
                            </div>
                            <div style={{ marginBottom: "36px" }}>
                                <div style={{ verticalAlign: "top", display: "inline-block", width: "36%" }}>
                                    <Link href={"/"}
                                        style={{ width: "100%", height: "100%" }}>
                                        <Image alt="a" class={style.border} width={290} height={268} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                    </Link>
                                </div>
                                <div style={{ height: "100%", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                    <Link href={"/"}
                                        class={style.title3}>
                                        hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!

                                    </Link>
                                    <p style={{ paddingTop: "10px", marginBottom: "5px" }}>
                                        hot girl tr hot girl tram anh noi nhu con lao
                                        !!!hot girl tram a hot girl tram anh noi nhu con la
                                        hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                    </p>
                                    <div style={{ textAlign: "right" }}>
                                        <Link href={"#"}
                                            class={style.title3}>tin ICT
                                        </Link>
                                        <span style={{ marginLeft: "20px" }}>
                                            3 gio truoc
                                        </span>
                                    </div>
                                </div>
                            </div> <div style={{ marginBottom: "36px" }}>
                                <div style={{ verticalAlign: "top", display: "inline-block", width: "36%" }}>
                                    <Link href={"/"}
                                        style={{ width: "100%", height: "100%" }}>
                                        <Image alt="a" class={style.border} width={290} height={268} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                    </Link>
                                </div>
                                <div style={{ height: "100%", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                    <Link href={"/"}
                                        class={style.title3}>
                                        hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!

                                    </Link>
                                    <p style={{ paddingTop: "10px", marginBottom: "5px" }}>
                                        hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                    </p>
                                    <div style={{ textAlign: "right" }}>
                                        <Link href={"#"}
                                            class={style.title3}>tin ICT
                                        </Link>
                                        <span style={{ marginLeft: "20px" }}>
                                            3 gio truoc
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class={"special"} style={{ marginBottom: "36px", padding: "24px" }}>
                                <div style={{ verticalAlign: "top", display: "inline-block", width: "36%" }}>
                                    <Link href={"/"}
                                        style={{ width: "100%", height: "100%" }}>

                                        <Image alt="a" class={style.border} width={290} height={268} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                    </Link>
                                </div>
                                <div style={{ height: "100%", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                    <Link href={"/"}
                                        class={style.title3}>
                                        hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!

                                    </Link>
                                    <p style={{ paddingTop: "10px", marginBottom: "5px" }}>

                                        hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                    </p>
                                    <div style={{ textAlign: "right" }}>
                                        <Link href={"#"}
                                            class={style.title3} >tin ICT
                                        </Link>
                                        <span style={{ marginLeft: "20px" }}>
                                            3 gio truoc
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class='lagre' style={{ marginBottom: "36px" }}>
                                <div style={{ verticalAlign: "top", display: "inline-block", width: "36%" }}>
                                    <Link href={"/"}
                                        style={{ width: "100%", height: "100%" }}>
                                        <Image alt="a" class={style.border} width={260} height={298} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                    </Link>
                                </div>
                                <div style={{ height: "100%", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                    <Link href={"/"}
                                        class={style.title3}>
                                        hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!

                                    </Link>
                                    <p style={{ paddingTop: "10px", marginBottom: "5px" }}>
                                        hot girl tr hot girl tram anh noi nhu con lao
                                        !!!hot girl tram a hot girl tram anh noi nhu con la
                                        hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                    </p>
                                    <div style={{ textAlign: "right" }}>
                                        <Link href={"#"}
                                            class={style.title3}>tin ICT
                                        </Link>
                                        <span style={{ marginLeft: "20px" }}>
                                            3 gio truoc
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class={"col-4 start-9 d-md-none"}>
                            <AdPanelSideBar />
                        </div>
                    </div>
                    <div class={"row"}>
                        <div class={"col-8"}>
                            {/* --/-------------------------- */}
                            <div style={{ marginBottom: "36px" }}>
                                <ul >
                                    <li class={"special"} style={{ padding: "24px" }}>
                                        <Link href={"/"}
                                            style={{ display: "inline-block", width: "36%" }}>
                                            <Image alt="a" class={style.border} width={290} height={268} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png"></Image>

                                        </Link>
                                        <div style={{ verticalAlign: "top", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                            <Link href={"/"}
                                                class={style.title3}>
                                                ashd saddasdkasd addkjh

                                            </Link>
                                            <div style={{ textAlign: "right" }}>
                                                <span>
                                                    100 views
                                                </span>
                                                <span style={{ marginLeft: "10px" }}>
                                                    3 ngay truoc
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class={"special"} style={{ padding: "24px" }}>
                                        <Link href={"/"}
                                            style={{ display: "inline-block", width: "36%" }}>
                                            <Image alt="a" class={style.border} width={290} height={268} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png"></Image>

                                        </Link>
                                        <div style={{ verticalAlign: "top", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                            <Link href={"/"}
                                                class={style.title3}>
                                                ashd saddasdkasd addkjh

                                            </Link>
                                            <div style={{ textAlign: "right" }}>
                                                <span>
                                                    100 views
                                                </span>
                                                <span style={{ marginLeft: "10px" }}>
                                                    3 ngay truoc
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class={"special"} style={{ padding: "24px" }}>
                                        <Link href={"/"}
                                            style={{ display: "inline-block", width: "36%" }}>
                                            <Image alt="a" class={style.border} width={290} height={268} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png"></Image>

                                        </Link>
                                        <div style={{ verticalAlign: "top", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                            <Link href={"/"}
                                                class={style.title3}>
                                                ashd saddasdkasd addkjh

                                            </Link>
                                            <div style={{ textAlign: "right" }}>
                                                <span>
                                                    100 views
                                                </span>
                                                <span style={{ marginLeft: "10px" }}>
                                                    3 ngay truoc
                                                </span>
                                            </div>
                                        </div>
                                    </li >

                                </ul >
                            </div >
                            <div style={{ marginBottom: "40px" }}>
                                <AdPanel728x90 />
                            </div>
                            <div style={{ marginBottom: "36px" }}>
                                <div style={{ verticalAlign: "top", display: "inline-block", width: "36%" }}>
                                    <Link href={"/"}
                                        style={{ width: "100%", height: "100%" }}>
                                        <Image alt="a" class={style.border} width={290} height={268} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                    </Link>
                                </div>
                                <div style={{ height: "100%", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                    <Link href={"/"}
                                        class={style.title3} >
                                        hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!

                                    </Link>
                                    <p style={{ paddingTop: "10px", marginBottom: "5px" }}>
                                        hot girl tr hot girl tram anh noi nhu con lao
                                        !!!hot girl tram a hot girl tram anh noi nhu con la
                                        hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                    </p>
                                    <div style={{ textAlign: "right" }}>
                                        <Link href={"#"}
                                            class={style.title3} >tin ICT
                                        </Link>
                                        <span style={{ marginLeft: "20px" }}>
                                            3 gio truoc
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginBottom: "36px" }}>
                                <div style={{ verticalAlign: "top", display: "inline-block", width: "36%" }}>
                                    <Link href={"/"}
                                        style={{ width: "100%", height: "100%" }}>
                                        <Image alt="a" class={style.border} width={290} height={268} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                    </Link>
                                </div>
                                <div style={{ height: "100%", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                    <Link href={"/"}
                                        class={style.title3} >
                                        hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!

                                    </Link>
                                    <p style={{ paddingTop: "10px", marginBottom: "5px" }}>
                                        hot girl tr hot girl tram anh noi nhu con lao
                                        !!!hot girl tram a hot girl tram anh noi nhu con la
                                        hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                    </p>
                                    <div style={{ textAlign: "right" }}>
                                        <Link href={"#"}
                                            class={style.title3} >tin ICT
                                        </Link>
                                        <span style={{ marginLeft: "20px" }}>
                                            3 gio truoc
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginBottom: "36px" }}>
                                <div style={{ verticalAlign: "top", display: "inline-block", width: "36%" }}>
                                    <Link href={"/"}
                                        style={{ width: "100%", height: "100%" }}>
                                        <Image alt="a" class={style.border} width={290} height={268} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                    </Link>
                                </div>
                                <div style={{ height: "100%", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                    <Link href={"/"}
                                        class={style.title3} >
                                        hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!

                                    </Link>
                                    <p style={{ paddingTop: "10px", marginBottom: "5px" }}>
                                        hot girl tr hot girl tram anh noi nhu con lao
                                        !!!hot girl tram a hot girl tram anh noi nhu con la
                                        hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                    </p>
                                    <div style={{ textAlign: "right" }}>
                                        <Link href={"#"}
                                            class={style.title3} >tin ICT
                                        </Link>
                                        <span style={{ marginLeft: "20px" }}>
                                            3 gio truoc
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{ marginBottom: "8px" }}>
                                    <h2 class=
                                        "text_decor" style={{ display: " inline" }}>
                                        Đề xuất
                                    </h2>
                                </div>
                                <div class='row' style={{ marginBottom: "36px" }}>
                                    <div class='col-8' >
                                        <Link href={"/"}
                                            style={{ width: "100%", height: "100%" }}>
                                            <Image alt="a" class={style.border} width={230} height={268} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                        </Link>
                                        <div style={{ height: "100%", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                            <Link href={"/"}
                                                class={style.title3} >
                                                hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!

                                            </Link>
                                            <p style={{ paddingTop: "10px", marginBottom: "5px" }}>
                                                hot girl tr hot girl tram anh noi nhu con lao
                                                !!!hot girl tram a hot girl tram anh noi nhu con la
                                                hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                            </p>
                                            <div style={{ textAlign: "right" }}>
                                                <Link href={"#"}
                                                    class={style.title3} >tin ICT
                                                </Link>
                                                <span style={{ marginLeft: "20px" }}>
                                                    3 gio truoc
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div>
                                            <Link href={"/"}
                                                style={{ display: "inline-block", width: "100%" }}>
                                                <Image alt="a" class={style.border} width={230} height={268} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                            </Link>
                                            <Link href={"/"}
                                                class={style.title3} style={{ verticalAlign: "top" }}> hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf s,f
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href={"/"}
                                                style={{ display: "inline-block", width: "100%" }}>
                                                <Image alt="a" class={style.border} width={230} height={268} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                            </Link>
                                            <Link href={"/"}
                                                class={style.title3} style={{ verticalAlign: "top" }}> hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf s,f
                                            </Link>
                                        </div>
                                    </div >
                                </div >
                            </div >
                            <div class={"row"}>
                                <div class="col-6">
                                    <h2>
                                        <Link href={"/"}
                                            class='title2'>BDS
                                        </Link>
                                    </h2>
                                    <div>
                                        <Link href={"/"}
                                            style={{ display: "inline-block", width: "100%" }}>
                                            <Image alt="a" class={style.border} width={290} height={268} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                        </Link>
                                        <Link href={'/'}
                                            class={style.title3} style={{ verticalAlign: "top" }}> hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf s,f
                                        </Link>
                                    </div>
                                    <Link href={"/"}
                                        class={style.title4} style={{ display: "block" }} > adajk  sldk daaldj
                                    </Link>

                                    <Link href={"/"}
                                        class={style.title4} style={{ display: "block" }}  >ad aajka aaasdaldkaa ldj!!
                                    </Link >
                                </div >
                                <div class="col-6">
                                    <h2>
                                        <Link href={"/"}
                                            class={style.title2}  >BDS
                                        </Link>
                                    </h2>
                                    <div>
                                        <Link href={"/"}
                                            style={{ display: "inline-block", width: "100%" }}>
                                            <Image alt="a" class={style.border} width={290} height={268} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                        </Link>
                                        <Link href={"/"}
                                            class={style.title3} style={{ verticalAlign: "top" }}> hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf s,f
                                        </Link>
                                    </div>
                                    <Link href={"/"}
                                        class={style.title4} style={{ display: "block" }}  >adajkldkaldj
                                    </Link >

                                    <Link href={"/"}
                                        class={style.title4} style={{ display: " block" }}   >adajkldkaldj
                                    </Link >
                                </div >
                            </div >adajkldkaldj
                            <div class={"row"}>
                                <div class="col-6">
                                    <h2>
                                        <Link href={"/"}
                                            class={style.title2}  >BDS
                                        </Link>
                                    </h2>
                                    <div>
                                        <Link href={"/"}
                                            style={{ display: "inline-block", width: "100%" }}>
                                            <Image alt="a" class={style.border} width={1} height={1.25} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                        </Link>
                                        <Link href={"/"}
                                            class={style.title3} style={{ verticalAlign: "top" }}> hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf s,f
                                        </Link>
                                    </div>
                                    <Link href={"/"}
                                        class={style.title4} style={{ display: "block" }}  >adajkldkaldj
                                    </Link>

                                    <Link href={"/"}
                                        class={style.title4} style={{ display: "block" }}  >adajkldkaldj
                                    </Link >
                                </div >
                                <div class="col-6">
                                    <h2>
                                        <Link href={"/"}
                                            class={style.title2}  >BDS
                                        </Link>
                                    </h2>
                                    <div>
                                        <Link href={"/"}
                                            style={{ display: "inline-block", width: "100%" }}>
                                            <Image alt="a" class={style.border} width={1} height={1.25} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                        </Link>
                                        <Link href={"/"}
                                            class={style.title3} style={{ verticalAlign: "top" }}> hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf s,f
                                        </Link>
                                    </div>
                                    <Link href={"/"}
                                        class={style.title4} style={{ display: "block" }}  >adajkldkaldj
                                    </Link >

                                    <Link href={"/"}
                                        class={style.title4} style={{ display: " block" }}   >adajkldkaldj
                                    </Link >
                                </div >
                            </div >
                            <div class={"row"}>
                                <div class={"special col-6"} >
                                    <h2>
                                        <Link href={"/"}
                                            class={style.title2}  >BDS
                                        </Link>
                                    </h2>
                                    <div>
                                        <Link href={"/"}
                                            style={{ display: "inline-block", width: "100%" }}>
                                            <Image alt="a" class={style.border} width={290} height={268} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                        </Link>
                                        <Link href={"/"}
                                            class={style.title3} style={{ verticalAlign: "top" }}> hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf s,f
                                        </Link>
                                    </div>
                                    <Link href={"/"}
                                        class={style.title4} style={{ display: "block" }}  >adajkldkaldj
                                    </Link>

                                    <Link href={"/"}
                                        class={style.title4} style={{ display: "block" }}  >adajkldkaldj
                                    </Link >
                                </div >
                                <div class="col-6">
                                    <h2>
                                        <Link href={"/"}
                                            class={style.title2} >BDS
                                        </Link>
                                    </h2>
                                    <div>
                                        <Link href={"/"}
                                            style={{ display: "inline-block", width: "100%" }}>
                                            <Image alt="a" class={style.border} width={290} height={268} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                        </Link>
                                        <Link href={"/"}
                                            class={style.title3} style={{ verticalAlign: "top" }}> hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf s,f
                                        </Link>
                                    </div>
                                    <Link href={"/"}
                                        class={style.title4} style={{ display: "block" }}  >adajkldkaldj
                                    </Link >

                                    <Link href={"/"}
                                        class={style.title4} style={{ display: " block" }}   >adajkldkaldj
                                    </Link >
                                </div >
                            </div >
                            <div class={"row"} style={{ marginBottom: "36px" }}>
                                <div class={"special col-4"} >
                                    <h2>
                                        <Link href={"/"}
                                            class={style.title2}>BDS
                                        </Link>
                                    </h2>
                                    <div>
                                        <Link href={"/"}
                                            style={{ display: "inline-block", width: "100%" }}>
                                            <Image alt="a" class={style.border} width={290} height={268} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                        </Link>
                                        <Link href={"/"}
                                            class={style.title3} style={{ verticalAlign: "top" }}> hfsdks kfhsklhfwie fsdknf s,f
                                        </Link>
                                        <span style={{ fontSize: "13px", color: "#777" }}>4 gio truoc</span>
                                    </div>
                                    <Link href={"/"}
                                        class={style.title4} style={{ display: "block" }}  >adajkldkaldj
                                    </Link>

                                    <Link href={"/"}
                                        class={style.title4} style={{ display: "block" }}  >adajkldkaldj
                                    </Link >
                                </div >
                                <div class="col-4">
                                    <h2>
                                        <Link href={"/"}
                                        >BDS
                                        </Link>
                                    </h2>
                                    <div>
                                        <Link href={"/"}
                                            style={{ display: "inline-block", width: "100%" }}>
                                            <Image alt="a" class={style.border} width={290} height={268} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                        </Link>
                                        <Link href={"/"}
                                            class={style.title3} style={{ verticalAlign: "top" }}> hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf s,f
                                        </Link>
                                        <span style={{ fontSize: "13px", color: "#777" }}>4 gio truoc</span>

                                    </div>
                                    <Link href={"/"}
                                        class={style.title4} style={{ display: "block" }}  >adajkldkaldj
                                    </Link >

                                    <Link href={"/"}
                                        class={style.title4} style={{ display: " block" }}   >adajkldkaldj
                                    </Link >
                                </div >
                                <div class="col-4">
                                    <h2>
                                        <Link href={"/"}
                                            class={style.title2}  >BDS
                                        </Link>
                                    </h2>
                                    <div>
                                        <Link href={"/"}
                                            style={{ display: "inline-block", width: "100%" }}>
                                            <Image alt="a" class={style.border} width={290} height={268} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />

                                        </Link>
                                        <Link href={"/"}
                                            class={style.title3} style={{ verticalAlign: "top" }}> hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf s,f
                                        </Link>
                                        <span style={{ fontSize: "13px", color: "#777" }}>- 4 gio truoc</span>

                                    </div>
                                    <Link href={"/"}
                                        class={style.title4} style={{ display: "block" }}  >adajkldkaldj
                                    </Link >

                                    <Link href={"/"}
                                        class={style.title4} style={{ display: " block" }}   >adajkldkaldj
                                    </Link >
                                </div >
                            </div >
                        </div >
                        <div class="col-4">
                            <HotTags hotTags={props.hotTags} />
                            <AdPanelSideBar />
                        </div >


                    </div >
                </section >
            </div >
        </>
    )
})
