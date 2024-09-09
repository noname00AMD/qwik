// import { Button, Checkbox, label, input type="text" } from "flowbite-react";
import { Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import { component$ } from "@builder.io/qwik";
export default component$(() => {
    return (
        <form class="flex max-w-md flex-col gap-4 mx-auto my-20">
            <div class=" relative block  h-20 w-2/5 mx-auto  mb-10">
                <Image fill src={"/images/logo.png"} alt="a" />
            </div>
            <div>
                <div class="mb-2 block">
                    <label for="email1">"Your email"</label>
                </div>
                <input
                    id="email1"
                    type="email"
                    placeholder="name@flowbite.com"
                    required
                />
            </div>
            <div>
                <div class="mb-2 block">
                    <label for="username">"Your username"</label>
                </div>
                <input
                    id="username"
                    type="email"
                    placeholder="Dau_moi_that_lung_123"
                    required
                />
            </div>
            <div>
                <div class="mb-2 block">
                    <label for="displayname">Your displayname</label>
                </div>
                <input
                    type="text"
                    id="email1"
                    placeholder="Đau mỏi thắt lưng123 "
                    required
                />
            </div>
            <div>
                <div class="mb-2 block">
                    <label for="password1">Your password</label>
                </div>
                <input id="password1" type="password" required />
            </div>
            <div>
                <div class="mb-2 block">
                    <label for="checkpassword1">Verify password</label>
                </div>
                <input id="checkpassword1" type="password" required />
            </div>
            <div class="flex items-center gap-2">
                <input type="checkbox" id="remember" />
                <label for="termservice">
                    Agree
                    <Link class="text-blue-500" href={"/termandservice"}>
                        Term and Service
                    </Link>
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
});
