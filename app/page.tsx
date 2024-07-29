"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-8 justify-center items-center h-fit">
        <p className="text-xl">Quick Links</p>
        <div className="flex gap-8 justify-center items-center">
          <Button type="primary" text="Authenticate" href="/auth/login" />
          <Button type="primary" text="Dashboard" href="/dashboard" />
        </div>
        <Button type="secondary" text="UI Components Showcase" href="/components" />
      </div>
    </main>
  );
}
