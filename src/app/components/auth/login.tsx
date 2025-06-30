import toast from "react-hot-toast";
import sleep from "../../../utils/sleep";
import Button from "../ui/Button";
import Checkbox from "../ui/Checkbox";
import { useAppDispatch } from "../../../hooks/redux";
import { login } from "../../../redux/features/user/userSlice";
import { closeModal } from "../../../redux/features/modal/modalSlice";

export default function Login() {
	const dispatch = useAppDispatch();

	const handleLogin = async () => {
		const toastId = toast.loading("Logging in...");
		dispatch(closeModal());

		try {
			await sleep(1000); // Todo : Replace with actual logic
			toast.success("Logged in successfully", { id: toastId });
			dispatch(login());
		} catch {
			toast.error("Failed to login", { id: toastId });
		}
	};

	return (
		<form
			onSubmit={handleLogin}
			className="bg-[#272727] rounded-md border border-[#e9c862] text-base p-[32px] text-center"
		>
			<img src="/logo.png" alt="logo" className="w-[200px] mx-auto" />
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
									<option value="Rithmic 01">Rithmic 01</option>
									<option value="Rithmic Paper Trading">
										Rithmic Paper Trading
									</option>
									<option value="Rithmic 04 Colo">Rithmic 04 Colo</option>
									<option value="Rithmic Test">Rithmic Test</option>
									<option value="TopstepTrader">TopstepTrader</option>
									<option value="MES Capital">MES Capital</option>
									<option value="SpeedUp">SpeedUp</option>
									<option value="UProfitTrader">UProfitTrader</option>
									<option value="TradeFundrr">TradeFundrr</option>
									<option value="Apex">Apex</option>
									<option value="TheTradingPit">TheTradingPit</option>
									<option value="FundedFuturesNetwork">
										FundedFuturesNetwork
									</option>
									<option value="Bulenox">Bulenox</option>
									<option value="PropShopTrader">PropShopTrader</option>
									<option value="4PropTrader">4PropTrader</option>
									<option value="FastTrackTrading">FastTrackTrading</option>
									<option value="DayTraders.com">DayTraders.com</option>
									<option value="10XFutures">10XFutures</option>
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
									<option value="Chicago Area">Chicago Area</option>
									<option value="Chicago Area Summary">
										Chicago Area Summary
									</option>
									<option value="Colo 75">Colo 75</option>
									<option value="Colo 75 Summary">Colo 75 Summary</option>
									<option value="Mumbai">Mumbai</option>
									<option value="Seoul">Seoul</option>
									<option value="Hong Kong">Hong Kong</option>
									<option value="Sao Paolo">Sao Paolo</option>
									<option value="Singapore">Singapore</option>
									<option value="Tokyo">Tokyo</option>
									<option value="Sydney">Sydney</option>
									<option value="Frankfurt">Frankfurt</option>
									<option value="Europe">Europe</option>
									<option value="Cape Town">Cape Town</option>
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
	);
}
