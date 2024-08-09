"use client"

import React from "react"
import useMeeting from "@/lib/hooks/useMeeting"

export default function MeetPreparationPage() {
	const { identity } = useMeeting()
	return <div>{identity}</div>
}
