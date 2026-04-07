import { ReactNode } from "react";
import { DynamicBreadcrumb } from "../breadcrumbs-list";

interface Props {
	title: string;
	description: string;
	children?: ReactNode;
	steps: Array<{ label: string; href?: string; isCurrent?: string }>;
}

export default function AccountPageHeader({
	title,
	description,
	children,
	steps,
}: Props) {
	return (
		<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full">
			<div>
				<DynamicBreadcrumb steps={steps} />
				<h2 className="text-4xl font-black tracking-tight text-[#1A1A1A] mb-2">
					{title}
				</h2>
				<p className="text-[#666666] text-sm font-medium">
					{description}
				</p>
			</div>
			{children}
		</div>
	);
}
