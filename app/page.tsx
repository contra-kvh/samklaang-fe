"use client";

import { Button } from "@/components/ui/button";
import useAuth from "@/lib/hooks/useAuth";

export default function Home() {
  const { logout } = useAuth();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-16 justify-center items-center h-fit">
        <Button text="Authenticate" />
        <Button text="Register" type="secondary" />

        <Button text="Logout" type="primary" onClick={logout} />
      </div>
    </main>
  );
}
