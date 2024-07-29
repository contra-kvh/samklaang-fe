import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.svg';
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

export const Sidestrip: React.FC<{ pathname: string }> = ({ pathname }) => {
  console.log(`received pathname: ${pathname}`);
  return (
    <div className="w-fit h-full flex flex-col justify-between text-xl p-4">
      <nav className="w-full h-fit flex flex-col gap-4">
        <div className="aspect-square w-full relative">
          <Image src={logo} objectFit="contain" fill={true} alt="logo"/>
        </div>
        {sidestrip_items.map(({ navTo, icon }, index) => (
          <Link key={index} href={navTo} className={`p-4 ${pathname.startsWith(`/dashboard${navTo}`) ? 'active' : ''}`}>
            {icon}
          </Link>
        ))}
      </nav>
      <PiUserCircleGearDuotone />
    </div>
  );
}
