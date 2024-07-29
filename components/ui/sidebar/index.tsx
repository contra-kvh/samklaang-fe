import React from 'react';

interface SidebarProps {
  title: string;
  children: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({title, children}) => {
  return (
    <div className="w-full max-w-[35rem] h-full flex flex-col border-x-[1px] border-muted px-8 py-4">
      <p className='text-xl'>{title}</p>
      <hr className='my-4 border-muted' />
      {children} 
    </div>
  );
}
