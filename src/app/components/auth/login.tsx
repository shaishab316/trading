import Modal from "../ui/Modal";
import toast from "react-hot-toast";
import sleep from "../../../utils/sleep";
import Button from "../ui/Button";
import Checkbox from "../ui/Checkbox";
import { useAppDispatch } from "../../../hooks/redux";
import { login } from "../../../redux/features/user/userSlice";

export default function Login({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: (value: boolean) => void;
}) {
	const dispatch = useAppDispatch();

	const handleLogin = async () => {
		const toastId = toast.loading("Logging in...");
		setOpen(false);

		try {
			await sleep(1000); // Todo : Replace with actual logic
			toast.success("Logged in successfully", { id: toastId });
			dispatch(login());
		} catch {
			toast.error("Failed to login", { id: toastId });
		}
	};

	return (
		<Modal {...{ open, setOpen }}>
			<form
				onSubmit={handleLogin}
				className="bg-[#272727] rounded-md border border-[#e9c862] text-base p-[32px] text-center"
			>
				<img src="/logo2.png" alt="logo" className="w-[200px] mx-auto" />
				<h3 className="m-[16px] font-semibold text-2xl">Login</h3>
				<table className="table-auto border-separate border-spacing-4 min-w-[30vw]">
					<tbody>
						<tr className="table-row">
							<td className="text-right">USER ID</td>
							<td>
								<div className="rounded-md p-[1px] bg-gradient-to-b from-[#d4af37] to-[#cccccc33]">
									<input
										required
										type="text"
										className="rounded-md py-2 px-4 focus:outline-0 bg-[#212121] placeholder-gray-300/20 w-full"
										placeholder="Enter ID"
									/>
								</div>
							</td>
						</tr>
						<tr className="table-row">
							<td className="text-right">Password</td>
							<td>
								<div className="rounded-md p-[1px] bg-gradient-to-b from-[#d4af37] to-[#cccccc33]">
									<input
										required
										type="password"
										className="rounded-md py-2 px-4 focus:outline-0 bg-[#212121] placeholder-gray-300/20 w-full"
										placeholder="Enter Password"
									/>
								</div>
							</td>
						</tr>
						<tr className="table-row">
							<td className="text-right">System</td>
							<td>
								<div className="rounded-md p-[1px] bg-gradient-to-b from-[#d4af37] to-[#cccccc33]">
									<select
										className="rounded-md py-2 px-4 focus:outline-0 bg-[#212121] text-[#c0c0c0] w-full"
										name="system"
										required
									>
										<option hidden>Select System</option>
										<option value="forex">Forex</option>
										<option value="commodities">Commodities</option>
										<option value="indices">Indices</option>
										<option value="cryptocurrencies">Cryptocurrencies</option>
										<option value="stocks">Stocks</option>
									</select>
								</div>
							</td>
						</tr>
						<tr className="table-row">
							<td className="text-right">Gateway</td>
							<td>
								<div className="rounded-md p-[1px] bg-gradient-to-b from-[#d4af37] to-[#cccccc33]">
									<select
										required
										className="rounded-md py-2 px-4 focus:outline-0 bg-[#212121] text-[#c0c0c0] w-full"
										name="gateway"
									>
										<option hidden>Select Gateway</option>
										<option value="mt5">MT5</option>
										<option value="mt4">MT4</option>
										<option value="cTrader">cTrader</option>
										<option value="InteractiveBrokers">
											InteractiveBrokers
										</option>
										<option value="Binance">Binance</option>
									</select>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
				<div className="ml-auto mr-4 w-fit mb-4 flex items-center">
					<Checkbox onCheckedChange={() => {}}>Remember Me</Checkbox>
				</div>
				<Button className="ml-auto mr-4 w-3/5 py-2" type="submit">
					<span className="mx-auto">Login</span>
				</Button>
			</form>
		</Modal>
	);
}
