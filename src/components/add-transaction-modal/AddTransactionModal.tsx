function AddTransactionModal({ showAddTransactionModal, setShowAddTransactionModal }: { showAddTransactionModal: boolean; setShowAddTransactionModal: (boolVal: boolean) => void }) {
	return (
		<>
			{showAddTransactionModal && (
				<>
					<div
						onClick={e => {
							e.stopPropagation();
						}}
						className="bg-red-300 my-auto mx-auto max-w-sm fixed inset-0 z-[70] flex h-fit overflow-x-hidden outline-none focus:outline-none">
						{/* Modal Container */}
						<div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
							{/* Modal Header */}
							<div className="flex items-start justify-between p-4 border-b border-solid ">
								<h3 className="text-16 font-semibold">Add Transaction</h3>
								<button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowAddTransactionModal(false)}></button>
							</div>
							{/* Modal Form */}
							<form className="relative px-6 pb-4 flex-auto">
								{/* Logo */}
								<div className="flex flex-col w-fit mt-4">
									<label htmlFor="logo" className="font-semibold text-12">
										Logo
									</label>
									<select name="logo" id="logo" className="mt-2">
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
									</select>
								</div>

								{/* Company Name */}
								<div className="mt-4">
									<label htmlFor="name" className="font-semibold text-12">
										Company Name
									</label>
									<input id="companyName" name="companyName" type="text" className="mt-1 px-2 py-1 w-full text-gray-800 bg-white text-14 border shadow-sm border-gray-300 rounded" />
								</div>

								{/* Category */}
								<div className="mt-4">
									<label htmlFor="name" className="font-semibold text-12">
										Category
									</label>
									<input id="category" name="category" type="text" className="mt-1 px-2 py-1 w-full text-gray-800 bg-white text-14 border shadow-sm border-gray-300 rounded" />
								</div>
								{/* Transaction Amount */}
								<div className="mt-4">
									<label htmlFor="name" className="font-semibold text-12">
										Transaction Amount
									</label>
									<input id="transactionAmount" name="transactionAmount" type="number" className="mt-1 px-2 py-1 w-full text-gray-800  bg-white text-14 border shadow-sm border-gray-300  focus:ring rounded" />
								</div>

								{/* Transaction Date */}
								<div className="mt-4">
									<label htmlFor="transactionDate" className="font-semibold text-12">
										Transaction Date
									</label>
									<input id="transactionDate" name="transactionDate" type="date" className="mt-1 px-2 py-1 w-full text-gray-800 bg-white text-14 border shadow-sm border-gray-300 focus:ring rounded" />
								</div>
							</form>
							{/* Footer Buttons */}
							<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
								<button className="ml-6 bg-white text-red-400  font-bold px-4 py-2 rounded shadow hover:bg-red-400 hover:text-white outline-none ease-linear transition-all duration-150" type="button" onClick={() => setShowAddTransactionModal(false)}>
									<span className="text-14">Close</span>
								</button>
								<button className="ml-6 bg-gray-800 text-white hover:bg-gray-900 font-bold px-4 py-2 rounded shadow hover:shadow-md outline-none ease-linear transition-all duration-150" type="button">
									<span className="text-14">Add transaction</span>
								</button>
							</div>
						</div>
					</div>
					{/* Overlay Container */}
					<div
						onClick={() => {
							setShowAddTransactionModal(false);
						}}
						className="border-4 opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			)}
		</>
	);
}

export default AddTransactionModal;
