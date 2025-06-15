import Modal from "../ui/Modal";
import toast from "react-hot-toast";
import sleep from "../../../utils/sleep";

export default function Login({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: (value: boolean) => void;
}) {
	const handleLogin = async () => {
		const toastId = toast.loading("Saving...");
		setOpen(false);

		try {
			await sleep(1000); // Todo : Replace with actual logic
			toast.success("Saved successfully", { id: toastId });
		} catch {
			toast.error("Failed to save", { id: toastId });
		}
	};

	return (
		<Modal {...{ open, setOpen }}>
			<div
				onClick={handleLogin}
				className="bg-black rounded-md border border-[#e9c862] text-base"
			>
				laksdfjsdlkfjjklsdfadklj j lkjsdklf klfsdj kljkljsdfkljlksdfjklj sdfj
				kljsdklfj kldsjfklsdj fsdf jklsdjf
			</div>
		</Modal>
	);
}
