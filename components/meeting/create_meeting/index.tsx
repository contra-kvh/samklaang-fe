"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import useMeeting from "@/lib/hooks/useMeeting"
import { useRouter } from "next/navigation"

interface CreateMeetingButtonProps {
	// title: string;
	// actions?: React.FC<{}>;
	// children: React.ReactNode;
}

export const CreateMeetingButton: React.FC<CreateMeetingButtonProps> = () => {
	const { create, meetingID, loading, error } = useMeeting()
	const router = useRouter()
	// const [meetingStatus, setMeetingStatus] = useState<any | boolean>(false)

	const createMeetingHandler = async () => {
		const success = await create()
		// setMeetingStatus(meetingStatus)
		if (success) {
			router.replace(`/meet/${meetingID}`)
		} else {
			console.error("Meeting could not be created: ", error)
		}
	}

	return (
		<Button
			text="Create meeting"
			type="primary"
			loading={loading}
			onClick={createMeetingHandler}
		/>
	)
}
