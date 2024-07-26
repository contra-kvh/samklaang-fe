'use client';

import { Button } from "@/components/ui/button";
import { PasswordInputBox, TextInputBox } from "@/components/ui/input/";
import React from "react";
import {useState} from 'react';


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
    <main className="flex min-h-screen flex-col items-start gap-24 p-24">
      <ComponentsList title="Buttons">
        <Button text="Button Primary" />
        <Button text="Button Secondary" type="secondary" />
      </ComponentsList>
      <ComponentsList title="Input Fields">
        <TextInputBox placeholder="Your Email" 
          validator={(value: string): boolean => {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return emailRegex.test(value);
          }}
          onChange={(newval: string) => console.log(`password box value changed: ${newval}`)}
        />
        <TextInputBox placeholder="Your Name" 
          onChange={(newval: string) => console.log(`password box value changed: ${newval}`)}
        />
        <PasswordInputBox 
          placeholder="Your Password" 
          onChange={(newval: string) => console.log(`password box value changed: ${newval}`)}/>
      </ComponentsList>
    </main>
  );
}
