import { createMeetingService } from "@/services/meeting"
import { useCallback, useEffect, useState } from "react"

type MeetingStatus = {
	loading: boolean
	error: string | null
	meetingID: string | null
	identity: string | null
}

const initialStatus: MeetingStatus = {
	loading: false,
	error: null,
	meetingID: null,
	identity: null,
}

const useMeeting = () => {
	const [_meetingStatus, setMeetingStatus] =
		useState<MeetingStatus>(initialStatus)

	const setMeetingLoading = (val: boolean) => {
		setMeetingStatus((prev) => ({ ...prev, loading: true }))
	}

	let meetingStatus: MeetingStatus = initialStatus
	useEffect(() => {
		console.log(_meetingStatus)
		meetingStatus = { ..._meetingStatus }
	}, [_meetingStatus])

	const create = async () => {
		setMeetingLoading(true)
		try {
			const data = await createMeetingService()
			if (data.meetingID) {
				setMeetingStatus((prev) => ({
					...prev,
					meetingID: data.meetingID,
					identity: "Me",
				}))
				// return newStatus
				return true
			} else {
				const errorStatus = {
					...initialStatus,
					error: "Meeting could not be created",
				}
				setMeetingStatus(errorStatus)
				// return errorStatus
				return false
			}
		} catch (error) {
			const errorMessage =
				error instanceof Error
					? error.message
					: "Login failed. Please try again."

			const errorStatus = { ...initialStatus, error: errorMessage }
			setMeetingStatus(errorStatus)
			console.error("Create Meeting error:", error)
			return false
		}
	}

	return {
		create,
		loading: meetingStatus.loading,
		error: meetingStatus.error,
		meetingID: meetingStatus.meetingID,
		identity: meetingStatus.identity,
	}
}

export default useMeeting
