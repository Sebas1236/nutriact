import getCurrentUser from "../actions/getCurrentUser";
import getFavorites from "../actions/getFavorites";
import getFoods from "../actions/getFoods";
import ClientOnly from "../components/ClientOnly";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FoodTarget } from "../interfaces";
import Foods from "./Foods";
import Routines from "./Foods";


export default async function FoodsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  const foods= await getFoods();

  return (
    <>
      <ClientOnly>
        <Header currentUser={currentUser} />
        <Foods currentUser={currentUser} favorites={foods} />
        <div>{children}</div>
        <Footer />
      </ClientOnly>
    </>
  );
}
