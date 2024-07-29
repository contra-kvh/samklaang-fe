'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.svg';
import { usePathname } from 'next/navigation';

import { 
  PiCalendarDuotone, 
  PiCallBellDuotone, 
  PiChatsTeardropDuotone, 
  PiCloudCheckDuotone, 
  PiMagnifyingGlassDuotone, 
  PiUserCircleGearDuotone, 
  PiUsersThreeDuotone, 
  PiVideoConferenceDuotone 
} from 'react-icons/pi';
import { LogoutButton } from '../logoutbtn';

const sidestrip_items: Array<{
  navTo: string;
  icon: React.ReactNode;
}> = [
  {
    navTo: "/activity",
    icon: <PiCallBellDuotone />
  },
  {
    navTo: "/search",
    icon: <PiMagnifyingGlassDuotone />
  },
  {
    navTo: "/teams",
    icon: <PiUsersThreeDuotone />
  },
  {
    navTo: "/chats",
    icon: <PiChatsTeardropDuotone />
  },
  {
    navTo: "/meet",
    icon: <PiVideoConferenceDuotone />
  },
  {
    navTo: "/calendar",
    icon: <PiCalendarDuotone />
  },
  {
    navTo: "/drive",
    icon: <PiCloudCheckDuotone />
  }
];

export const Sidestrip: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="w-fit h-full flex flex-col justify-between items-center text-xl p-4">
      <nav className="w-full h-fit flex flex-col gap-4">
        <Link href="/dashboard" className="aspect-square w-full relative">
          <Image src={logo} objectFit="contain" fill={true} alt="logo"/>
        </Link>
        {sidestrip_items.map(({ navTo, icon }, index) => (
          <Link key={index} href={`/dashboard${navTo}`} className={`p-4 ${pathname.startsWith(`/dashboard${navTo}`) ? 'text-white-accent ring-1 ring-white-accent' : ''}`}>
            {icon}
          </Link>
        ))}
      </nav>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <LogoutButton />
        <PiUserCircleGearDuotone className='cursor-pointer' />
      </div>
    </div>
  );
}

