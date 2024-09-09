
import { Link } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
export default component$(()=> {
  return (

    <form class="flex max-w-md flex-col gap-4 mx-auto my-16">
        <div class=" relative block  h-20 w-2/5 mx-auto  mb-10">
        <Image fill src={"/images/logo.png"} alt="a"/>

        </div>
      <div>
        <div class="mb-2 block">
          <label for="email1" >"Email / Username"</label>
        </div>
        <input id="email1" type="email" placeholder="name@flowbite.com" required />
      </div>
    
   
      <div>
        <div class="mb-2 block">
          <label for="password1" >"Your password"</label>
        </div>
        <input id="password1" type="password" required />
      </div>
    
      <div class="flex items-center gap-2">
        <input type="checkbox" id="remember" />
        <label for="termservice">Agree <Link class="text-blue-500" href={"/termandservice"}>  Term and Service</Link></label>
      </div>
  
      <button type="submit">Submit</button>
    </form>

  );
}
)