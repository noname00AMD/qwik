import { Link } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
export default component$<any>(({ props }) => {
    return (
        <>
            <div class={"footer grid grid-cols-12 gap-4 p-10   "}>
                <div class={" col-span-4  mt-5"}>
                    <div>
                        <p class={"font-bold text-base "}>Trụ sở hà nội</p>

                        <p>
                            Tầng 21, tòa nhà Center Building, Hapulico Complex,
                            số 1 Nguyễn Huy Tưởng, p. Thanh Xuân Trung, quận
                            Thanh Xuân, Hà Nội. Điện thoại: 024 7309 5555, máy
                            lẻ 370.
                        </p>
                        <Link
                            rel="nofollow"
                            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d931.2056353845325!2d105.80772655513327!3d20.999749453353736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac9788f39f1d%3A0xfe0d7beb1d82d125!2zSGFwdWxpY28gQ29tcGxleCwgVGhhbmggWHXDom4gVHJ1bmcsIFRoYW5oIFh1w6JuLCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1434096825076"
                            title="Xem bản đồ"
                        >
                            xem bản đồ
                        </Link>
                    </div>

                    <div>
                        <p class={"font-bold text-base"}>Quan he doi tac</p>
                        <Link class="block" href={"/"}>
                            wordpress Blog
                        </Link>
                        <Link class="block" href={"/"}>
                            wordpress Blog
                        </Link>
                        <Link class="block" href={"/"}>
                            wordpress Blog
                        </Link>
                        <Link class="block" href={"/"}>
                            wordpress Blog
                        </Link>
                    </div>
                </div>
                <div class={" col-span-4 " + "style.contact"}>
                    <div>
                        <p class={"font-bold text-base"}>
                            Chịu trách nhiệm quản lý nội dung
                        </p>
                        <p>Bà Nguyễn Bích Minh</p>
                    </div>
                    <div>
                        <p class={"font-bold text-base"}>
                            Hợp tác truyền thông
                        </p>
                        <p>024.73095555 (máy lẻ 62.370)</p>
                        <Link rel="nofollow" href="mailto:marketing@kenh14.vn">
                            marketing@kenh14.vn
                        </Link>
                    </div>
                    <div>
                        <p class={"font-bold text-base"}>
                            Liên hệ quảng cáo
                        </p>
                        <p>0942 86 11 33</p>
                        <Link
                            rel="nofollow"
                            href="mailto:giaitrixahoi@admicro.vn"
                        >
                            giaitrixahoi@admicro.vn
                        </Link>
                        <Link
                            rel="nofollow"
                            href="https://www.messenger.com/t/K14vn"
                            title="Xem chi tiết"
                            target="_blank"
                        >
                            <span></span>Chat với tư vấn viên
                        </Link>
                        <Link
                            rel="nofollow"
                            href="/adv.chn"
                            title="Xem chi tiết"
                            target="_blank"
                        >
                            xem chi tiết
                        </Link>
                    </div>
                    <div>
                        <p>
                            <Link
                                rel="nofollow"
                                target="_blank"
                                href="https://kenh14.vn/static/chinh-sach-bao-mat.htm"
                            >
                                Chính sách bảo mật
                            </Link>
                        </p>
                    </div>
                    <div>
                        <p class={"font-bold text-base"}>Link Lien ket</p>
                        <Link class="block" href={"/"}>
                            wordpress Blog
                        </Link>
                        <Link class="block" href={"/"}>
                            wordpress Blog
                        </Link>
                        <Link class="block" href={"/"}>
                            wordpress Blog
                        </Link>
                        <Link class="block" href={"/"}>
                            wordpress Blog
                        </Link>
                    </div>
                </div>
                <div class={` col-span-4  ` + "style.about"}>
                    <div class={"style.logo"}>
                        <Image
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            width={120}
                            height={60}
                            style={{ padding: "30px 0 10px" }}
                            alt="adsad"
                            src={"/images/logo.png"}
                        />
                    </div>
                    <p class={"font-bold text-base"}>
                        {" "}
                        © Copyright 2007 - 2021 – CÔNG TY CỔ PHẦN VCCORP
                    </p>
                    <p>
                        {" "}
                        Tầng 17, 19, 20, 21 Tòa nhà Center Building - Hapulico
                        Complex, Số 1 Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội.
                    </p>
                    <p>
                        {" "}
                        Giấy phép số 2215/GP-TTĐT do Sở Thông tin và Truyền
                        thông Hà Nội cấp ngày 10 tháng 4 năm 2019
                    </p>
                </div>
            </div>
        </>
    );
});
