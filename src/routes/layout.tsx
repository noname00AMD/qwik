import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import Header from '~/components/Header.jsx';
import Footer from '~/components/starter/footer/footer';

// import styles from './styles.css?inline';
import categoryM from "../../model/category"
import siteInfoM from '../../model/siteInfo';


export const useGetUser = routeLoader$(async () => {
  var siteInfo = await siteInfoM.getAll()
  var categories = await categoryM.getAll()
  return {
    siteInfo,
    categories
  }
})

export default component$(() => {
  const props = useGetUser().value
  console.log(props.categories);

  return (
    <>
      <Header siteInfo={...props.siteInfo} categories={...props.categories} />
      <main>
        <Slot siteInfo={...props.siteInfo} categories={...props.categories} />
      </main>
      <Footer />
    </>
  );
});
