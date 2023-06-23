import getCurrentUser from "../actions/getCurrentUser";
import getFavorites from "../actions/getFavorites";
import ClientOnly from "../components/ClientOnly";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Favorites from "../favorites/Favorites";

export default async function FavoritesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  const favorites = await getFavorites(currentUser!);

  return (
    <>
      <ClientOnly>
        <Header currentUser={currentUser} />
        <Favorites currentUser={currentUser} favorites={favorites} />
        <div>{children}</div>
        <Footer />
      </ClientOnly>
    </>
  );
}
