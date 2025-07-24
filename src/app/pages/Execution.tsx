import execution from '../data/execution.json';
import { IoSettingsOutline } from 'react-icons/io5';
import Switch from '../components/ui/Switch';
import CopyButton from '../components/ui/CopyButton';
import { FaClipboardList, FaLock } from 'react-icons/fa';
import { MdElectricBolt, MdOutlinePriceChange } from 'react-icons/md';
import { SlSizeActual } from 'react-icons/sl';
import { IoMdWarning } from 'react-icons/io';
import BuySell from '../components/execution/BuySell';
import r from '../../utils/random';
import { v4 as uuidv4 } from 'uuid';
import GraphCard from '../components/graphCard/GraphCard';
import Button from '../components/ui/Button';
import ToggleButton from '../components/ui/ToggleButton';

const { d1 } = execution;

export default function Execution() {
	return (
		<div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4'>
				{d1.map((item, idx) => (
					<div
						key={idx}
						className='flex justify-between items-center gap-2 border border-gray-700 relative rounded-md py-2 px-6 backdrop-blur-md bg-black/20'
					>
						<div className='flex flex-col'>
							<p>{item.title}</p>
							<p className='text-[#D4AF37]'>{item.des}</p>
						</div>
						{item.up && (
							<div className='flex gap-2 items-center'>
								{item.up}
								<div className='w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-green-500'></div>
							</div>
						)}
					</div>
				))}
			</div>

			<div className='mb-8'>
				<h2 className='font-semibold text-2xl mb-4'>Order Helper</h2>
				<div className='flex items-center gap-2'>
					<img
						src='/logos/blue.svg'
						alt='logo'
						className='w-[1.5em] h-[1.5em] scale-200'
					/>
					AUTOWEALTH
					<Switch onToggle={() => {}} />
					<IoSettingsOutline className='text-[#00ffff] text-2xl' />
					<div className='mx-8 relative'>
						<CopyButton onCopy={() => {}} data={uuidv4()} />
						<FaLock className='text text-yellow-500 absolute bottom-1 -right-6' />
					</div>
					<IoSettingsOutline className='text-[#00ffff] text-2xl' />
				</div>
			</div>

			<div className='border border-gray-600 p-2 rounded-md flex flex-wrap gap-4 justify-between items-center backdrop-blur-md bg-black/20'>
				<div className='flex flex-wrap gap-4'>
					<div className='flex justify-between items-center gap-2 border border-yellow-200/30 relative rounded-md p-2 bg-black'>
						<FaClipboardList className='text-green-400' />
						Order
						<select className='text-sm px-4 focus:outline-0'>
							<option value='CL_Jan_25' className='text-black'>
								CL Jan 25
							</option>
						</select>
					</div>

					<div className='flex justify-between items-center gap-2 border border-yellow-200/30 relative rounded-md p-2 bg-black'>
						<MdOutlinePriceChange className='text-green-400' />
						Price
						<input
							type='text'
							className='border border-yellow-200/30 rounded-lg w-[80px] text-center focus:outline-0 ml-6'
							defaultValue={79.89}
						/>
					</div>

					<div className='flex justify-between items-center gap-2 border border-yellow-200/30 relative rounded-md p-2 bg-black'>
						<SlSizeActual className='text-green-400' />
						Size
						<select className='text-sm px-4 focus:outline-0'>
							<option value='CL_Jan_25' className='text-black'>
								2 Contracts
							</option>
						</select>
					</div>

					<div className='flex justify-between items-center gap-2 border border-yellow-200/30 relative rounded-md p-2 bg-black'>
						<IoMdWarning className='text-green-400' />
						Risk
						<div className='flex gap-2 items-center ml-6'>
							$1,596(1.5%)
							<div className='w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-green-500'></div>
						</div>
					</div>
				</div>
			</div>

			<div className='py-6 flex flex-col gap-6'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
					<BuySell />

					<GraphCard />
				</div>
			</div>

			<div className='bg-black/20 border border-yellow-400/20 rounded-md p-6'>
				<p className='text-gray-300 mb-2 px-2'>Level 2 Market Depth Grid</p>
				<table className='table-auto w-full border-separate border-spacing-2 cursor-pointer'>
					<tbody>
						<tr className='table-row text-left'>
							<th
								className='border-b border-gray-200 text-gray-200 p-2 font-light hover:bg-gray-200/20 backdrop-blur-md'
								style={{ width: '25%' }}
							>
								Bid Price
							</th>
							<th
								className='border-b border-gray-200 text-gray-200 p-2 font-light hover:bg-gray-200/20 backdrop-blur-md'
								style={{ width: '25%' }}
							>
								Size (Buy Orders)
							</th>
							<th
								className='border-b border-gray-200 text-gray-200 p-2 font-light hover:bg-gray-200/20 backdrop-blur-md'
								style={{ width: '25%' }}
							>
								Bid Price
							</th>
							<th
								className='border-b border-gray-200 text-gray-200 p-2 font-light hover:bg-gray-200/20 backdrop-blur-md'
								style={{ width: '25%' }}
							>
								Size (Sell Orders)
							</th>
						</tr>
						{Array(5)
							.fill(null)
							.map((_, i) => (
								<tr key={i}>
									<td
										className='border-b text-[#2ecc71] border-[#2ecc71] p-2 font-light hover:bg-gray-200/20 backdrop-blur-md'
										style={{ width: '25%' }}
									>
										{r(50, 100).toFixed(2)}
									</td>
									<td
										className='border-b text-[#2ecc71] border-[#2ecc71] p-2 font-light hover:bg-gray-200/20 backdrop-blur-md'
										style={{ width: '25%' }}
									>
										X {r(50, 200) | 0}{' '}
										{i === 4 && <span className='text-white'>← Cluster</span>}
									</td>
									<td
										className='border-b border-[#f9df7b] text-[#f9df7b] p-2 font-light hover:bg-gray-200/20 backdrop-blur-md'
										style={{ width: '25%' }}
									>
										{r(50, 100).toFixed(2)}
									</td>
									<td
										className='border-b border-[#f9df7b] text-[#f9df7b] p-2 font-light hover:bg-gray-200/20 backdrop-blur-md'
										style={{ width: '25%' }}
									>
										X {r(50, 200) | 0}
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>

			<div className='p-6 bg-gradient-to-b from-[#165067] to-[#078789] rounded-md relative'>
				<div className='flex flex-wrap w-full items-end gap-4 mb-[23px]'>
					<div className='bg-black/10 border border-[#f9df7baa] backdrop-blur-2xl grow p-4 rounded-xl'>
						<img src='/footer-logo.svg' alt='logo' className='h-[80px]' />
						<h4 className='mt-[14px] font-[Inter]'>
							Liquidity cluster forming at 79.50 — Possible support zone
						</h4>
					</div>
					<div className='flex grow md:grow-0 md:flex-col flex-wrap gap-4'>
						<img
							src='/ads.png'
							alt='ads'
							className='rounded-md grow md:w-[200px] bg-white select-none py-1 box-border h-[36px] object-contain'
						/>
						<img
							src='/ads2.png'
							alt='ads'
							className='rounded-md grow md:w-[200px] bg-white py-2 px-4 select-none box-border h-[36px] object-contain'
						/>
					</div>
				</div>
				<div className='flex flex-wrap gap-4'>
					<Button className='text-[#C0C0C0] flex gap-2 px-6'>
						<svg
							width='16'
							height='17'
							viewBox='0 0 16 17'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M5.33398 7.16667V5.16667C5.33398 3.69333 6.52732 2.5 8.00065 2.5C9.47398 2.5 10.6673 3.69333 10.6673 5.16667V7.16667M8.00065 10.5C8.17746 10.5 8.34703 10.4298 8.47206 10.3047C8.59708 10.1797 8.66732 10.0101 8.66732 9.83333C8.66732 9.65652 8.59708 9.48695 8.47206 9.36193C8.34703 9.2369 8.17746 9.16667 8.00065 9.16667C7.82384 9.16667 7.65427 9.2369 7.52925 9.36193C7.40422 9.48695 7.33398 9.65652 7.33398 9.83333C7.33398 10.0101 7.40422 10.1797 7.52925 10.3047C7.65427 10.4298 7.82384 10.5 8.00065 10.5ZM8.00065 10.5V12.5M4.40065 7.16667H11.6007C12.1873 7.16667 12.6673 7.64667 12.6673 8.23333V12.9C12.6673 13.78 11.9473 14.5 11.0673 14.5H4.93398C4.05398 14.5 3.33398 13.78 3.33398 12.9V8.23333C3.33398 7.64667 3.81398 7.16667 4.40065 7.16667Z'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeMiterlimit='10'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						L2
					</Button>

					<ToggleButton
						className='py-[3px] px-8 border-[#dab24a]'
						style={{ color: '#dab24a' }}
						init={false}
						onToggle={() => {}}
					>
						<MdElectricBolt className='inline-block mr-2' /> Turbo Execute
					</ToggleButton>
				</div>
			</div>
		</div>
	);
}
