import { Notification02Icon, Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { createFileRoute } from "@tanstack/react-router";
import { LeadsTable } from "~/components/modules/leads/LeadsTable";
import { fetchLeads } from "~/components/modules/leads/data";
import { Button } from "~/components/ui/button";

import {
	InputGroup,
	InputGroupInput,
	InputGroupAddon,
} from "~/components/ui/input-group";

export const Route = createFileRoute("/leads")({
	component: LeadsPage,
	loader: async ({ location }) => {
		const results = await fetchLeads({ data: { page: 1, pageSize: 50 } });
		return results;
	},
});

function LeadsPage() {
	const { data, total } = Route.useLoaderData();

	return (
		<div className="flex flex-col gap-4 h-full overflow-hidden">
			<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shrink-0">
				<h1 className="text-2xl font-semibold tracking-tight">Leads</h1>
				<div className="flex items-center gap-2 w-full md:w-auto">
					<InputGroup className="flex-1 md:w-80">
						<InputGroupInput
							aria-label="Search"
							placeholder="Search"
							type="search"
						/>
						<InputGroupAddon>
							<HugeiconsIcon
								icon={Search01Icon}
								className="size-5 text-muted-foreground"
							/>
						</InputGroupAddon>
					</InputGroup>
					<Button variant="ghost" size="icon">
						<HugeiconsIcon icon={Notification02Icon} className="size-5" />
					</Button>
				</div>
			</div>
			<div className="flex-1 min-h-0">
				<LeadsTable data={data} total={total} />
			</div>
		</div>
	);
}
