import { GetStaticProps, NextPage } from "next";
import getCurrentUser from "./actions/getCurrentUser";
import getListings from "./actions/getListings";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";
import { ExerciseTarget } from "./interfaces/exercise-target";
import Aos from "aos";
import Banner from "./components/Banner";
import Header from "./components/Header";
import About from "./components/About";
import Workouts from "./components/Workout";
import Pricing from "./components/Pricing";
import Community from "./components/Community";
import Faq from "./components/Faq";
import Join from "./components/Join";
import Footer from "./components/Footer";

export default async function Home() {
  // const exerciseTargets = await getExerciseTargets();
  // const listings = await getListings();
  const currentUser = await getCurrentUser();

  return (
    <ClientOnly>
      {/* <Container> */}
      <Header currentUser={currentUser} />
      <Banner />
      <About />
      <Workouts />
      <Pricing />
      <Community />
      <Faq />
      <Join />
      <Footer />
      {/* <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8"> */}
      {/* {
            exerciseTargets.map((listing) => {
              return (
                <ListingCard
                  currentUser={currentUser} 
                  key={listing.id}
                  data={listing}
                />
              )
            })
          } */}
      {/* </div> */}
      {/* </Container> */}
    </ClientOnly>
  );
}
