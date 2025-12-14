import React, { useState } from "react";
import { HugeiconsIcon, type HugeiconsIconProps } from "@hugeicons/react";
import {
	Agreement02Icon,
	ArrowDown01Icon,
	ArrowLeftDoubleIcon,
	ArrowRightDoubleIcon,
	Calendar01Icon,
	Calendar04Icon,
	CommandIcon,
	CustomerSupportIcon,
	DashboardSquare01Icon,
	File02Icon,
	Folder01Icon,
	Message01Icon,
	MoreVerticalIcon,
	PackageIcon,
	PromotionIcon,
	Search01Icon,
	Settings01Icon,
	Store01Icon,
	Sun01Icon,
	Target01Icon,
	Task01Icon,
	UserMultipleIcon,
} from "@hugeicons/core-free-icons";
import { Button } from "../ui/button";
import {
	InputGroup,
	InputGroupInput,
	InputGroupAddon,
} from "../ui/input-group";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInput,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
	useSidebar,
	sidebarMenuButtonVariants,
} from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
	Menu,
	MenuGroup,
	MenuGroupLabel,
	MenuItem,
	MenuPopup,
	MenuSeparator,
	MenuTrigger,
} from "../ui/menu";
import { cn } from "~/lib/utils";

interface MenuItemType {
	title: string;
	url: string;
	icon: HugeiconsIconProps["icon"];
	isActive?: boolean;
	collapsible?: boolean;
}

interface SidebarLinkProps {
	item: MenuItemType;
	isExpanded: boolean;
}

// Menu configuration
const menuItems: {
	main: MenuItemType[];
	insights: MenuItemType[];
	bottom: MenuItemType[];
} = {
	main: [
		{ title: "Dashboard", url: "/dashboard", icon: DashboardSquare01Icon },
		{ title: "Leads", url: "/leads", icon: Target01Icon, isActive: true },
		{
			title: "Deals",
			url: "/deals",
			icon: Agreement02Icon,
			collapsible: true,
		},
		{
			title: "Projects",
			url: "/projects",
			icon: Folder01Icon,
			collapsible: true,
		},
		{
			title: "Contacts",
			url: "/contacts",
			icon: UserMultipleIcon,
			collapsible: true,
		},
		{ title: "Products", url: "/products", icon: PackageIcon },
		{ title: "Marketplace", url: "/marketplace", icon: Store01Icon },
	],
	insights: [
		{ title: "Activities", url: "/activities", icon: Calendar04Icon },
		{
			title: "Reports",
			url: "/reports",
			icon: File02Icon,
			collapsible: true,
		},
		{
			title: "Campaigns",
			url: "/campaigns",
			icon: PromotionIcon,
			collapsible: true,
		},
		{ title: "Inbox", url: "/inbox", icon: Message01Icon },
		{ title: "Tasks", url: "/tasks", icon: Task01Icon },
		{ title: "Calendar", url: "/calendar", icon: Calendar01Icon },
	],
	bottom: [
		{ title: "Help Center", url: "#", icon: CustomerSupportIcon },
		{ title: "Settings", url: "#", icon: Settings01Icon },
	],
};

const CollapsibleMenuItem = ({ item, isExpanded }: SidebarLinkProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className={`w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-100 transition-colors ${
					isExpanded ? "" : "justify-center"
				}`}
			>
				<HugeiconsIcon
					icon={item.icon}
					className="size-5 text-zinc-500 shrink-0"
				/>
				{isExpanded && (
					<>
						<span className="text-sm flex-1 text-left">{item.title}</span>
						<HugeiconsIcon
							icon={ArrowDown01Icon}
							className={`size-5  transition-transform ${isOpen ? "rotate-180" : ""}`}
						/>
					</>
				)}
			</button>
		</div>
	);
};

