import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-16 justify-center items-center h-fit">
        <Button text="Authenticate" />
        <Button text="Register" type="secondary" />
      </div>
    </main>
  );
}
