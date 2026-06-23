import React from "react";

export default function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children?: React.ReactNode }) {
	return (
		<button className="px-4 py-2 bg-forest text-white rounded" {...props}>
			{children ?? "Button"}
		</button>
	);
}
