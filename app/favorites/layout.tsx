import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default async function FavoritesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <>
      <ClientOnly>
        <Header currentUser={currentUser} />
        <div>{children}</div>
        <Footer />
      </ClientOnly>
    </>
  );
}
