// import Head from "next/head"
// export default function TwitterMeta({ children, props }) {
//     return (
//         <>
//             <Head>
//                   {/* constant text of twitter  */}
//                 <meta name="twitter:card" content="summary_large_image" />
//                 <meta property="twitter:title" content={props.title} />
//                 {/* <meta property="twitter:description" content={props.site_info.description} /> */}
//                 <meta property="twitter:site" content={process.env.TWITTER_USER} />
//                 {/* <meta property="twitter:image" content={props.site_info.thumb_img} /> */}
//                 <meta property="twitter:url" content={props.url} />
//             </Head>
//         </>
//     )
// }
// import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

export const useJoke = routeLoader$(async (requestEvent) => {
    // Fetch a joke from a public API
    const jokeId = requestEvent.params.jokeId;
    const response = await fetch(`https://api.chucknorris.io/jokes/${jokeId}`);
    const joke = await response.json();
    return joke;
  });
   
export const head = ({resolveValue, params}) => {
    const joke = resolveValue(useJoke);
    return {
      title: `Joke "${joke.title}"`,
      meta: [
        {
          name: 'description',
          content: joke.text,
        },
        {
          name: 'id',
          content: params.jokeId,
        },
      ],
    };
  };