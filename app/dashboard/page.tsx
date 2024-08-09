import { CreateMeetingButton } from "@/components/meeting/create_meeting"
import { Sidebar } from "@/components/sidebar"

/*
NOTE: All code in this file is subject to change in production.
Layout is not finalized
*/

export default function Dashboard() {
	return (
		// <Sidebar title="Dashboard">
		//   <p>hello</p>
		// </Sidebar>

		<div className="flex items-center justify-center w-full h-full">
			<CreateMeetingButton />
		</div>
	)
}
