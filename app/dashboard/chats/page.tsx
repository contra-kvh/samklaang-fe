import { Sidebar } from "@/components/sidebar";
import { PiPlusCircleDuotone } from "react-icons/pi";

const Controls: React.FC = () => {
  return(
    <div className="flex gap-2 items-center justify-center w-fit">
      <PiPlusCircleDuotone className="cursor-pointer" />
    </div>
  );
}

export default function ActivityDashboard() {
  return (
    <Sidebar title="Direct Messages" actions={Controls}>
      <p>hello</p>
    </Sidebar>
  );
}

