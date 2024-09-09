import { Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export default component$(() => {
    return <span class="z-10 absolute">4</span>;
    // load && (
    //     <Swiper
    //         // install Swiper modules
    //         modules={[Navigation, Pagination, Scrollbar, A11y]}
    //         spaceBetween={12}
    //         slidesPerView={1.65}
    //         navigation
    //         pagination={{ clickable: true }}
    //         scrollbar={{ draggable: true }}
    //         onSwiper={(swiper) => console.log(swiper)}
    //         onSlideChange={() => console.log("slide change")}
    //     >
    //         <SwiperSlide>
    //             <Link className="relative h-28 block w-full" href="/">

    //                 <Image
    //                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    //                     fill
    //                     alt="a"
    //                     className=""
    //                     src="/images/mark.webp"
    //                 />
    //             </Link>
    //             <Link href="/" className=" title4">
    //                 hot girl tram anh noi nhu con lao !!!hot
    //             </Link>
    //         </SwiperSlide>
    //         <SwiperSlide>
    //             <Link className="relative h-28 block w-full" href="/">

    //                 <Image
    //                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    //                     fill
    //                     alt="a"
    //                     className=""
    //                     src="/images/mark.webp"
    //                 />
    //             </Link>
    //             <Link href="/" className=" title4">
    //                 hot girl tram anh noi nhu con lao !!!hot
    //             </Link>
    //         </SwiperSlide>
    //         <SwiperSlide>
    //             <Link className="relative h-28 block w-full" href="/">

    //                 <Image
    //                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    //                     fill
    //                     alt="a"
    //                     className=""
    //                     src="/images/mark.webp"
    //                 />
    //             </Link>
    //             <Link href="/" className=" title4">
    //                 hot girl tram anh noi nhu con lao !!!hot
    //             </Link>
    //         </SwiperSlide>

    //     </Swiper>
    //     )
});
