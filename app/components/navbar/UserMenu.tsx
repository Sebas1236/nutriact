'use client';

import { AiOutlineMenu } from 'react-icons/ai'
import { FiAirplay, FiMoon, FiSun } from 'react-icons/fi'
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';

interface UserMenuProps {
    currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser,
}) => {

    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();

    const [isOpen, setIsOpen] = useState(false);

    const [modeIsOpen, setModeIsOpen] = useState(false);

    const toggleMode = useCallback(() =>
        setModeIsOpen(!modeIsOpen),
        [modeIsOpen]);

    const toggleOpen = useCallback(() =>
        setIsOpen(!isOpen),
        [isOpen]);

    return (
        <div className='relative'>
            <div className='flex flex-row items-center gap-3'>
                <div
                    onClick={toggleMode}
                    className='
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
                        text-sky-500
                    '
                >
                    <FiSun />
                </div>
                {
                    modeIsOpen && (
                        <>
                            <ul tabIndex={0} className='absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 mt-4'>
                                <li className='py-1 px-2 flex items-center cursor-pointer text-sky-500'>
                                    <FiSun />
                                    <span className='px-4'>Light</span>
                                </li>
                                <li className='py-1 px-2 flex items-center cursor-pointer text-slate-800'>
                                    <FiMoon />
                                    <span className='px-4'>Dark</span>
                                </li>
                                <li className='py-1 px-2 flex items-center cursor-pointer text-slate-800'>
                                    <FiAirplay />
                                    <span className='px-4'>System</span>
                                </li>
                            </ul>
                        </>
                    )
                }

                <div
                    onClick={toggleOpen}
                    className='
                        p-4
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
                    '
                >
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <Avatar src={currentUser?.image} />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'
                >
                    <div className='flex flex-col cursor-pointer'>
                        {currentUser ? (
                            <>
                                <MenuItem
                                    onClick={() => { }}
                                    label='Mi perfil'
                                />
                                <MenuItem
                                    onClick={() => { }}
                                    label='Mis rutinas'
                                />
                                <MenuItem
                                    onClick={() => { }}
                                    label='Mis favoritos'
                                />
                                <hr />
                                <MenuItem
                                    onClick={() => signOut()}
                                    label='Logout'
                                />
                            </>
                        ) : (
                            <>
                                <MenuItem
                                    onClick={loginModal.onOpen}
                                    label='Login'
                                />
                                <MenuItem
                                    onClick={registerModal.onOpen}
                                    label='Sign up'
                                />
                            </>
                        )}

                    </div>
                </div>
            )
            }
        </div >
    )
}

export default UserMenu;