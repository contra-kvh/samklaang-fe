import React from "react"

import { RegisterForm } from "@/components/forms/register"

export default function RegisterPage() {
	return (
		<div className="h-fit w-full flex flex-col gap-[3.5rem] justify-start px-24">
			<p className="text-xl">
				{" "}
				Welcome! We're excited to get you started.
			</p>
			<RegisterForm />
		</div>
	)
}
