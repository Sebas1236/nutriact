import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import AddFoodModal from "./components/modals/AddFoodModal";
import getCurrentUser from "./actions/getCurrentUser";
import AuthContext from "./context/AuthContext";
import ActiveStatus from "./components/ActiveStatus";

export const metadata = {
  title: "NutriAct",
  description: "NutriAct Web App",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={`${font.className} dark`}>
        <AuthContext>
          <ClientOnly>
            <ToasterProvider />
            <ActiveStatus />
            <LoginModal />
            <AddFoodModal/>
            <RegisterModal />
            {/* <Navbar currentUser={currentUser} /> */}
          </ClientOnly>
          {/* pb-20 pt-28 */}
          <div>{children}</div>
        </AuthContext>
      </body>
    </html>
  );
}
