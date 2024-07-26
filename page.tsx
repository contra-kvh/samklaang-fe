import { Button } from "@/components/ui/buttons";
import React from "react";


interface ComponentsListProps {
  title: string;
  children: React.ReactNode;
}

const ComponentsList: React.FC<ComponentsListProps> = ({title, children}) => {
  return (
    <div className="flex flex-col gap-4 justify-start">
      <h2 className="text-xl">{title}</h2>
      <div className="flex gap-16 justify-start items-center h-fit">
        {children}
      </div>
    </div>
  );  
}

export default function ComponentsGallery() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ComponentsList title="Buttons">
        <Button text="Button Primary" />
        <Button text="Button Secondary" />
      </ComponentsList>
    </main>
  );
}
