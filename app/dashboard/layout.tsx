import { headers } from 'next/headers';
import { Sidestrip } from "@/components/ui/sidestrip";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const headersList = headers();
  const headerUrl = headersList.get('x-url') || "";
  const pathname = new URL(headerUrl).pathname;

  return (
    <div className="h-full w-full flex gap-4">
      <Sidestrip pathname={pathname}/> 
      {children}
    </div>
  );

}
