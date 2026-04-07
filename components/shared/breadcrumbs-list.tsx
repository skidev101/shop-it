import React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Define the shape of our breadcrumb items
interface BreadcrumbStep {
	label: string;
	href?: string;
	isCurrent?: boolean;
}

interface DynamicBreadcrumbProps {
	steps: BreadcrumbStep[];
}

export function DynamicBreadcrumb({ steps }: DynamicBreadcrumbProps) {
	return (
		<Breadcrumb className="hidden md:block -mt-4 pb-6 ml-1">
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink
						href="/"
						className="text-muted-foreground/60 hover:text-foreground transition-colors"
					>
						Home
					</BreadcrumbLink>
				</BreadcrumbItem>

				{steps.map((step, index) => (
					<React.Fragment key={index}>
						<BreadcrumbSeparator className="text-muted-foreground/40 font-thin">
							{`>`}
						</BreadcrumbSeparator>
						<BreadcrumbItem>
							{step.isCurrent ? (
								<BreadcrumbPage className="font-medium text-foreground">
									{step.label}
								</BreadcrumbPage>
							) : (
								<BreadcrumbLink
									href={step.href}
									className="text-muted-foreground/60 hover:text-foreground transition-colors"
								>
									{step.label}
								</BreadcrumbLink>
							)}
						</BreadcrumbItem>
					</React.Fragment>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
