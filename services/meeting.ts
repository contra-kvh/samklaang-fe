import client from "./client"

export const createMeetingService = async () => {
	// const response = await client.get("/api/meet/now")
	const response = await client.get("/new_meeting")
	return response.data
}
