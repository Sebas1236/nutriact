import getCurrentUser from "../actions/getCurrentUser";
import getExerciseTargets from "../actions/getExercises";
import ClientOnly from "../components/ClientOnly";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Exercises from "./Exercises";

export default async function FavoritesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  const exerciseTargets = await getExerciseTargets();

  return (
    <>
      <ClientOnly>
        <Header currentUser={currentUser} />
        <Exercises
          currentUser={currentUser}
          exerciseTargets={exerciseTargets}
        />
        <div>{children}</div>
        <Footer />
      </ClientOnly>
    </>
  );
}
