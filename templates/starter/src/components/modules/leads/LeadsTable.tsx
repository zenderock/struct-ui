import * as React from "react";
import {
	type ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
	getPaginationRowModel,
	type SortingState,
	getSortedRowModel,
} from "@tanstack/react-table";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "~/components/ui/table";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Checkbox } from "~/components/ui/checkbox";

import { type Lead, leadStatusColors } from "./schema";
import { Tabs, TabsList, TabsTab } from "~/components/ui/tabs";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	Add01Icon,
	Comment01Icon,
	DownloadIcon,
	FilterIcon,
	GridTableIcon,
	HoldPhoneIcon,
	LeftToRightListBulletIcon,
	Mail01Icon,
	StickyNote01Icon,
	UserMultiple02Icon,
} from "@hugeicons/core-free-icons";
import { Card, CardHeader, CardPanel } from "~/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "~/components/ui/select";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "~/components/ui/menu";
import {
	ArrowUpDown,
	MessageSquare,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";

const activityIcons = {
	call: HoldPhoneIcon,
	email: Mail01Icon,
	meeting: UserMultiple02Icon,
	task: StickyNote01Icon,
	note: StickyNote01Icon, // Duplicate mapping
	message: Comment01Icon,
};

const leadStatusBorders: Record<string, string> = {
	"Cold Lead": "border-info/20",
	"Hot Lead": "border-destructive/20",
	"Warm Lead": "border-warning/20",
};

const sourceIcons: Record<string, string> = {
	Dribbble: "./icons/dribbble-color-svgrepo-com.svg",
	Facebook: "./icons/facebook-svgrepo-com.svg",
	Instagram: "./icons/instagram-1-svgrepo-com.svg",
};

const columns: ColumnDef<Lead>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={table.getIsAllPageRowsSelected()}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "name",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
					className="p-0 hover:bg-transparent"
				>
					Leads
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => (
			<div className="flex items-center gap-3">
				<Avatar className="h-8 w-8">
					<AvatarImage src={row.original.avatar} alt={row.original.name} />
					<AvatarFallback>{row.original.name.charAt(0)}</AvatarFallback>
				</Avatar>
				<div className="font-medium">{row.original.name}</div>
			</div>
		),
	},
	{
		accessorKey: "subject",
		header: ({ column }) => (
			<Button
				variant="ghost"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				className="p-0 hover:bg-transparent"
			>
				Subject
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => (
			<div className="text-muted-foreground">{row.original.subject}</div>
		),
	},
	{
		accessorKey: "activity", // Virtual accessor
		header: ({ column }) => (
			<Button
				variant="ghost"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				className="p-0 hover:bg-transparent"
			>
				Activities
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => {
			const Icon = activityIcons[row.original.activity_type] || MessageSquare;
			const date = new Date(row.original.activity_date);
			return (
				<div className="flex items-center gap-2 text-muted-foreground text-sm">
					<HugeiconsIcon icon={Icon} className="h-4 w-4" />
					<span>
						{date.toLocaleDateString("en-US", {
							month: "short",
							day: "numeric",
						})}{" "}
						at{" "}
						{date.toLocaleTimeString("en-US", {
							hour: "2-digit",
							minute: "2-digit",
						})}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "status",
		header: ({ column }) => (
			<Button
				variant="ghost"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				className="p-0 hover:bg-transparent"
			>
				Status
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => {
			const status = row.original.status;
			return (
				<Badge
					variant={leadStatusColors[status]}
					className={`font-normal capitalize px-2 py-0.5 border ${leadStatusBorders[status]}`}
				>
					{status}
				</Badge>
			);
		},
	},
	{
		accessorKey: "created_at",
		header: ({ column }) => (
			<Button
				variant="ghost"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				className="p-0 hover:bg-transparent"
			>
				Created
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => {
			// Rudimentary "time ago" logic, can replace with date-fns
			const date = new Date(row.original.created_at);
			const monthDiff = new Date().getMonth() - date.getMonth();
			return (
				<span className="text-muted-foreground text-sm">
					{monthDiff > 0 ? `${monthDiff} months ago` : "This month"}
				</span>
			);
		},
	},
	{
		accessorKey: "source",
		header: ({ column }) => (
			<Button
				variant="ghost"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				className="p-0 hover:bg-transparent"
			>
				Sources
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => {
			const iconUrl = sourceIcons[row.original.source];
			return (
				<div className="flex items-center gap-2">
					{iconUrl ? (
						<img src={iconUrl} alt={row.original.source} className="size-5" />
					) : (
						<div className="size-5 rounded-full bg-zinc-200" />
					)}
					<span>{row.original.source}</span>
				</div>
			);
		},
	},
];

interface LeadsTableProps {
	data: Lead[];
	total: number;
}

function generatePagination(currentPage: number, totalPages: number) {
	if (totalPages <= 7) {
		return Array.from({ length: totalPages }, (_, i) => ({
			value: i + 1,
			key: `page-${i + 1}`,
			isEllipsis: false,
		}));
	}
	const pages: { value: number | string; key: string; isEllipsis: boolean }[] =
		[{ value: 1, key: "page-1", isEllipsis: false }];
	if (currentPage > 3) {
		pages.push({ value: "...", key: "ellipsis-start", isEllipsis: true });
	}
	const start = Math.max(2, currentPage - 1);
	const end = Math.min(totalPages - 1, currentPage + 1);
	for (let i = start; i <= end; i++) {
		pages.push({ value: i, key: `page-${i}`, isEllipsis: false });
	}
	if (currentPage < totalPages - 2) {
		pages.push({ value: "...", key: "ellipsis-end", isEllipsis: true });
	}
	if (totalPages > 1) {
		pages.push({
			value: totalPages,
			key: `page-${totalPages}`,
			isEllipsis: false,
		});
	}
	return pages;
}

export function LeadsTable({ data, total }: LeadsTableProps) {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [rowSelection, setRowSelection] = React.useState({});

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			rowSelection,
		},
	});

	return (
		<div className="flex flex-col w-full h-full gap-4">
			<Card className="flex flex-col flex-1 min-h-0 overflow-hidden">
				<CardHeader className="shrink-0">
					<div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
						<Tabs defaultValue="tab-1" className="w-full md:w-auto">
							<TabsList className="w-full md:w-auto">
								<TabsTab value="tab-1" className="flex-1 md:flex-none">
									{" "}
									<HugeiconsIcon icon={LeftToRightListBulletIcon} /> List
								</TabsTab>
								<TabsTab value="tab-2" className="flex-1 md:flex-none">
									{" "}
									<HugeiconsIcon icon={GridTableIcon} /> Grid
								</TabsTab>
							</TabsList>
						</Tabs>
						<div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
							<DropdownMenu>
								<DropdownMenuTrigger className="focus:outline-none">
									<Button
										variant="outline"
										className="h-9 gap-2 flex-1 md:flex-none"
									>
										<HugeiconsIcon icon={FilterIcon} />
										Filter
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end" className="w-48">
									<DropdownMenuGroup>
										<DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuCheckboxItem checked>
											New
										</DropdownMenuCheckboxItem>
										<DropdownMenuCheckboxItem>
											Contacted
										</DropdownMenuCheckboxItem>
										<DropdownMenuCheckboxItem>
											Qualified
										</DropdownMenuCheckboxItem>
										<DropdownMenuCheckboxItem>Lost</DropdownMenuCheckboxItem>
									</DropdownMenuGroup>
									<DropdownMenuSeparator />
									<DropdownMenuGroup>
										<DropdownMenuLabel>Filter by Source</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuCheckboxItem>Website</DropdownMenuCheckboxItem>
										<DropdownMenuCheckboxItem>
											Referral
										</DropdownMenuCheckboxItem>
									</DropdownMenuGroup>
								</DropdownMenuContent>
							</DropdownMenu>

							<DropdownMenu>
								<DropdownMenuTrigger className="focus:outline-none">
									<Button
										variant="outline"
										className="h-9 gap-2 flex-1 md:flex-none"
									>
										<HugeiconsIcon icon={DownloadIcon} />
										Export
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end" className="w-48">
									<DropdownMenuItem>Export as CSV</DropdownMenuItem>
									<DropdownMenuItem>Export as Excel</DropdownMenuItem>
									<DropdownMenuItem>Export as PDF</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>

							<Button className="h-9 gap-2 w-full md:w-auto">
								<HugeiconsIcon icon={Add01Icon} className="size-5" />
								Add New Lead
							</Button>
						</div>
					</div>
				</CardHeader>
				<CardPanel className="flex-1 min-h-0 overflow-hidden p-0">
					<div className="h-full overflow-auto">
						<Table>
							<TableHeader className="sticky top-0 bg-background z-10 shadow-sm">
								{table.getHeaderGroups().map((headerGroup) => (
									<TableRow key={headerGroup.id}>
										{headerGroup.headers.map((header) => {
											return (
												<TableHead
													key={header.id}
													className="whitespace-nowrap"
												>
													{header.isPlaceholder
														? null
														: flexRender(
																header.column.columnDef.header,
																header.getContext(),
															)}
												</TableHead>
											);
										})}
									</TableRow>
								))}
							</TableHeader>
							<TableBody>
								{table.getRowModel().rows?.length ? (
									table.getRowModel().rows.map((row) => (
										<TableRow
											key={row.id}
											data-state={row.getIsSelected() && "selected"}
										>
											{row.getVisibleCells().map((cell) => (
												<TableCell key={cell.id} className="whitespace-nowrap">
													{flexRender(
														cell.column.columnDef.cell,
														cell.getContext(),
													)}
												</TableCell>
											))}
										</TableRow>
									))
								) : (
									<TableRow>
										<TableCell
											colSpan={columns.length}
											className="h-24 text-center"
										>
											No results.
										</TableCell>
									</TableRow>
								)}
							</TableBody>
						</Table>
					</div>
				</CardPanel>
			</Card>
			<footer className="shrink-0 flex flex-col items-center justify-between gap-4 px-2 py-4 sm:flex-row">
				<div className="flex flex-col items-center gap-2 text-sm text-muted-foreground sm:flex-row flex-1 w-full sm:w-auto">
					<div className="flex items-center gap-2">
						Show
						<Select
							value={`${table.getState().pagination.pageSize}`}
							onValueChange={(value) => {
								table.setPageSize(Number(value));
							}}
						>
							<SelectTrigger className="h-8 w-[70px]">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{[10, 20, 30, 40, 50].map((pageSize) => (
									<SelectItem key={pageSize} value={`${pageSize}`}>
										{pageSize}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						Leads per page
					</div>
				</div>
				<div className="flex items-center gap-2 w-full justify-center sm:w-auto">
					<Button
						variant="outline"
						size="icon"
						className="h-8 w-8"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						<ChevronLeft className="h-4 w-4" />
					</Button>
					<div className="flex items-center gap-1">
						{generatePagination(
							table.getState().pagination.pageIndex + 1,
							table.getPageCount(),
						).map((pageObj) =>
							!pageObj.isEllipsis ? (
								<Button
									key={pageObj.key}
									variant={
										table.getState().pagination.pageIndex + 1 === pageObj.value
											? "default"
											: "ghost"
									}
									size="icon"
									className={`h-8 w-8 ${
										table.getState().pagination.pageIndex + 1 === pageObj.value
											? "bg-black text-white hover:bg-black/90"
											: ""
									}`}
									onClick={() => table.setPageIndex(Number(pageObj.value) - 1)}
								>
									{pageObj.value}
								</Button>
							) : (
								<span key={pageObj.key} className="text-muted-foreground p-2">
									...
								</span>
							),
						)}
					</div>
					<Button
						variant="outline"
						size="icon"
						className="h-8 w-8"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						<ChevronRight className="h-4 w-4" />
					</Button>
				</div>
			</footer>
		</div>
	);
}
