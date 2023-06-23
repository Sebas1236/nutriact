"use client";

import {
  AiFillHeart,
  AiOutlineMenu,
  AiOutlineMessage,
  AiOutlineUser,
} from "react-icons/ai";
import { FiAirplay, FiMoon, FiSun } from "react-icons/fi";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import ThemeSelector from "./ThemeSelector";
import { useRouter } from "next/navigation";
import { MdAccountCircle, MdOutlineFitnessCenter } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import useAddFoodModal from "@/app/hooks/useAddFoodModal";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const AddFoodModal = useAddFoodModal();

  const [isOpen, setIsOpen] = useState(false);

  const [modeIsOpen, setModeIsOpen] = useState(false);

  const toggleMode = useCallback(
    () => setModeIsOpen(!modeIsOpen),
    [modeIsOpen]
  );

  const toggleOpen = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleMode}
          className="
                        hidden
                        md:block
                        text-sm
                        font-semibold
                        py-3
                        px-4
                        rounded-full
                        hover:bg-neutral-100
                        transition 
                        cursor-pointer
                        text-green-500
                    "
        >
          <FiSun />
        </div>
        {modeIsOpen && <ThemeSelector />}

        <div
          onClick={toggleOpen}
          className="
                        p-8
                        md:py-1
                        md:px-2
                        border-[1px]
                        border-neutral-200
                        flex
                        flex-row
                        items-center
                        gap-3
                        rounded-full
                        cursor-pointer
                        hover:shadow-md
                        transition
                    "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser?.role=="client" ? (       
              <>
                <MenuItem
                  onClick={() => router.push("/profile")}
                  label="Mi perfil"
                  icon={AiOutlineUser}
                />
                <MenuItem
                  onClick={() => router.push("/exercises")}
                  label="Ejercicios"
                  icon={MdOutlineFitnessCenter}
                />
                <MenuItem
                  onClick={() => router.push("/routines")}
                  label="Mis rutinas"
                  icon={FaTasks}
                />
                <MenuItem
                  onClick={() => router.push("/favorites")}
                  label="Mis favoritos"
                  icon={AiFillHeart}
                />
                <MenuItem
                  onClick={() => router.push("/users")}
                  label="Mis mensajes"
                  icon={AiOutlineMessage}
                />
                
                <hr />
                <MenuItem
                  onClick={() => signOut()}
                  label="Logout"
                  icon={BiLogOut}
                />
              </>
            ) : currentUser?.role=="nutritionist" ? (
              <>
                  <>
                <MenuItem
                  onClick={() => router.push("/profile")}
                  label="Mi perfil"
                  icon={AiOutlineUser}
                />
                <MenuItem
                  onClick={() => router.push("/exercises")}
                  label="Ejercicios"
                  icon={MdOutlineFitnessCenter}
                />
                <MenuItem
                  onClick={() => router.push("/users")}
                  label="Mis mensajes"
                  icon={AiOutlineMessage}
                />

                {/* Area de prueba del nutriolgo Retirar cuado funcione el ingreso por rol*/}
                
                <MenuItem
                  onClick={() => router.push("/nutritionist")}
                  label="Nutriologo"
                  icon={FaTasks}
                />
                 {/*Fin del area de prueba */}
                
                 <MenuItem
                  onClick={AddFoodModal.onOpen}
                  label="Agregar receta"
                  icon={BiLogIn}
                />


                <hr />
                <MenuItem
                  onClick={() => signOut()}
                  label="Logout"
                  icon={BiLogOut}
                />
              </>
              </>
            ) : (
              <>
              <MenuItem
                onClick={loginModal.onOpen}
                label="Login"
                icon={BiLogIn}
              />
              <MenuItem
                onClick={registerModal.onOpen}
                label="Sign up"
                icon={MdAccountCircle}
              />
            </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
