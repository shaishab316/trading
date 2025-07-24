import controls from '../data/controls';
import ToggleButton from '../components/ui/ToggleButton';
import { MdElectricBolt } from 'react-icons/md';
import GraphCard from '../components/graphCard/GraphCard';
import Button from '../components/ui/Button';

const { d1 } = controls;

export default function Controls() {
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

			<ToggleButton
				className='py-[3px] px-8 border-[#dab24a]'
				style={{ color: '#dab24a' }}
				init={false}
				onToggle={() => {}}
			>
				<MdElectricBolt className='inline-block mr-2' /> Turbo Execute
			</ToggleButton>

			<div className='py-6 grid grid-cols-1 lg:grid-cols-2 gap-6'>
				<div className='flex flex-col gap-6'>
					<GraphCard />

					<GraphCard />
				</div>

				<div className='flex flex-col gap-6'>
					<GraphCard />

					<GraphCard />
				</div>
			</div>

			<div className='p-6 bg-gradient-to-b from-[#165067] to-[#078789] rounded-md relative'>
				<div className='flex flex-wrap w-full items-end gap-4 mb-[23px]'>
					<div className='bg-black/10 border border-[#f9df7baa] backdrop-blur-2xl grow p-4 rounded-xl'>
						<img src='/footer-logo.svg' alt='logo' className='h-[80px]' />
						<h4 className='mt-[14px] font-[Inter]'>
							Watch for reversal at ES 4525
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
							height='15'
							viewBox='0 0 16 15'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M3.95006e-10 7.49986V8.49986H0.1C0.330531 9.62922 0.944182 10.6443 1.8371 11.3732C2.73001 12.1021 3.84735 12.5001 5 12.4999V10.4999C4.24678 10.5013 3.52058 10.2194 2.96567 9.71003C2.41076 9.20071 2.06774 8.50128 2.00476 7.7507C1.94178 7.00012 2.16345 6.25331 2.62573 5.65864C3.08801 5.06397 3.75707 4.66495 4.5 4.54086V6.36786L8.803 3.49986L4.5 0.630859V2.52486C3.26668 2.64881 2.12338 3.22645 1.29188 4.14572C0.460384 5.06498 -1.55717e-05 6.26033 3.95006e-10 7.49986ZM16 7.49986V6.49986H15.9C15.6695 5.3705 15.0558 4.35546 14.1629 3.62655C13.27 2.89764 12.1527 2.49962 11 2.49986H10V4.49986H11C11.7532 4.49842 12.4794 4.78036 13.0343 5.28969C13.5892 5.79901 13.9323 6.49843 13.9952 7.24902C14.0582 7.9996 13.8366 8.7464 13.3743 9.34108C12.912 9.93575 12.2429 10.3348 11.5 10.4589V8.62986L7.197 11.4999L11.5 14.3679V12.4749C12.7333 12.3509 13.8766 11.7733 14.7081 10.854C15.5396 9.93474 16 8.73939 16 7.49986Z'
								fill='currentColor'
							/>
						</svg>
						Refresh
					</Button>

					<Button className='text-[#C0C0C0] flex gap-2 px-6'>
						<svg
							width='17'
							height='17'
							viewBox='0 0 17 17'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M3.17804 3.04688C2.89679 3.15313 2.60929 3.45313 2.53116 3.73438C2.50616 3.82188 2.49991 4.30313 2.50616 5.32813C2.51554 6.79688 2.51554 6.79688 2.58741 6.93125C2.69991 7.14063 2.89366 7.33438 3.09054 7.42813L3.26554 7.51562H4.74991H6.23429L6.40616 7.43438C6.62491 7.33125 6.81866 7.1375 6.92804 6.9125L7.01554 6.73438V5.26563V3.79688L6.91241 3.5875C6.79054 3.3375 6.59366 3.15313 6.35616 3.0625C6.19366 3.00313 6.11866 3 4.74054 3.00313C3.59054 3.00313 3.27179 3.0125 3.17804 3.04688ZM6.22491 3.6C6.32491 3.65938 6.38741 3.72813 6.43429 3.82188C6.49679 3.95313 6.49991 4 6.49991 5.24375C6.49991 6.33438 6.49366 6.55 6.45304 6.64688C6.39054 6.79688 6.32491 6.86875 6.17804 6.94063C6.06866 7 5.99054 7 4.72491 6.99375L3.38741 6.98438L3.25929 6.9C3.01866 6.74063 3.01554 6.72813 3.00616 5.42188C2.99991 4.78438 3.00304 4.17813 3.01554 4.07188C3.04679 3.7875 3.19991 3.59063 3.44054 3.53125C3.49991 3.51563 4.11554 3.50625 4.81241 3.50938L6.07804 3.51563L6.22491 3.6Z'
								fill='currentColor'
							/>
							<path
								d='M10.682 3.04688C10.4945 3.11563 10.2914 3.27188 10.1883 3.425C9.99763 3.7 9.99763 3.69063 10.007 5.3L10.0164 6.76563L10.0914 6.92188C10.1914 7.11875 10.382 7.30938 10.5789 7.40938L10.7351 7.48438H12.2508H13.7664L13.9226 7.40938C14.1195 7.30938 14.3101 7.11875 14.4101 6.92188L14.4851 6.76563V5.25V3.73438L14.4101 3.57813C14.3101 3.38125 14.1195 3.19063 13.9226 3.09063L13.7664 3.01563L12.282 3.00938C11.082 3.00313 10.7758 3.0125 10.682 3.04688ZM13.6758 3.56875C13.7976 3.63438 13.932 3.79063 13.9633 3.9C13.9758 3.94688 13.9851 4.56875 13.9851 5.28125C13.9851 6.44688 13.9789 6.5875 13.932 6.675C13.8664 6.79688 13.7101 6.93125 13.6008 6.9625C13.4914 6.99063 11.0101 6.99063 10.9008 6.9625C10.7914 6.93125 10.6351 6.79688 10.5695 6.675C10.5226 6.59063 10.5164 6.44375 10.507 5.42188C10.5008 4.78438 10.5039 4.17813 10.5164 4.07188C10.5476 3.78438 10.7008 3.59063 10.9414 3.53125C11.0008 3.51563 11.6164 3.50625 12.3133 3.50938C13.4445 3.51563 13.5883 3.52188 13.6758 3.56875Z'
								fill='currentColor'
							/>
							<path
								d='M2.3125 8.5625C2.27187 8.60313 2.25 8.66563 2.25 8.75C2.25 8.83437 2.27187 8.89688 2.3125 8.9375C2.375 9 2.41563 9 8.5 9C14.5844 9 14.625 9 14.6875 8.9375C14.7281 8.89688 14.75 8.83437 14.75 8.75C14.75 8.66563 14.7281 8.60313 14.6875 8.5625C14.625 8.5 14.5844 8.5 8.5 8.5C2.41563 8.5 2.375 8.5 2.3125 8.5625Z'
								fill='currentColor'
							/>
							<path
								d='M8.33099 9.8C8.28411 9.84375 7.79349 10.525 5.97786 13.0562C5.13724 14.2281 5.12474 14.2531 5.25286 14.4187L5.31536 14.5H8.48724C10.4966 14.5 11.681 14.4875 11.7185 14.4688C11.7997 14.425 11.8497 14.2656 11.8091 14.1687C11.7747 14.0687 8.76849 9.88125 8.68099 9.80312C8.60286 9.7375 8.39661 9.73125 8.33099 9.8ZM9.77786 12.2313C10.4685 13.1906 11.0279 13.9812 11.0216 13.9875C11.0154 13.9937 9.87786 13.9969 8.49036 13.9937L5.97161 13.9844L6.61224 13.0938C6.96536 12.6031 7.53724 11.8125 7.88099 11.3344C8.22474 10.8563 8.50911 10.4688 8.51536 10.475C8.51849 10.4812 9.08724 11.2687 9.77786 12.2313Z'
								fill='currentColor'
							/>
						</svg>
						Leverage
					</Button>
				</div>
			</div>
		</div>
	);
}
