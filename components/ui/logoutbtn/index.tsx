'use client';

import useAuth  from '@/lib/hooks/useAuth';
import { PiSignOutDuotone } from 'react-icons/pi';

export const LogoutButton: React.FC = () => {
  const { logout } = useAuth();

  return (
    <PiSignOutDuotone onClick={logout} className='cursor-pointer' />
  );
}
