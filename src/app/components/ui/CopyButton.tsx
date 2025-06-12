/* eslint-disable @typescript-eslint/no-unused-vars  */
import { useState } from "react";
import { IoMdDoneAll } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";

export default function CopyButton({
	onCopy = (_value) => {},
	data = "Noting to copy",
}: {
	onCopy: (value: string) => void;
	data: string;
}) {
	const [copy, setCopy] = useState(false);

	return (
		<button
			onClick={() => {
				if (!copy)
					navigator.clipboard.writeText(data).then(
						() => {
							setCopy(true);
							onCopy("Data copied to clipboard");
							setTimeout(() => setCopy(false), 5000);
						},
						(err) => console.error("Could not copy text: ", err)
					);
			}}
			className={`bg-black/20 backdrop-blur-md px-6 py-1 flex items-center gap-2 border border-gray-600 rounded-md hover:bg-gray-600`}
			style={{
				cursor: copy ? "not-allowed" : "copy",
			}}
			disabled={copy}
		>
			{copy ? (
				<>
					<IoMdDoneAll className="inline-block animate-pulse" />
					Trade Copied!
				</>
			) : (
				<>
					<MdContentCopy className="inline-block" />
					Copy Trade
				</>
			)}
		</button>
	);
}