const SidebarLink = ({ item, isExpanded }: SidebarLinkProps) => {
	return (
		<a
			href={item.url}
			className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
				item.isActive
					? "bg-white text-zinc-900 font-medium shadow-sm"
					: "hover:bg-zinc-100 text-zinc-700"
			} ${isExpanded ? "" : "justify-center"}`}
		>
			<HugeiconsIcon
				icon={item.icon}
				className="size-5 shrink-0 text-zinc-500"
			/>
			{isExpanded && <span className="text-sm">{item.title}</span>}
		</a>
	);
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { state, setOpen, isMobile } = useSidebar();
	const isExpanded = state === "expanded";
	const setIsExpanded = (value: boolean) => setOpen(value);

	return (
		<Sidebar
			collapsible="icon"
			style={
				{
					"--sidebar-width-icon": "5rem",
				} as React.CSSProperties
			}
			{...props}
		>
			<SidebarHeader>
				{/* Header */}
				<div className="flex items-center gap-2 px-2 py-1">
					<div className="flex items-center justify-center size-8 rounded-lg bg-black text-white shrink-0">
						<HugeiconsIcon icon={Sun01Icon} className="size-5" />
					</div>
					{isExpanded && (
						<>
							<span className="font-semibold text-base flex-1">Struct UI</span>
							{!isMobile && (
								<Button
									onClick={() => setIsExpanded(false)}
									size="icon"
									variant={"ghost"}
								>
									<HugeiconsIcon
										icon={ArrowLeftDoubleIcon}
										className="size-5"
									/>
								</Button>
							)}
						</>
					)}
					{!isExpanded && !isMobile && (
						<Button
							onClick={() => setIsExpanded(true)}
							size="icon"
							variant={"secondary"}
							className="z-50 "
						>
							<HugeiconsIcon icon={ArrowRightDoubleIcon} className="size-5" />
						</Button>
					)}
				</div>

				{/* Search */}
				{isExpanded && (
					<div className="py-2">
						<div className="relative">
							<InputGroup>
								<InputGroupInput
									aria-label="Search"
									placeholder="Search"
									type="search"
									size={"lg"}
								/>
								<InputGroupAddon>
									<HugeiconsIcon icon={Search01Icon} />
								</InputGroupAddon>
								<InputGroupAddon align={"inline-end"}>
									<HugeiconsIcon icon={CommandIcon} className="size-2.5" /> K
								</InputGroupAddon>
							</InputGroup>
						</div>
					</div>
				)}
			</SidebarHeader>

			{/* Main Content */}
			<SidebarContent className="px-2 py-4">
				{/* Menu Section */}
				<div className="mb-6">
					{isExpanded && (
						<div className="px-2 mb-2">
							<span className="text-xs font-semibold text-zinc-500">Menu</span>
						</div>
					)}
					<div className="space-y-0.5">
						{menuItems.main.map((item) => (
							<React.Fragment key={item.title}>
								{item.collapsible ? (
									<CollapsibleMenuItem item={item} isExpanded={isExpanded} />
								) : (
									<SidebarLink item={item} isExpanded={isExpanded} />
								)}
							</React.Fragment>
						))}
					</div>
				</div>

				<div className="mb-6">
					{isExpanded && (
						<div className="px-2 mb-2">
							<span className="text-xs font-semibold text-zinc-500">
								Insights
							</span>
						</div>
					)}
					<div className="space-y-0.5">
						{menuItems.insights.map((item) => (
							<React.Fragment key={item.title}>
								{item.collapsible ? (
									<CollapsibleMenuItem item={item} isExpanded={isExpanded} />
								) : (
									<SidebarLink item={item} isExpanded={isExpanded} />
								)}
							</React.Fragment>
						))}
					</div>
				</div>

				{/* Bottom Section */}
				<div className="mt-auto">
					<div className="space-y-0.5">
						{menuItems.bottom.map((item) => (
							<SidebarLink
								key={item.title}
								item={item}
								isExpanded={isExpanded}
							/>
						))}
					</div>
				</div>
			</SidebarContent>

			{/* Footer */}
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<Menu>
							<MenuTrigger
								className={cn(
									sidebarMenuButtonVariants({ size: "lg" }),
									"data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
								)}
							>
								<Avatar className="h-8 w-8 rounded-lg">
									<AvatarImage
										src="https://www.zenderock.me/_next/image?url=%2Fzenderock.png&w=1920&q=75"
										alt="Emmanuel Zenderock"
									/>
									<AvatarFallback className="rounded-lg">EZ</AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">
										Emmanuel Zenderock
									</span>
									<span className="truncate text-xs">contact@zenderock.me</span>
								</div>
								<HugeiconsIcon
									icon={MoreVerticalIcon}
									className="ml-auto size-4"
								/>
							</MenuTrigger>
							<MenuGroup>
								<MenuPopup
									className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
									side="bottom"
									align="end"
									sideOffset={4}
								>
									<MenuGroupLabel className="p-0 font-normal">
										<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
											<Avatar className="h-8 w-8 rounded-lg">
												<AvatarImage
													src="https://www.zenderock.me/_next/image?url=%2Fzenderock.png&w=1920&q=75"
													alt="Emmanuel Zenderock"
												/>
												<AvatarFallback className="rounded-lg">
													EZ
												</AvatarFallback>
											</Avatar>
											<div className="grid flex-1 text-left text-sm leading-tight">
												<span className="truncate font-semibold">
													Emmanuel Zenderock
												</span>
												<span className="truncate text-xs">
													contact@zenderock.me
												</span>
											</div>
										</div>
									</MenuGroupLabel>
									<MenuSeparator />
									<MenuGroup>
										<MenuItem>
											<HugeiconsIcon
												icon={Store01Icon}
												className="size-4 mr-2"
											/>
											Upgrade to Pro
										</MenuItem>
									</MenuGroup>
									<MenuSeparator />
									<MenuGroup>
										<MenuItem>
											<HugeiconsIcon
												icon={Settings01Icon}
												className="size-4 mr-2"
											/>
											Account
										</MenuItem>
										<MenuItem>
											<HugeiconsIcon
												icon={File02Icon}
												className="size-4 mr-2"
											/>
											Billing
										</MenuItem>
										<MenuItem>
											<HugeiconsIcon
												icon={Message01Icon}
												className="size-4 mr-2"
											/>
											Notifications
										</MenuItem>
									</MenuGroup>
									<MenuSeparator />
									<MenuItem>
										<HugeiconsIcon
											icon={ArrowLeftDoubleIcon}
											className="size-4 mr-2"
										/>
										Log out
									</MenuItem>
								</MenuPopup>
							</MenuGroup>
						</Menu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
}
