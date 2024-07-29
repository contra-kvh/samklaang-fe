import React from 'react';

interface SidebarProps {
  title: string;
  actions?: React.FC<{}>;  // actions should be a React functional component
  children: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({title, actions: Actions, children}) => {
  return (
    <div className="w-full max-w-[35rem] h-full flex flex-col border-x-[1px] border-muted px-8 py-4">
      <div className="head text-lg flex items-center justify-between">
        <span>{title}</span>
        {Actions && <Actions />}
      </div>
      <hr className='my-4 border-muted' />
      {children} 
    </div>
  );
}
