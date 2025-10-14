import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/admin/")({
	beforeLoad: () => {
		throw redirect({
			to: "/admin/dashboard",
			replace: true,
		});
	},
});
